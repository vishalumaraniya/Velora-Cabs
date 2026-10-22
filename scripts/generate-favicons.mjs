import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SVG_PATH = path.resolve('public/icon.svg');

// Simple ICO generator combining PNG buffers (16x16, 32x32, 48x48)
function createIcoFromPngs(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count of images

  const dirEntries = [];
  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset of image data
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((p) => p.buffer)]);
}

async function main() {
  console.log('Generating high-resolution PNG favicons and ICO from', SVG_PATH);

  // 1. Generate PNGs
  const sizes = [
    { size: 48, dest: 'public/favicon-48x48.png' },
    { size: 96, dest: 'public/favicon-96x96.png' },
    { size: 180, dest: 'public/apple-touch-icon.png' },
    { size: 180, dest: 'src/app/apple-icon.png' },
    { size: 192, dest: 'public/icon-192.png' },
    { size: 512, dest: 'public/icon-512.png' },
    { size: 512, dest: 'src/app/icon.png' },
  ];

  for (const { size, dest } of sizes) {
    await sharp(SVG_PATH)
      .resize(size, size)
      .png()
      .toFile(path.resolve(dest));
    console.log(`✓ Created ${dest} (${size}x${size})`);
  }

  // 2. Generate multi-resolution ICO (16, 32, 48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of icoSizes) {
    const buffer = await sharp(SVG_PATH).resize(size, size).png().toBuffer();
    pngBuffers.push({ buffer, size });
  }

  const icoBuffer = createIcoFromPngs(pngBuffers);
  fs.writeFileSync(path.resolve('public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.resolve('src/app/favicon.ico'), icoBuffer);
  console.log('✓ Created public/favicon.ico and src/app/favicon.ico (16, 32, 48px)');

  console.log('All favicon assets generated successfully!');
}

main().catch((err) => {
  console.error('Failed to generate favicons:', err);
  process.exit(1);
});
