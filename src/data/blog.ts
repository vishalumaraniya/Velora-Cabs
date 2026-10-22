// Single source of truth for Blog articles
// Facts needing verification are marked with "TODO: owner to confirm"

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: {
    h2: string;
    body: string[];
  }[];
  relatedRouteSlug?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'bhavnagar-to-ahmedabad-airport-cab-options-travel-tips',
    title: 'Bhavnagar to Ahmedabad Airport: Cab Options and Travel Tips',
    excerpt:
      'Everything you need to know about traveling from Bhavnagar to Sardar Vallabhbhai Patel International Airport (AMD) in Ahmedabad: highway routes, travel duration, toll plazas, and vehicle selection.',
    date: 'October 15, 2026',
    readTime: '5 min read',
    author: 'Velora Cabs Editorial',
    category: 'Airport Travel',
    relatedRouteSlug: 'bhavnagar-to-ahmedabad',
    content: [
      {
        h2: 'Route & Highway Overview',
        body: [
          'The driving distance between Bhavnagar city and Ahmedabad SVPI Airport is approximately 185 km {/* TODO: verify exact GPS door-to-terminal distance */}. Under normal highway traffic conditions via the Bhavnagar–Ahmedabad highway (via Dholera and Fedra), the trip typically takes between 3 hours 15 minutes and 3 hours 45 minutes.',
          'Travelers have the option of taking the modern Dholera expressway corridor or the traditional state highway routes. Because early-morning and late-evening highway traffic around Sarkhej and Ahmedabad ring road can fluctuate, planning your departure with a comfortable 4-hour buffer before flight check-in is highly recommended.',
        ],
      },
      {
        h2: 'Choosing the Right Vehicle for Your Luggage',
        body: [
          'If you are flying domestically on a short business trip with 1 to 2 standard trolley suitcases, a compact sedan like the Maruti Swift Dzire provides exceptional fuel efficiency and legroom.',
          'For international flights or families with 3 or more large check-in bags, booking a Maruti Suzuki Ertiga MUV is far more comfortable. Its split-folding third-row seating expands the luggage boot while still providing ample seating for up to 5 or 6 travelers.',
        ],
      },
      {
        h2: 'Highway Stops and Amenities',
        body: [
          'Clean highway restaurants and food plazas are readily available near Fedra and Dholera junctions. Your Velora Cabs chauffeur is always happy to pause for tea, snacks, or fuel stops per your schedule.',
          'All toll plazas along the route accept FASTag, and toll terms are confirmed upfront before your booking so you experience zero out-of-pocket delays during your airport run.',
        ],
      },
    ],
  },
  {
    slug: 'palitana-shatrunjaya-yatra-cab-travel-guide',
    title: 'Palitana Shatrunjaya Yatra by Cab: Travel Guide',
    excerpt:
      'A practical pilgrimage guide for Jain yatra travelers visiting the holy Shatrunjaya hills in Palitana from Bhavnagar or Ahmedabad. Departure timings, climbing preparation, and local cab logistics.',
    date: 'October 18, 2026',
    readTime: '6 min read',
    author: 'Velora Cabs Pilgrimage Desk',
    category: 'Pilgrimage Guide',
    relatedRouteSlug: 'bhavnagar-to-palitana',
    content: [
      {
        h2: 'The Spiritual Significance of Shatrunjaya',
        body: [
          'Palitana in Bhavnagar district is revered as one of the most sacred pilgrimage destinations in Jainism. The Shatrunjaya mountain hosts over 800 marble-carved temples, dating back centuries, dedicated to the Tirthankaras.',
          'The hill climb consists of over 3,500 stone steps from the base at Taleti up to the main temple complex. Most yatris begin their climb early in the morning before dawn (between 5:00 AM and 6:30 AM) to avoid midday heat.',
        ],
      },
      {
        h2: 'Travel Logistics from Bhavnagar to Palitana',
        body: [
          'Palitana is situated roughly 55 km southwest of Bhavnagar city. By private AC cab, the drive takes around 1 hour 10 minutes via the Bhavnagar–Palitana road {/* TODO: verify exact travel time */}.',
          'Velora Cabs provides early-morning 4:30 AM pickups from Bhavnagar hotels and residences, ensuring pilgrims reach the Taleti parking base comfortably before sunrise. Your driver remains stationed at the parking area until your descent is complete.',
        ],
      },
      {
        h2: 'Day Trip vs. Overnight Stay Tips',
        body: [
          'Pilgrims traveling from Ahmedabad (approx. 215 km) often book a round-trip cab package that includes an overnight stay at a Palitana dharamsala or a same-day return after noon pooja and darshan.',
          'For senior citizens or yatris with reduced mobility, traditional doli (palanquin) services are arranged locally at the Taleti base. Ensure you carry adequate drinking water and light footwear for the base ascent.',
        ],
      },
    ],
  },
  {
    slug: 'planning-dholera-visit-from-ahmedabad-cab-guide',
    title: 'Planning a Dholera Visit from Ahmedabad: Travel & Cab Guide',
    excerpt:
      'Corporate, investor, and industrial guide to visiting Dholera Special Investment Region (SIR) from Ahmedabad. Driving routes, expressway updates, and day-trip taxi arrangements.',
    date: 'October 20, 2026',
    readTime: '4 min read',
    author: 'Velora Cabs Corporate Desk',
    category: 'Business Travel',
    relatedRouteSlug: 'ahmedabad-to-dholera',
    content: [
      {
        h2: 'Understanding Dholera SIR Development',
        body: [
          'Dholera Special Investment Region (SIR) is India’s flagship greenfield smart city development under the Delhi–Mumbai Industrial Corridor (DMIC). Spanning over 900 sq km, it is rapidly becoming a hub for semiconductor manufacturing, renewable energy, and heavy engineering facilities.',
          'Investors, consultants, and technical teams routinely visit the Activation Zone (Administrative Building and ABCD Building) from Ahmedabad for site inspections, land evaluations, and corporate conferences.',
        ],
      },
      {
        h2: 'Drive Duration and Expressway Status',
        body: [
          'Dholera is situated roughly 100 to 110 km south of Ahmedabad city. The drive takes approximately 2 hours via the existing highway route, and will be significantly shortened once the dedicated Ahmedabad–Dholera Expressway is fully commissioned {/* TODO: owner to confirm latest expressway opening status */}.',
          'Because internal transport within the expansive Dholera SIR project zone is limited, hiring a dedicated day-rental cab from Velora Cabs ensures you can visit multiple construction zones, industrial parcels, and regional offices without vehicle shortage.',
        ],
      },
      {
        h2: 'Recommended Itinerary for Day Visitors',
        body: [
          'We recommend an 8:00 AM departure from Ahmedabad city or Ahmedabad Airport to arrive in Dholera by 10:00 AM. After scheduled meetings and site rounds, our chauffeur drives you comfortably back to Ahmedabad in time for evening flights or trains.',
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
