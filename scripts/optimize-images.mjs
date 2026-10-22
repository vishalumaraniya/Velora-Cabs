import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rootDir = process.cwd();
const publicImagesDir = path.join(rootDir, 'public', 'images');
const backupDir = path.join(rootDir, 'originals-backup');

// Ensure backup directory exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Ensure .gitignore includes /originals-backup
const gitignorePath = path.join(rootDir, '.gitignore');
if (fs.existsSync(gitignorePath)) {
  const gitignore = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignore.includes('originals-backup')) {
    fs.appendFileSync(gitignorePath, '\n# Image originals backup\noriginals-backup/\n');
    console.log('Added originals-backup/ to .gitignore');
  }
}

async function run() {
  const files = fs.readdirSync(publicImagesDir);
  const imageFiles = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to process.\n`);

  const report = [];

  for (const file of imageFiles) {
    const srcPath = path.join(publicImagesDir, file);
    const backupPath = path.join(backupDir, file);

    // 1. Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(srcPath, backupPath);
    }

    const originalStats = fs.statSync(srcPath);
    const originalSizeKb = (originalStats.size / 1024).toFixed(1);
    const metadata = await sharp(srcPath).metadata();

    const baseName = path.parse(file).name;
    const webpName = `${baseName}.webp`;
    const webpPath = path.join(publicImagesDir, webpName);

    // Determine max dimension based on file category
    let maxWidth = 1600;
    if (file.startsWith('passenger_')) {
      maxWidth = 160; // avatar
    } else if (file.startsWith('velora_hero_') || file.startsWith('velora_taxi_')) {
      maxWidth = 1920; // hero
    } else if (file.startsWith('velora_dzire') || file.startsWith('velora_ertiga') || file.startsWith('velora_traveller')) {
      maxWidth = 800; // fleet
    }

    let pipeline = sharp(srcPath);
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    // Convert to webp
    await pipeline
      .webp({ quality: 80, effort: 5 })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSizeKb = (webpStats.size / 1024).toFixed(1);
    const savingsPercent = (((originalStats.size - webpStats.size) / originalStats.size) * 100).toFixed(1);

    report.push({
      file,
      dimensions: `${metadata.width}x${metadata.height}`,
      originalSizeKb: `${originalSizeKb} KB`,
      webpSizeKb: `${webpSizeKb} KB`,
      savings: `${savingsPercent}%`,
    });

    // Also generate .avif for hero images
    if (file.startsWith('velora_hero_') || file.startsWith('velora_taxi_')) {
      const avifName = `${baseName}.avif`;
      const avifPath = path.join(publicImagesDir, avifName);
      let avifPipeline = sharp(srcPath);
      if (metadata.width && metadata.width > 1920) {
        avifPipeline = avifPipeline.resize({ width: 1920, withoutEnlargement: true });
      }
      await avifPipeline.avif({ quality: 55, effort: 4 }).toFile(avifPath);
    }
  }

  // Generate og-velora.jpg (1200x630) for OpenGraph social crawlers
  const ogSourcePath = path.join(backupDir, 'velora_hero_city_v2.png');
  const ogDestPath = path.join(publicImagesDir, 'og-velora.jpg');
  if (fs.existsSync(ogSourcePath)) {
    await sharp(ogSourcePath)
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(ogDestPath);
    console.log('Generated /public/images/og-velora.jpg (1200x630) for OpenGraph social card.');
  }

  // Print table
  console.log('\n--- IMAGE OPTIMIZATION REPORT ---');
  console.table(report);

  let totalOriginal = 0;
  let totalWebp = 0;
  for (const r of report) {
    totalOriginal += parseFloat(r.originalSizeKb);
    totalWebp += parseFloat(r.webpSizeKb);
  }
  console.log(`Total Original Size: ${totalOriginal.toFixed(1)} KB`);
  console.log(`Total WebP Size: ${totalWebp.toFixed(1)} KB`);
  console.log(`Overall Savings: ${(((totalOriginal - totalWebp) / totalOriginal) * 100).toFixed(1)}%\n`);
}

run().catch((err) => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
