// Single source of truth for all 14 city pages
// No prices, no fake facts

export interface CityData {
  slug: string;
  name: string;
  intro: string;
  pickupAreas: string[];
  popularDestinations: { label: string; routeSlug: string }[];
  landmarks: {
    airports?: string[];
    railwayStations?: string[];
    ports?: string[];
    industrial?: string[];
    other?: string[];
  };
  faqs: { question: string; answer: string }[];
}

export const CITIES: CityData[] = [
  {
    slug: 'bhavnagar',
    name: 'Bhavnagar',
    intro:
      'Bhavnagar is the largest city in Saurashtra and the base of operations for Velora Cabs. Situated on the Gulf of Khambhat coast, Bhavnagar is a hub for ship-breaking at Alang, agriculture trade, the Bhavnagar Port, and the sacred Jain pilgrimage to Palitana — just 55 km away. Whether you need a local city ride, an airport transfer from Bhavnagar Airport (BHU), or a long-distance outstation cab to Ahmedabad, Mumbai or Surat, Velora Cabs operates 24x7 from Bhavnagar to serve every travel need.',
    pickupAreas: [
      'Bhavnagar Railway Station',
      'Bhavnagar Airport (BHU)',
      'Crescent Circle',
      'Ghogha Road',
      'Waghawadi Road',
      'Nari Road',
      'Bhavnagar Port Road',
      'Vijay Nagar',
      'Amba Chowk',
      'Gaurishankar Lake area',
    ],
    popularDestinations: [
      { label: 'Bhavnagar to Ahmedabad Taxi', routeSlug: 'bhavnagar-to-ahmedabad' },
      { label: 'Bhavnagar to Surat Taxi', routeSlug: 'bhavnagar-to-surat' },
      { label: 'Bhavnagar to Mumbai Taxi', routeSlug: 'bhavnagar-to-mumbai' },
      { label: 'Bhavnagar to Vadodara Taxi', routeSlug: 'bhavnagar-to-vadodara' },
      { label: 'Bhavnagar to Palitana Taxi', routeSlug: 'bhavnagar-to-palitana' },
      { label: 'Bhavnagar to Bharuch Taxi', routeSlug: 'bhavnagar-to-bharuch' },
      { label: 'Bhavnagar to Dahej Taxi', routeSlug: 'bhavnagar-to-dahej' },
      { label: 'Bhavnagar to Bhuj Taxi', routeSlug: 'bhavnagar-to-bhuj' },
    ],
    landmarks: {
      airports: ['Bhavnagar Airport (BHU)'],
      railwayStations: ['Bhavnagar Terminal Railway Station'],
      ports: ['Bhavnagar Port', 'Alang Ship Breaking Yard'],
      industrial: ['Bhavnagar GIDC', 'Alang industrial area'],
      other: ['Gaurishankar Lake', 'Takhteshwar Temple', 'Nilambag Palace'],
    },
    faqs: [
      {
        question: 'Which taxi service operates 24x7 in Bhavnagar?',
        answer:
          'Velora Cabs provides 24x7 cab service in Bhavnagar — for local rides, airport transfers to Bhavnagar Airport (BHU) or outstation trips to Ahmedabad, Surat, Mumbai and more. Call or WhatsApp +91 87803 11279 any time.',
      },
      {
        question: 'Which outstation routes are available from Bhavnagar?',
        answer:
          'From Bhavnagar we operate cabs to Ahmedabad, Surat, Vadodara, Mumbai, Bharuch, Dahej, Palitana, Amreli, Bhuj and other Gujarat destinations. Get a free quote for your route via WhatsApp.',
      },
      {
        question: 'Is a cab from Bhavnagar to Palitana available for early morning pilgrimage?',
        answer:
          'Yes. We regularly operate early morning (4–5 AM) cabs from Bhavnagar to Palitana for pilgrims planning to climb Shatrunjaya hill at sunrise. Book the previous evening to confirm your pickup.',
      },
    ],
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    intro:
      'Ahmedabad — Gujarat\'s largest city and a UNESCO World Heritage City — is a major commercial, industrial and educational hub. Velora Cabs serves Ahmedabad for outstation cab bookings to Bhavnagar, Vadodara, Surat, Dahej, Dholera, Palitana and beyond. Our drivers pick up from all major Ahmedabad zones — Sardar Patel International Airport (AMD), SG Road, Navrangpura, Bopal, Satellite, GIFT City and Gandhinagar — and cover every outstation corridor from the city.',
    pickupAreas: [
      'Sardar Patel International Airport (AMD)',
      'Ahmedabad Railway Station (Kalupur)',
      'Sabarmati Junction',
      'SG Road / Prahlad Nagar',
      'CG Road / Navrangpura',
      'Satellite / Ambawadi',
      'Bopal / South Bopal',
      'Maninagar',
      'Vastrapur / Bodakdev',
      'GIFT City, Gandhinagar',
    ],
    popularDestinations: [
      { label: 'Ahmedabad to Bhavnagar Taxi', routeSlug: 'ahmedabad-to-bhavnagar' },
      { label: 'Ahmedabad to Vadodara Taxi', routeSlug: 'ahmedabad-to-vadodara' },
      { label: 'Ahmedabad to Dholera Taxi', routeSlug: 'ahmedabad-to-dholera' },
      { label: 'Ahmedabad to Palitana Taxi', routeSlug: 'ahmedabad-to-palitana' },
      { label: 'Ahmedabad to Dahej Taxi', routeSlug: 'ahmedabad-to-dahej' },
    ],
    landmarks: {
      airports: ['Sardar Vallabhbhai Patel International Airport (AMD)'],
      railwayStations: ['Ahmedabad Railway Station (Kalupur)', 'Sabarmati Junction'],
      industrial: ['GIDC Naroda', 'GIDC Vatva', 'GIFT City'],
      other: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Akshardham Temple'],
    },
    faqs: [
      {
        question: 'Which outstation cabs depart from Ahmedabad?',
        answer:
          'From Ahmedabad, Velora Cabs operates outstation cabs to Bhavnagar, Vadodara, Surat, Dholera SIR, Palitana, Dahej, Bharuch, Bhuj and more across Gujarat. WhatsApp us for a free quote.',
      },
      {
        question: 'Is a cab from Ahmedabad Airport to outstation cities available?',
        answer:
          'Yes. We pick up directly from AMD arrivals and drive to any Gujarat outstation destination — Bhavnagar, Dahej, Dholera or Palitana — without you needing to change vehicles.',
      },
      {
        question: 'Is there a cab service from Ahmedabad at midnight or early morning?',
        answer:
          'Yes. Velora Cabs operates 24x7. Midnight, 2 AM, and early morning cabs are available from Ahmedabad — ideal for flight connections and long outstation trips.',
      },
    ],
  },
  {
    slug: 'vadodara',
    name: 'Vadodara',
    intro:
      'Vadodara (Baroda) is Gujarat\'s third-largest city, celebrated for its cultural heritage, Maharaja Sayajirao University, and major industrial zones at Waghodia, Savli and the Petrochemical complex. Velora Cabs provides outstation cab service from Vadodara for corporate travellers visiting Gujarat\'s industrial corridors, pilgrims heading to Palitana via Bhavnagar, and passengers needing airport and intercity connections. Pickup is available from Vadodara Airport (BDQ), Vadodara Junction, and all major residential areas.',
    pickupAreas: [
      'Vadodara Airport (BDQ)',
      'Vadodara Junction (Railway Station)',
      'Sayajigunj / Alkapuri',
      'Waghodia GIDC',
      'Savli industrial area',
      'Manjalpur',
      'Harni Road',
      'Kalali / Gotri',
      'Chhani Road',
    ],
    popularDestinations: [
      { label: 'Vadodara to Ahmedabad Taxi', routeSlug: 'vadodara-to-ahmedabad' },
      { label: 'Vadodara to Surat Taxi', routeSlug: 'vadodara-to-surat' },
      { label: 'Vadodara to Bhavnagar Taxi', routeSlug: 'vadodara-to-bhavnagar' },
    ],
    landmarks: {
      airports: ['Vadodara Airport (BDQ)'],
      railwayStations: ['Vadodara Junction'],
      industrial: ['Waghodia GIDC', 'Savli GIDC', 'ONGC Vadodara'],
      other: ['Laxmi Vilas Palace', 'Sayaji Gardens', 'Baroda Museum'],
    },
    faqs: [
      {
        question: 'Which outstation cabs are available from Vadodara?',
        answer:
          'From Vadodara, Velora Cabs operates to Ahmedabad, Surat, Bhavnagar, and other Gujarat cities. We pick up from Vadodara Airport (BDQ), Vadodara Junction or any Vadodara address.',
      },
      {
        question: 'Can I book a Vadodara to Ahmedabad Airport cab at night?',
        answer:
          'Yes. 24x7 cab service means we accept early morning and late-night bookings from Vadodara to Ahmedabad Airport (AMD).',
      },
      {
        question: 'Is there a cab from Vadodara to Palitana for pilgrimage?',
        answer:
          'Yes. We drive you from Vadodara through Bhavnagar to Palitana tirth base — a popular route for Jain pilgrim groups. Tempo Traveller is available for large groups.',
      },
    ],
  },
  {
    slug: 'surat',
    name: 'Surat',
    intro:
      'Surat — the Diamond City — is one of India\'s fastest-growing metropolises, globally known for diamond cutting and polishing and the textile trade. Velora Cabs serves Surat for outstation cabs to Bhavnagar, Vadodara, Mumbai, Vapi, Bharuch and beyond. Our pickups cover Surat Railway Station, Surat Airport (STV), Ring Road, Diamond Bourse, Katargam, Hazira LNG port, and all major residential areas.',
    pickupAreas: [
      'Surat Railway Station',
      'Surat Airport (STV)',
      'Ring Road / Adajan',
      'Surat Diamond Bourse (SDB)',
      'Katargam / Udhna',
      'Hazira',
      'Varachha Road',
      'Althan / Pal area',
      'Dumas Road',
    ],
    popularDestinations: [
      { label: 'Surat to Mumbai Taxi', routeSlug: 'surat-to-mumbai' },
      { label: 'Surat to Vadodara Taxi', routeSlug: 'surat-to-vadodara' },
      { label: 'Surat to Bhavnagar Taxi', routeSlug: 'surat-to-bhavnagar' },
    ],
    landmarks: {
      airports: ['Surat Airport (STV)'],
      railwayStations: ['Surat Railway Station'],
      industrial: ['Surat Diamond Bourse (SDB)', 'Hazira LNG Terminal', 'Sachin GIDC'],
      other: ['Textile Market', 'Dumas Beach', 'Swaminarayan Temple Surat'],
    },
    faqs: [
      {
        question: 'Which outstation cabs are available from Surat?',
        answer:
          'From Surat, Velora Cabs operates to Mumbai, Vadodara, Bhavnagar, Vapi, Bharuch and other Gujarat/Maharashtra destinations.',
      },
      {
        question: 'Is a cab from Surat to Mumbai Airport available?',
        answer:
          'Yes. We drop you to Mumbai CSIA T1 or T2. Share your flight time for timely departure from Surat.',
      },
      {
        question: 'Can I book a cab from Surat Diamond Bourse to Vadodara?',
        answer:
          'Yes. The Surat Diamond Bourse is one of our regular pickup points for the Surat–Vadodara–Ahmedabad corridor.',
      },
    ],
  },
  {
    slug: 'bharuch',
    name: 'Bharuch',
    intro:
      'Bharuch (Broach) is one of Gujarat\'s most important industrial and port cities, situated at the mouth of the Narmada river. Its Ankleshwar GIDC is one of Asia\'s largest chemical industrial zones, and Dahej SEZ lies just beyond. Velora Cabs provides outstation and industrial cab service from Bharuch connecting to Bhavnagar, Surat, Vadodara, Ahmedabad and Dahej. Pickups available from Bharuch city, Bharuch Railway Station, and Ankleshwar GIDC.',
    pickupAreas: [
      'Bharuch Railway Station',
      'Bharuch city centre',
      'Ankleshwar GIDC',
      'Ankleshwar town',
      'Jageshwar area',
      'Bharuch Bridge approach',
    ],
    popularDestinations: [
      { label: 'Bharuch to Bhavnagar Taxi', routeSlug: 'bharuch-to-bhavnagar' },
      { label: 'Bharuch to Dahej Taxi', routeSlug: 'bhavnagar-to-dahej' },
    ],
    landmarks: {
      railwayStations: ['Bharuch Railway Station'],
      ports: ['Dahej Port (approx 45 km)'],
      industrial: ['Ankleshwar GIDC', 'Dahej SEZ (nearby)', 'Fertiliser plant area'],
      other: ['Narmada Riverfront', 'Shuklatirth'],
    },
    faqs: [
      {
        question: 'Is a cab from Bharuch to Bhavnagar available?',
        answer:
          'Yes. Velora Cabs operates on the Bharuch–Bhavnagar route — direct AC cab with fixed fare confirmed before travel.',
      },
      {
        question: 'Can I get a cab from Ankleshwar GIDC to Ahmedabad?',
        answer:
          'Yes. We pick up from the Ankleshwar GIDC gate and drive to any Ahmedabad destination — airport, office or residence.',
      },
      {
        question: 'Is there a cab from Bharuch to Dahej industrial area?',
        answer:
          'Yes. Dahej SEZ is approximately 45 km from Bharuch. We include Dahej as a separate cab booking or as part of the Bharuch stop on a longer route.',
      },
    ],
  },
  {
    slug: 'dahej',
    name: 'Dahej',
    intro:
      'Dahej is one of Gujarat\'s premier industrial port towns on the Gulf of Khambhat. Its Dahej SEZ, ONGC Dahej Terminal, Dahej LNG Import Terminal and petrochemical complex attract industrial professionals from across India. Velora Cabs provides dedicated cab service for plant professionals travelling to and from Dahej — including early morning plant reporting cabs from Ahmedabad, Bhavnagar and Bharuch.',
    pickupAreas: [
      'Dahej SEZ main gate',
      'ONGC Dahej Terminal entrance',
      'Dahej LNG Terminal gate',
      'Dahej town',
      'Dahej jetty approach road',
    ],
    popularDestinations: [
      { label: 'Dahej to Ahmedabad Taxi', routeSlug: 'dahej-to-ahmedabad' },
      { label: 'Dahej to Bhavnagar Taxi', routeSlug: 'dahej-to-bhavnagar' },
    ],
    landmarks: {
      ports: ['Dahej Jetty', 'ONGC Dahej Terminal'],
      industrial: ['Dahej SEZ', 'Dahej LNG Terminal', 'Petrochemical Complex'],
    },
    faqs: [
      {
        question: 'Is a cab available from Dahej to Ahmedabad Airport?',
        answer:
          'Yes. We pick up from Dahej plant gates and drive to AMD — ideal for professionals catching evening flights after site visits.',
      },
      {
        question: 'Can I book a cab from Dahej to Bhavnagar?',
        answer:
          'Yes. The Dahej to Bhavnagar route runs via Bharuch and is approximately 3.5 to 4 hours.',
      },
      {
        question: 'Are early morning cabs available from Ahmedabad to Dahej?',
        answer:
          'Yes. Early morning cabs from Ahmedabad to Dahej are available for 6 AM plant reporting. Book the previous evening to confirm departure time.',
      },
    ],
  },
  {
    slug: 'vapi',
    name: 'Vapi',
    intro:
      'Vapi is Gujarat\'s southernmost major city, anchored by one of India\'s largest chemical and pharmaceutical GIDC industrial estates on the Vapi–Silvassa industrial belt. Located just 12 km from Daman and well-connected by Western Railway to Mumbai and Surat, Vapi is a busy transit and industrial hub. Velora Cabs provides outstation cab service from Vapi to Mumbai, Daman, Surat and beyond.',
    pickupAreas: [
      'Vapi Railway Station (Vapi Junction)',
      'Vapi GIDC industrial area',
      'Vapi town centre',
      'Silvassa Road',
    ],
    popularDestinations: [
      { label: 'Vapi to Mumbai Taxi', routeSlug: 'vapi-to-mumbai' },
      { label: 'Vapi to Daman Taxi', routeSlug: 'vapi-to-daman' },
    ],
    landmarks: {
      railwayStations: ['Vapi Junction (Western Railway)'],
      industrial: ['Vapi GIDC', 'Silvassa industrial belt'],
      other: ['Daman border checkpoint (12 km)'],
    },
    faqs: [
      {
        question: 'Is a cab from Vapi to Mumbai available 24x7?',
        answer:
          'Yes. Velora Cabs operates 24 hours. Late-night and early-morning cabs from Vapi to Mumbai are accepted — call or WhatsApp +91 87803 11279.',
      },
      {
        question: 'Can I get a cab from Vapi to Daman?',
        answer:
          'Yes. The short 12 km ride from Vapi Junction or GIDC to Daman (Nani/Moti Daman) is available any time.',
      },
      {
        question: 'Is there a cab from Vapi to Surat?',
        answer:
          'Yes. Vapi to Surat is approximately 80 km — a comfortable 1.5 hour ride via NH 48. WhatsApp us for a fare quote.',
      },
    ],
  },
  {
    slug: 'daman',
    name: 'Daman',
    intro:
      'Daman is a Union Territory coastal destination on the Arabian Sea coast, popular for beach resorts, Portuguese heritage forts, and duty-free leisure. Located just across the Gujarat border from Vapi, Daman sees heavy weekend tourism from Surat, Vadodara and Mumbai. Velora Cabs connects Daman to Vapi Railway Station and onward to Mumbai, Surat and other Gujarat cities for resort guests and industrial visitors.',
    pickupAreas: [
      'Devka Beach area',
      'Nani Daman jetty',
      'Moti Daman fort area',
      'Daman town centre',
      'Seaface resorts',
    ],
    popularDestinations: [
      { label: 'Daman to Vapi Taxi', routeSlug: 'daman-to-vapi' },
      { label: 'Daman to Mumbai Taxi', routeSlug: 'vapi-to-mumbai' },
    ],
    landmarks: {
      other: [
        'Devka Beach',
        'Moti Daman Fort',
        'Nani Daman Jetty',
        'Jampore Beach',
        'Portuguese Heritage sites',
      ],
    },
    faqs: [
      {
        question: 'Is a cab from Daman to Mumbai available?',
        answer:
          'Yes. We drive from Daman via Vapi to Mumbai — approximately 4 hours. Drop at Mumbai Airport CSIA, Andheri, Borivali or any suburb.',
      },
      {
        question: 'Can I get a cab from Daman to Vapi Railway Station?',
        answer:
          'Yes. The 12 km Daman to Vapi Junction ride connects you to Western Railway trains for Mumbai, Surat and Vadodara.',
      },
      {
        question: 'Is a return cab from Daman to Surat available?',
        answer:
          'Yes. Daman to Surat is approximately 90 km — a quick 1.5 to 2 hour ride via Vapi and NH 48.',
      },
    ],
  },
  {
    slug: 'dholera',
    name: 'Dholera',
    intro:
      'Dholera Special Investment Region (DSIR) is India\'s first and largest greenfield smart city project — a massive planned industrial and residential township under development approximately 100 km south of Ahmedabad. With the upcoming Dholera International Airport and the Delhi–Mumbai Industrial Corridor (DMIC) alignment running through the region, Dholera is attracting investor, government and construction traffic rapidly. Velora Cabs provides corporate and investor cab service from Ahmedabad to Dholera SIR.',
    pickupAreas: [
      'Dholera SIR project office',
      'Dholera Activation Road entry',
      'DSIR plot site offices',
    ],
    popularDestinations: [
      { label: 'Dholera to Ahmedabad Taxi', routeSlug: 'ahmedabad-to-dholera' },
    ],
    landmarks: {
      airports: ['Dholera International Airport (under construction)'],
      industrial: [
        'Dholera Special Investment Region (DSIR)',
        'DMIC Dholera node',
        'GIDC Dholera (proposed)',
      ],
    },
    faqs: [
      {
        question: 'Is a cab from Ahmedabad to Dholera SIR available?',
        answer:
          'Yes. Velora Cabs provides cab service for investors, government officials and construction professionals from Ahmedabad to Dholera SIR project sites.',
      },
      {
        question: 'How long is the Ahmedabad to Dholera cab journey?',
        answer:
          'Approximately 1.5 to 2 hours via the Dholera Activation Road from Ahmedabad.',
      },
      {
        question: 'Can I get a cab from Ahmedabad Airport directly to Dholera?',
        answer:
          'Yes. Corporate delegations flying into AMD and heading to Dholera SIR for site visits frequently use our airport-to-Dholera cab service.',
      },
    ],
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    intro:
      'Mumbai — India\'s financial capital — is connected to Gujarat\'s cities via the NH 48 highway corridor. Velora Cabs provides outstation cab service from Mumbai to Bhavnagar, Surat, Vapi and other Gujarat destinations. We pick up from CSIA Airport (T1/T2), Andheri, Borivali, BKC, Navi Mumbai, Thane and all major Mumbai zones, and drive you directly to any Gujarat city without the complexity of trains or multiple transfers.',
    pickupAreas: [
      'CSIA T1 (Domestic) Airport',
      'CSIA T2 (International) Airport',
      'Andheri (E/W)',
      'Borivali',
      'BKC / Bandra East',
      'Nariman Point / Fort',
      'Navi Mumbai / Vashi',
      'Thane',
      'Bhayandar / Mira Road',
    ],
    popularDestinations: [
      { label: 'Mumbai to Bhavnagar Taxi', routeSlug: 'mumbai-to-bhavnagar' },
      { label: 'Mumbai to Surat Taxi', routeSlug: 'mumbai-to-surat' },
      { label: 'Mumbai to Vapi Taxi', routeSlug: 'mumbai-to-vapi' },
    ],
    landmarks: {
      airports: ['Chhatrapati Shivaji Maharaj International Airport (BOM/CSIA) T1 & T2'],
      railwayStations: [
        'Mumbai Central',
        'Dadar',
        'Bandra Terminus',
        'Borivali Station',
      ],
      other: ['BKC (Bandra Kurla Complex)', 'SEEPZ', 'Dharavi'],
    },
    faqs: [
      {
        question: 'Which Gujarat cities can I reach by cab from Mumbai?',
        answer:
          'From Mumbai, Velora Cabs operates to Bhavnagar, Surat, Vapi, Daman and other Gujarat destinations. Share your route on WhatsApp for a free quote.',
      },
      {
        question: 'Is a cab from Mumbai Airport to Bhavnagar available?',
        answer:
          'Yes. We pick up from CSIA T1 or T2 arrivals and drive directly to Bhavnagar — approximately 11 to 12 hours depending on traffic.',
      },
      {
        question: 'What is the best time to depart Mumbai for Gujarat by cab?',
        answer:
          'Departing Mumbai after 10 PM or before 5 AM avoids WEH and city approach traffic. Post-midnight departures are popular for reaching Gujarat cities by early morning.',
      },
    ],
  },
  {
    slug: 'bhuj',
    name: 'Bhuj',
    intro:
      'Bhuj, the administrative and cultural capital of Kutch district, is a city defined by its resilient post-2001 earthquake reconstruction, its vibrant craft traditions and the world-famous Rann of Kutch. Beyond tourism, Bhuj is growing as a logistics and industrial hub with Bhuj Airport (BHJ), proximity to Mundra Port and the Kandla/Gandhidham rail corridor. Velora Cabs provides cab service from Bhuj connecting to Gandhidham, Ahmedabad and beyond.',
    pickupAreas: [
      'Bhuj Railway Station',
      'Bhuj Airport (BHJ)',
      'Bhuj city centre',
      'Mundra Road approach',
      'Bhuj Old City area',
    ],
    popularDestinations: [
      { label: 'Bhuj to Gandhidham Taxi', routeSlug: 'bhuj-to-gandhidham' },
    ],
    landmarks: {
      airports: ['Bhuj Airport (BHJ)'],
      railwayStations: ['Bhuj Railway Station'],
      industrial: ['Mundra Port (approx 60 km)', 'APSE Zone'],
      other: ['Aina Mahal', 'Prag Mahal', 'Rann of Kutch (Bhuj base)', 'Bhuj Hamirsar Lake'],
    },
    faqs: [
      {
        question: 'Is there a cab from Bhuj to Ahmedabad?',
        answer:
          'Yes. Bhuj to Ahmedabad is a long-distance route through Kutch and Saurashtra — approximately 6 to 7 hours. Velora Cabs covers this route with experienced long-distance drivers.',
      },
      {
        question: 'Can I book a cab from Bhuj to Gandhidham Railway Station?',
        answer:
          'Yes. The 60 km Bhuj to Gandhidham ride connects you to Gandhidham Junction for trains to Mumbai, Ahmedabad and beyond.',
      },
      {
        question: 'Is there a cab from Bhuj Airport to Mundra Port?',
        answer:
          'Yes. Mundra Port is approximately 60 km from Bhuj Airport (BHJ). We cover this industrial corridor on prior booking.',
      },
    ],
  },
  {
    slug: 'gandhidham',
    name: 'Gandhidham',
    intro:
      'Gandhidham is the commercial heart of Kutch district and home to Kandla Port (Deendayal Port) — one of India\'s largest and busiest cargo ports. Gandhidham Railway Junction is a major freight and passenger hub with direct trains to Mumbai, Ahmedabad and Delhi. Velora Cabs provides cab service from Gandhidham connecting to Bhuj, Bhavnagar, Ahmedabad and across the Kutch–Saurashtra corridor for port professionals and transit travellers.',
    pickupAreas: [
      'Gandhidham Railway Junction',
      'Kandla Port (Deendayal Port) gate',
      'Gandhidham Sector-1 to Sector-12',
      'GIDC Gandhidham',
    ],
    popularDestinations: [
      { label: 'Gandhidham to Bhuj Taxi', routeSlug: 'gandhidham-to-bhuj' },
    ],
    landmarks: {
      railwayStations: ['Gandhidham Railway Junction'],
      ports: ['Kandla Port (Deendayal Port Authority)', 'Kandla SEZ'],
      industrial: ['GIDC Gandhidham', 'Kandla Special Economic Zone'],
    },
    faqs: [
      {
        question: 'Is a cab from Gandhidham to Bhuj available?',
        answer:
          'Yes. The 60 km Gandhidham to Bhuj cab is a regular route for Kutch professionals and tourists.',
      },
      {
        question: 'Can I get a cab from Kandla Port to Bhuj?',
        answer:
          'Yes. We pick up from Kandla Port gate (Deendayal Port) and drive to Bhuj city or Bhuj Airport.',
      },
      {
        question: 'Is there a cab from Gandhidham to Ahmedabad?',
        answer:
          'Yes. The Gandhidham to Ahmedabad route is approximately 6 hours. WhatsApp us with your travel date for a free quote.',
      },
    ],
  },
  {
    slug: 'amreli',
    name: 'Amreli',
    intro:
      'Amreli is the administrative headquarters of Amreli district in the Saurashtra region of Gujarat. It is well-connected to Bhavnagar and Rajkot by state highways and serves as a market and administrative centre for the surrounding agricultural belt. Velora Cabs covers the Amreli–Bhavnagar outstation corridor for government professionals, agricultural traders, medical patients and family travellers.',
    pickupAreas: [
      'Amreli town centre',
      'Amreli District Court area',
      'Amreli Bus Stand',
      'Amreli GIDC',
    ],
    popularDestinations: [
      { label: 'Amreli to Bhavnagar Taxi', routeSlug: 'bhavnagar-to-amreli' },
    ],
    landmarks: {
      railwayStations: ['Amreli Railway Station (limited services)'],
      other: ['Amreli District Collector Office', 'APMC Yard Amreli'],
    },
    faqs: [
      {
        question: 'Is there a cab from Amreli to Bhavnagar?',
        answer:
          'Yes. Velora Cabs connects Amreli to Bhavnagar — approximately 2 to 2.5 hours via the Saurashtra state highway.',
      },
      {
        question: 'Can I get a same-day return cab from Amreli to Bhavnagar?',
        answer:
          'Yes. Many passengers complete Bhavnagar hospital or business visits and return to Amreli the same day. Book a round trip or set a fixed return time.',
      },
      {
        question: 'Is a cab from Amreli to Ahmedabad available?',
        answer:
          'Yes — Amreli to Ahmedabad via Bhavnagar is available. Share your route details on WhatsApp for a free quote.',
      },
    ],
  },
  {
    slug: 'palitana',
    name: 'Palitana',
    intro:
      'Palitana is one of the holiest pilgrimage centres in Jainism, built around the sacred Shatrunjaya hill which is covered with over 900 intricately carved temples. Situated in Bhavnagar district, Palitana town serves as the base for pilgrims climbing the 3,500+ steps to the tirth complex. Velora Cabs brings pilgrims from Bhavnagar, Ahmedabad, Surat and across Gujarat directly to Palitana town base — with respectful, quiet service befitting the spiritual setting.',
    pickupAreas: [
      'Palitana tirth entrance (base)',
      'Palitana town centre',
      'Palitana bus stand area',
    ],
    popularDestinations: [
      { label: 'Palitana to Bhavnagar Taxi', routeSlug: 'bhavnagar-to-palitana' },
      { label: 'Palitana to Ahmedabad Taxi', routeSlug: 'ahmedabad-to-palitana' },
    ],
    landmarks: {
      other: [
        'Shatrunjaya Tirth (Palitana Jain Temples)',
        'Palitana town market',
        'Adinath temple complex (Shatrunjaya top)',
      ],
    },
    faqs: [
      {
        question: 'Which is the closest city to Palitana for a cab booking?',
        answer:
          'Bhavnagar is the closest major city — just 55 km from Palitana. Velora Cabs operates frequently on the Bhavnagar–Palitana route.',
      },
      {
        question: 'Can a group of 10–15 pilgrims book a Tempo Traveller to Palitana?',
        answer:
          'Yes. Our Tempo Traveller accommodates up to 15 passengers and is ideal for group pilgrimages to Palitana from Bhavnagar or Ahmedabad.',
      },
      {
        question: 'Are early morning cabs to Palitana available?',
        answer:
          'Yes. Many pilgrims depart from Bhavnagar or Ahmedabad very early to reach Palitana base at sunrise. We accept 4 AM and 5 AM bookings.',
      },
    ],
  },
];

// Helper: get city by slug
export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}

// Helper: get all slugs for generateStaticParams
export function getAllCitySlugs(): { city: string }[] {
  return CITIES.map((c) => ({ city: c.slug }));
}
