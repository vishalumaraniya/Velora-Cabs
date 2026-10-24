// Single source of truth for all 14 candidate city pages
// Strictly conforming to Section 8 & 8.1 of the SEO Master Prompt
// Anti-doorway rule: only pages with published: true AND serviceConfirmed: true are indexable and served

export type CityAudience = 'business' | 'industrial' | 'pilgrimage-leisure';

export interface City {
  slug: string;
  name: string;
  audience: CityAudience;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string; // 120+ unique words
  localHooks: string[];
  services: string[];
  nearestCities: string[]; // valid city slugs
  topRoutes: string[]; // valid route slugs
  faqs: { q: string; a: string }[]; // 5 unique entries
  published: boolean;
  serviceConfirmed: boolean;
}

export const CITIES: City[] = [
  // 1. Bhavnagar (HQ / Primary Base)
  {
    slug: 'bhavnagar',
    name: 'Bhavnagar',
    audience: 'business',
    metaTitle: 'Taxi Service in Bhavnagar | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Bhavnagar: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Bhavnagar',
    intro:
      'Bhavnagar is the operational headquarters and founding base of Velora Cabs, situated along the Gulf of Khambhat in southeastern Saurashtra. As a historic port city and commercial anchor for regional trading, diamond polishing, manufacturing, and nearby maritime industries at Alang Ship Breaking Yard, reliable ground transportation is essential for daily life. Velora Cabs provides round-the-clock chauffeured taxi services across Bhavnagar, offering punctual doorstep pickups across Waghawadi Road, Crescent Circle, Kaliyabid, Ghogha Circle, and the Bhavnagar Terminal Railway Station. Whether you need an early-morning transfer to Bhavnagar Airport (BHU), a corporate day-rental for meetings in Chitra GIDC, or an outstation taxi to Ahmedabad, Vadodara, or Mumbai, our fleet of air-conditioned sedans, spacious SUVs, and Tempo Travellers delivers safe, transparent, and comfortable travel on every journey.',
    localHooks: [
      'Bhavnagar Airport (BHU) and Bhavnagar Terminal Railway Station pickups',
      'Alang Ship Breaking Yard and maritime executive transfers',
      'Takhteshwar Temple, Nilambag Palace, and Victoria Park visits',
      'Chitra GIDC and regional business trade transport',
      'Direct gateway for Palitana Shatrunjaya Jain pilgrimage',
    ],
    services: [
      'Local city hourly cab rental',
      'Airport & railway station pickups and drops',
      'Outstation one-way and round-trip taxi service',
      'Corporate staff & executive travel packages',
      'Pilgrimage group travel in Tempo Travellers',
    ],
    nearestCities: ['palitana', 'ahmedabad', 'vadodara'],
    topRoutes: [
      'bhavnagar-to-ahmedabad-taxi',
      'bhavnagar-to-vadodara-taxi',
      'bhavnagar-to-surat-taxi',
      'bhavnagar-to-mumbai-taxi',
      'bhavnagar-to-palitana-taxi',
      'bhavnagar-to-dahej-taxi',
    ],
    faqs: [
      {
        q: 'How do I book a taxi in Bhavnagar with Velora Cabs?',
        a: 'You can request a taxi quote anytime by calling +91 87803 11279 or tapping our WhatsApp booking button. Share your pickup address, destination, date, and preferred vehicle, and our team will confirm availability and fixed pricing.',
      },
      {
        q: 'Do you provide airport taxi service to Bhavnagar Airport (BHU)?',
        a: 'Yes, we provide timely airport pickups and drop-offs to Bhavnagar Domestic Airport (BHU). Our drivers monitor flight schedules to ensure you arrive with plenty of time for check-in and security.',
      },
      {
        q: 'Can I book a one-way cab from Bhavnagar to Ahmedabad or Vadodara?',
        a: 'Yes, Velora Cabs offers dedicated one-way outstation taxi routes from Bhavnagar to Ahmedabad, Vadodara, Surat, and Mumbai, meaning you only pay for the one-way travel without return fare charges.',
      },
      {
        q: 'Are your cabs available for early-morning Palitana yatra trips?',
        a: 'Absolutely. We routinely operate early morning 4:00 AM to 5:00 AM departures from Bhavnagar to Palitana so pilgrims can begin climbing Shatrunjaya Hill in cool morning conditions.',
      },
      {
        q: 'What types of cars can I book in Bhavnagar?',
        a: 'Our fleet includes comfortable sedans like the Maruti Swift Dzire (up to 4 passengers), spacious SUVs like the Maruti Ertiga (up to 6 passengers), and 12–17 seater Tempo Travellers for larger group tours.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 2. Ahmedabad (Commercial Hub)
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    audience: 'business',
    metaTitle: 'Taxi Service in Ahmedabad | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Ahmedabad: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Ahmedabad',
    intro:
      'Ahmedabad is the economic and commercial powerhouse of Gujarat, recognized as a prestigious UNESCO World Heritage City and a thriving metropolis for corporate headquarters, higher education, pharmaceuticals, trade, and technology. As one of the most frequent travel corridors connecting Saurashtra with central Gujarat, Velora Cabs operates regular intercity transfers connecting Ahmedabad with Bhavnagar, Vadodara, Surat, Dholera SIR, and Mumbai. We provide door-to-door pickups across SG Highway, Prahlad Nagar, Vastrapur, Satellite, Navrangpura, Bopal, Maninagar, Chandkheda, and GIFT City Gandhinagar. Business executives, domestic travelers, and families choose Velora Cabs for reliable, punctual pickups from Sardar Vallabhbhai Patel International Airport (AMD) and Kalupur Railway Station, enjoying well-maintained vehicles, courteous chauffeurs, and transparent flat-rate billing without unexpected roadside surcharges or hidden return mileage burdens.',
    localHooks: [
      'Sardar Vallabhbhai Patel International Airport (AMD) Terminal 1 & 2 transfers',
      'Ahmedabad Junction (Kalupur) and Sabarmati Railway Station pickups',
      'SG Highway, Prahlad Nagar, and Corporate Road business centers',
      'GIFT City and Gandhinagar executive transfers',
      'Direct highway corridor to Bhavnagar via Dholka and Fedra',
    ],
    services: [
      'Airport transfer with flight tracking',
      'Outstation one-way cab to Bhavnagar & Saurashtra',
      'Corporate hourly rentals for business meetings',
      'Round-trip outstation cabs across Gujarat',
      'Railway station transfers',
    ],
    nearestCities: ['vadodara', 'dholera', 'bhavnagar'],
    topRoutes: [
      'ahmedabad-to-bhavnagar-taxi',
      'bhavnagar-to-ahmedabad-taxi',
      'bhavnagar-to-ahmedabad-airport-taxi',
    ],
    faqs: [
      {
        q: 'How long does a taxi take from Ahmedabad to Bhavnagar?',
        a: 'The road journey between Ahmedabad and Bhavnagar spans approx. 170–200 km depending on route conditions, typically taking about 3.5 to 4.5 hours depending on city exit traffic around SG Highway or Sarkhej.',
      },
      {
        q: 'Can Velora Cabs pick me up directly from Ahmedabad Airport (AMD)?',
        a: 'Yes, we provide dedicated pickups from both Domestic Terminal 1 and International Terminal 2 at Ahmedabad Airport (AMD), with direct door-to-door transit to Bhavnagar or other Gujarat cities.',
      },
      {
        q: 'Do you offer fixed outstation fares from Ahmedabad?',
        a: 'Yes. When you request a quote via WhatsApp or phone, our team provides an all-inclusive transparent fare covering your vehicle, driver allowance, and route journey without hidden fees.',
      },
      {
        q: 'Are cabs available for late-night airport arrivals in Ahmedabad?',
        a: 'Yes, we coordinate outstation airport pickups 24x7. Please share your flight number during inquiry so our dispatch team can align your chauffeur with any flight delays.',
      },
      {
        q: 'Can I book an Ertiga SUV from Ahmedabad for a family trip?',
        a: 'Yes, the Maruti Suzuki Ertiga is available for groups up to 6 passengers with luggage, offering comfortable air conditioning and ample boot space for highway travel.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 3. Vadodara (Cultural & Business City)
  {
    slug: 'vadodara',
    name: 'Vadodara',
    audience: 'business',
    metaTitle: 'Taxi Service in Vadodara | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Vadodara: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Vadodara',
    intro:
      'Vadodara, celebrated as the cultural capital of Gujarat, is a bustling center for petrochemicals, engineering, biotechnology, cultural tourism, and premier educational institutions. Situated centrally along the Mumbai-Ahmedabad transit artery, Vadodara functions as a pivotal junction for business and leisure travel across western India. Velora Cabs provides outstation taxi services connecting Vadodara with Bhavnagar, Bharuch, Dahej, Surat, and the world-renowned Statue of Unity in Kevadia. Our chauffeurs offer on-time pickups from Vadodara Airport (BDQ), Vadodara Central Railway Station, Alkapuri, Gotri, Sayajigunj, and Makarpura GIDC. Whether traveling across the Gulf of Khambhat highway corridor to Bhavnagar for ship-breaking logistics or visiting heritage monuments like Laxmi Vilas Palace, travelers appreciate our clean cars, polite drivers, and fixed WhatsApp quotes with zero roadside hassles.',
    localHooks: [
      'Vadodara Airport (BDQ) and Vadodara Junction Station transfers',
      'Makarpura GIDC, Nandesari, and petrochemical corridor transit',
      'Statue of Unity (Kevadia) day-trip excursion packages',
      'Alkapuri, Gotri, and Vasna residential and corporate pickups',
      'Direct outstation transit to Bhavnagar and Saurashtra',
    ],
    services: [
      'Outstation taxi to Bhavnagar & Saurashtra',
      'Airport transfer to BDQ & AMD',
      'Statue of Unity sightseeing taxi packages',
      'Corporate travel for engineering and chemical plants',
      'One-way intercity drops',
    ],
    nearestCities: ['ahmedabad', 'bharuch', 'bhavnagar'],
    topRoutes: [
      'bhavnagar-to-vadodara-taxi',
      'bhavnagar-to-ahmedabad-taxi',
      'bhavnagar-to-bharuch-taxi',
    ],
    faqs: [
      {
        q: 'How far is Vadodara from Bhavnagar by cab?',
        a: 'The road distance between Vadodara and Bhavnagar is roughly 200 km around the Gulf of Khambhat via Tarapur or Borsad, taking approximately 4 to 4.5 hours of smooth highway driving.',
      },
      {
        q: 'Can I book a day trip to the Statue of Unity from Vadodara?',
        a: 'Yes, we offer comfortable round-trip cab packages from Vadodara to the Statue of Unity at Kevadia (approx. 90 km), allowing you to explore the viewing gallery and light show at your own pace.',
      },
      {
        q: 'Do you provide pickup from Vadodara Railway Station?',
        a: 'Yes, our drivers provide on-time pickups directly outside Vadodara Junction Railway Station, helping you transition seamlessly into an AC cab for your onward journey.',
      },
      {
        q: 'What is the fare structure for a one-way cab from Vadodara to Bhavnagar?',
        a: 'We provide fixed one-way quotes via WhatsApp based on your preferred vehicle class (Dzire or Ertiga). Fares are transparent and agreed upon prior to journey commencement.',
      },
      {
        q: 'Are your drivers familiar with Vadodara industrial areas?',
        a: 'Yes, our drivers regularly navigate Makarpura GIDC, Manjusar, Nandesari, and Ranoli industrial zones for corporate visits and client transfers.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 4. Surat (Commercial & Diamond/Textile City)
  {
    slug: 'surat',
    name: 'Surat',
    audience: 'business',
    metaTitle: 'Taxi Service in Surat | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Surat: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Surat',
    intro:
      'Surat is globally renowned as the premier capital of diamond cutting and polishing, as well as a colossal textile manufacturing center and rapid-growth economic city in South Gujarat. Because of extensive commercial, trade, and familial ties between Surat and Saurashtra—especially Bhavnagar and Amreli—there is immense daily travel demand between these two bustling economic regions. Velora Cabs bridges this corridor with dependable outstation cab services, providing door-to-door pickups from Surat International Airport (STV), Surat Railway Station, Ring Road textile markets, Varachha diamond quarter, Piplod, and the Hazira industrial zone. Rather than coordinating multiple train segments or rigid bus timings, our private chauffeured AC cabs let entrepreneurs, families, and cargo representatives travel comfortably on their own schedule with verified drivers and fixed pricing.',
    localHooks: [
      'Surat International Airport (STV) and Surat Railway Station pickups',
      'Varachha and Katargam diamond trading hubs',
      'Ring Road and Sahara Darwaja textile market complexes',
      'Hazira port, LNG terminals, and heavy industrial facilities',
      'High-frequency outstation corridor to Bhavnagar and Saurashtra',
    ],
    services: [
      'Surat to Bhavnagar outstation cabs',
      'Airport transfers to Surat (STV) and Mumbai (BOM)',
      'Hazira industrial corridor corporate transfers',
      'Diamond market and textile market day rentals',
      'One-way and round-trip long distance rides',
    ],
    nearestCities: ['bharuch', 'mumbai', 'vadodara'],
    topRoutes: [
      'bhavnagar-to-surat-taxi',
      'bhavnagar-to-mumbai-taxi',
      'bhavnagar-to-bharuch-taxi',
    ],
    faqs: [
      {
        q: 'How long does a cab take between Surat and Bhavnagar?',
        a: 'The driving route between Surat and Bhavnagar travels via Bharuch, Tarapur, and Dholera, spanning approx. 320–350 km and taking roughly 6 to 7 hours of comfortable highway driving.',
      },
      {
        q: 'Can you pick up from Varachha or Katargam in Surat?',
        a: 'Yes, we provide doorstep pickups from all Surat residential and commercial sectors, including Varachha, Katargam, Adajan, Vesu, and Ring Road.',
      },
      {
        q: 'Is a one-way taxi available from Surat to Bhavnagar?',
        a: 'Yes, Velora Cabs offers dedicated one-way taxi service from Surat to Bhavnagar, saving you the expense of paying for round-trip dead mileage.',
      },
      {
        q: 'Do you arrange corporate cab bookings for Hazira industrial visits?',
        a: 'Yes, we cater to corporate visitors, engineers, and vendors traveling to Hazira manufacturing facilities, petrochemical plants, and port terminals.',
      },
      {
        q: 'Can I book a Tempo Traveller from Surat for a family pilgrimage?',
        a: 'Yes, we provide 12-to-17 seater Tempo Travellers for family tours traveling from Surat to Palitana, Gir, or Somnath. Contact us via WhatsApp for group itineraries.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 5. Bharuch (Industrial Hub)
  {
    slug: 'bharuch',
    name: 'Bharuch',
    audience: 'industrial',
    metaTitle: 'Taxi Service in Bharuch | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Bharuch: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Bharuch',
    intro:
      'Bharuch, situated at the mouth of the sacred Narmada River, is one of western India’s most critical chemical, agro-tech, and manufacturing industrial corridors. Anchoring the Golden Corridor alongside Ankleshwar, Jhagadia, and Panoli GIDC estates, Bharuch hosts hundreds of multinational pharmaceutical plants, chemical refineries, and agro-chemical complexes. Velora Cabs supports plant operators, visiting auditors, technical consultants, and corporate staff with dependable taxi transfers throughout Bharuch and onward to Dahej Port, Vadodara, Surat, and Bhavnagar. We recognize that industrial travel strictly prioritizes punctuality, passenger safety, and transparent billing. Our experienced drivers provide swift station pickups from Bharuch Junction, navigate complex chemical zone checkpoints smoothly, and offer round-the-clock shift-support transit with well-maintained air-conditioned vehicles, transparent pricing, and formal corporate GST invoicing for hassle-free reimbursement.',
    localHooks: [
      'Bharuch Railway Station and Ankleshwar Junction connections',
      'Ankleshwar GIDC, Panoli, and Jhagadia industrial estates',
      'Gateway to Dahej PCPIR chemical and port region',
      'Golden Bridge and Narmada expressway crossings',
      'Corporate vendor and technical consultant plant transfers',
    ],
    services: [
      'Industrial plant and GIDC executive cab services',
      'Dahej port & PCPIR connectivity transfers',
      'Bharuch Railway Station pickups and drops',
      'Outstation taxi to Bhavnagar, Vadodara, and Surat',
      'Corporate shift and vendor travel arrangements',
    ],
    nearestCities: ['dahej', 'vadodara', 'surat'],
    topRoutes: [
      'bhavnagar-to-bharuch-taxi',
      'bhavnagar-to-dahej-taxi',
      'bhavnagar-to-surat-taxi',
    ],
    faqs: [
      {
        q: 'Do you provide taxi service to Ankleshwar and Jhagadia GIDC from Bharuch?',
        a: 'Yes, Velora Cabs regularly transports executives, technical specialists, and visitors between Bharuch Railway Station and factories across Ankleshwar, Panoli, and Jhagadia GIDC complexes.',
      },
      {
        q: 'Can I book a cab from Bharuch to Dahej PCPIR?',
        a: 'Yes, we provide daily transit connecting Bharuch and Dahej industrial corridor (approx. 45–55 km), supporting both one-way plant visits and full-day standby duty.',
      },
      {
        q: 'How can I travel from Bharuch to Bhavnagar by taxi?',
        a: 'You can book a direct outstation cab from Bharuch to Bhavnagar via NH 48 and the Tarapur highway route, covering roughly 220 km in about 4.5 to 5 hours.',
      },
      {
        q: 'Are GST invoices provided for corporate cab bookings in Bharuch?',
        a: 'Yes, we provide formal commercial invoicing and trip receipts suitable for corporate travel reimbursements and company vendor billing.',
      },
      {
        q: 'Can we schedule early morning plant audit pickups in Bharuch?',
        a: 'Certainly. Our chauffeurs can be scheduled for early morning pickups to guarantee on-time arrival before morning factory shifts and client audits begin.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 6. Dahej (Industrial & Port City)
  {
    slug: 'dahej',
    name: 'Dahej',
    audience: 'industrial',
    metaTitle: 'Taxi Service in Dahej | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Dahej: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Dahej',
    intro:
      'Dahej is a world-scale maritime port and the vibrant center of Gujarat’s Petroleum, Chemicals and Petrochemicals Investment Region (PCPIR). Located on the Gulf of Khambhat coast in Bharuch district, Dahej is home to major LNG terminals, bulk liquid cargo berths, petrochemical mega-plants, and heavy industrial infrastructure. Corporate executives, international engineers, marine surveyors, plant auditors, and shipping agents frequently travel between Dahej, Bharuch, Vadodara, Surat, and Bhavnagar. Velora Cabs delivers dedicated industrial taxi solutions tailored to Dahej’s stringent operational pace. Our drivers are well-versed in port access routes, plant safety rules, and highway conditions. With reliable door-to-plant transfers, 24x7 vehicle availability, and clean sedans and SUVs, we ensure your business trips remain on schedule with transparent quotes and professional commercial receipts for effortless travel claims.',
    localHooks: [
      'Dahej Port, LNG terminal, and SEZ industrial facilities',
      'Dahej PCPIR chemical and petrochemical manufacturing corridor',
      'Transfers connecting Dahej with Bharuch Railway Station (45 km)',
      'Executive transit to Vadodara Airport (BDQ) and Ahmedabad Airport (AMD)',
      'Maritime crew change and port surveyor transport',
    ],
    services: [
      'Port and PCPIR plant pickup and drop-off',
      'Dahej to Bharuch station daily commuter cab',
      'Direct outstation cab to Bhavnagar and Saurashtra',
      'Airport transfers to Vadodara (BDQ) and Ahmedabad (AMD)',
      'Full-day corporate taxi standby for plant audits',
    ],
    nearestCities: ['bharuch', 'vadodara', 'bhavnagar'],
    topRoutes: [
      'bhavnagar-to-dahej-taxi',
      'bhavnagar-to-bharuch-taxi',
      'bhavnagar-to-vadodara-taxi',
    ],
    faqs: [
      {
        q: 'How far is Dahej from Bharuch Railway Station by taxi?',
        a: 'Dahej is approximately 45 to 55 km from Bharuch Railway Station via the Dahej–Bharuch State Highway, taking about 1 hour to 1 hour 20 minutes depending on truck movements.',
      },
      {
        q: 'Can I book a cab from Dahej to Bhavnagar?',
        a: 'Yes, Velora Cabs provides outstation taxi transfers connecting Dahej with Bhavnagar via Bharuch and the highway corridor, offering door-to-door convenience for maritime and industrial personnel.',
      },
      {
        q: 'Do you offer full-day car hire for plant visits in Dahej SEZ?',
        a: 'Yes, we provide dedicated day-package rentals where our vehicle and chauffeur remain at your disposal throughout client meetings and facility tours across Dahej SEZ.',
      },
      {
        q: 'Can your drivers enter Dahej port and industrial plant gates?',
        a: 'Our drivers possess valid driving licenses, commercial vehicle permits, and personal identity documents required for entry verification at industrial security gates.',
      },
      {
        q: 'What is the best way to travel from Dahej to Vadodara Airport?',
        a: 'Booking a direct AC outstation cab with Velora Cabs is the most reliable method, taking approximately 2.5 to 3 hours directly to the Vadodara Airport departures gate.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 7. Vapi (Industrial City - Unconfirmed candidate)
  // 7. Vapi (Industrial City - Confirmed)
  {
    slug: 'vapi',
    name: 'Vapi',
    audience: 'industrial',
    metaTitle: 'Taxi Service in Vapi | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Vapi: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Vapi',
    intro:
      'Vapi is one of South Gujarat’s most prominent industrial hubs, anchoring thousands of small, medium, and multinational chemical, paper, packaging, and plastics manufacturing enterprises in the expansive Vapi GIDC estate. Bordering the coastal Union Territory of Daman and situated adjacent to Maharashtra along National Highway 48, Vapi experiences high passenger movement between industrial factories, railway stations, and metropolitan hubs. Velora Cabs provides comprehensive chauffeured car solutions for industrial professionals, suppliers, and commuting executives needing reliable transit between Vapi, Daman, Surat, and Mumbai. Our dedicated services focus on punctuality, plant safety compliance, and clear billing with well-maintained air-conditioned vehicles, courteous chauffeurs, and transparent quotes. Whether you need a morning station pickup at Vapi Junction, executive transport to manufacturing units, or an airport drop to Mumbai BOM, our fleet of Dzire sedans, Ertiga SUVs, and Tempo Travellers delivers safe, dependable travel on every journey.',
    localHooks: [
      'Vapi GIDC industrial manufacturing belt',
      'Vapi Railway Station transit connecting South Gujarat and Mumbai',
      'Proximity and transit gateway to Daman beaches and resorts',
      'NH 48 manufacturing corridor connectivity',
      'Cross-border commercial travel to Silvassa and Maharashtra',
    ],
    services: [
      'GIDC industrial factory visits',
      'Vapi to Daman resort transfers',
      'Outstation cab to Surat and Mumbai',
      'Railway station transfers',
      'Corporate hourly rentals',
    ],
    nearestCities: ['daman', 'surat', 'mumbai'],
    topRoutes: ['bhavnagar-to-surat-taxi', 'bhavnagar-to-mumbai-taxi'],
    faqs: [
      {
        q: 'How far is Daman from Vapi Railway Station?',
        a: 'Daman is approximately 12 to 15 km from Vapi Railway Station, typically taking about 25 to 35 minutes by cab depending on border traffic.',
      },
      {
        q: 'Can I book a taxi from Vapi to Mumbai Airport?',
        a: 'Yes, outstation cabs from Vapi to Chhatrapati Shivaji Maharaj International Airport (BOM) in Mumbai cover roughly 165 km in about 3.5 to 4.5 hours via NH 48.',
      },
      {
        q: 'Do you provide local GIDC plant transfers in Vapi?',
        a: 'Our fleet options include full-day hourly packages for visiting engineers, suppliers, and auditors traveling between chemical and packaging facilities.',
      },
      {
        q: 'What vehicles are suitable for Vapi to Surat business travel?',
        a: 'The Maruti Swift Dzire is excellent for solo business travelers, while the Maruti Ertiga accommodates multi-member executive teams with technical equipment.',
      },
      {
        q: 'How can I check cab availability in Vapi?',
        a: 'Please message Velora Cabs on WhatsApp at +91 87803 11279 for prompt route confirmation and vehicle scheduling for the Vapi region.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 8. Daman (Pilgrimage & Leisure - Confirmed)
  {
    slug: 'daman',
    name: 'Daman',
    audience: 'pilgrimage-leisure',
    metaTitle: 'Taxi Service in Daman | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Daman: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Daman',
    intro:
      'Daman, a tranquil coastal destination on the Arabian Sea, is celebrated for its Portuguese colonial history, scenic beaches, ancient sea forts, and relaxed weekend ambiance. Drawing vacationing tourists, families, and corporate retreats from South Gujarat and Mumbai, popular coastal destinations include Jampore Beach, Devka Beach, Moti Daman Fort, and Nani Daman Church. Velora Cabs provides leisure-friendly travel options tailored for vacationing families, groups, and event attendees seeking dependable door-to-beach transfers from Vapi Railway Station, Surat, and Mumbai. Our private cab travel packages emphasize comfortable seating, generous luggage space, and experienced drivers who know the local coastal terrain and sightseeing spots. Skip the hassle of unmetered local auto-rickshaws with our round-trip packages, punctual hotel pickups, and clean air-conditioned cabs that keep your seaside holiday comfortable and stress-free from arrival to departure.',
    localHooks: [
      'Jampore Beach and Devka Beach coastal pickups',
      'Moti Daman Fort and historic Portuguese colonial quarter',
      'Vapi Railway Station transit for arriving weekend tourists',
      'Corporate offsite and resort event transportation',
      'Leisure sightseeing across Nani Daman and Moti Daman',
    ],
    services: [
      'Beach and resort vacation cab packages',
      'Vapi Station to Daman hotel transfers',
      'Sightseeing packages across Moti & Nani Daman',
      'Tempo Traveller bookings for family groups',
      'Outstation returns to Surat and Mumbai',
    ],
    nearestCities: ['vapi', 'surat', 'mumbai'],
    topRoutes: ['bhavnagar-to-surat-taxi', 'bhavnagar-to-mumbai-taxi'],
    faqs: [
      {
        q: 'What is the easiest way to reach Daman from Vapi Railway Station?',
        a: 'Booking an AC taxi is the fastest and most convenient method, taking roughly 25 to 30 minutes directly to beach resorts at Devka or Jampore.',
      },
      {
        q: 'Can we book a cab for a full day of sightseeing in Daman?',
        a: 'Yes, day-tour rental packages allow you to visit Moti Daman Fort, church complexes, lighthouses, and beaches without worrying about hailing local transport.',
      },
      {
        q: 'Are large vehicles available for group vacations in Daman?',
        a: 'Yes, 6-seater Ertiga SUVs and 12–17 seater Tempo Travellers are available for family holidaymakers and corporate retreat groups.',
      },
      {
        q: 'How far is Daman from Surat by road?',
        a: 'Daman is approximately 120 km south of Surat via NH 48, taking about 2.5 to 3 hours of highway driving.',
      },
      {
        q: 'How do I check current service status for Daman bookings?',
        a: 'Contact Velora Cabs on WhatsApp at +91 87803 11279 to inquire about confirmed vehicle options and instant quotes for Daman.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 9. Dholera (Industrial SIR City)
  {
    slug: 'dholera',
    name: 'Dholera',
    audience: 'industrial',
    metaTitle: 'Taxi Service in Dholera | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Dholera: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Dholera',
    intro:
      'Dholera Special Investment Region (SIR) is India’s flagship greenfield smart city project, strategically located along the Bhavnagar-Ahmedabad expressway corridor. Slated to become a global hub for semiconductor fabrication plants, renewable energy parks, aviation, and advanced electronics manufacturing, Dholera draws regular visits from international delegations, infrastructure contractors, real estate investors, and government officials. Velora Cabs provides direct, executive-grade cab transit connecting Dholera SIR with Bhavnagar (approx. 65 km) and Ahmedabad (approx. 100 km). Our chauffeurs know the access routes to the Activation Zone, ABCD building, and surrounding expressways, providing punctual day-trips, multi-point site inspections, and airport drops with transparent WhatsApp quotes and formal commercial invoicing for business travelers who require complete punctuality, comfort, and professional vehicle presentation. Whether you are conducting preliminary site surveys or attending investor conferences, our fleet delivers dependable ground transit on every trip.',
    localHooks: [
      'Dholera SIR Activation Zone and ABCD building complex',
      'Proposed semiconductor fab sites and renewable energy zones',
      'Ahmedabad–Dholera Expressway and Bhavnagar highway corridor',
      'Investor delegation and infrastructure contractor site visits',
      'Proximity transit hub between Ahmedabad and Bhavnagar',
    ],
    services: [
      'Site inspection and investor delegation taxi packages',
      'Bhavnagar to Dholera SIR day-trip cab service',
      'Ahmedabad to Dholera corporate transfers',
      'Multi-stop industrial zone site surveys',
      'Full-day standby vehicle rental with AC',
    ],
    nearestCities: ['bhavnagar', 'ahmedabad', 'vadodara'],
    topRoutes: [
      'bhavnagar-to-dholera-taxi',
      'bhavnagar-to-ahmedabad-taxi',
      'ahmedabad-to-bhavnagar-taxi',
    ],
    faqs: [
      {
        q: 'How far is Dholera SIR from Bhavnagar by cab?',
        a: 'Dholera SIR is approximately 60 to 70 km northeast of Bhavnagar along the state highway, taking around 1 hour 15 minutes of straightforward driving.',
      },
      {
        q: 'How long does a taxi take from Ahmedabad to Dholera?',
        a: 'From central Ahmedabad or Ahmedabad Airport (AMD), traveling to Dholera takes approximately 2 to 2.5 hours covering about 100 to 110 km.',
      },
      {
        q: 'Can we book a full-day standby cab for visiting multiple project sites in Dholera?',
        a: 'Yes, Velora Cabs offers full-day packages allowing corporate executives and investors to visit multiple plots, the ABCD building, and industrial zones without transport delays.',
      },
      {
        q: 'Do your drivers know how to locate specific zones inside Dholera SIR?',
        a: 'Yes, our chauffeurs are experienced with the roads and access routes across the Dholera Activation Zone and surrounding regional highways.',
      },
      {
        q: 'Are clean AC cars available for international business delegates visiting Dholera?',
        a: 'Yes, our fleet of Dzire sedans and Ertiga SUVs is strictly maintained, fully air-conditioned, and driven by courteous, professional drivers.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 10. Mumbai (Metropolitan Business City)
  {
    slug: 'mumbai',
    name: 'Mumbai',
    audience: 'business',
    metaTitle: 'Taxi Service in Mumbai | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Mumbai: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Mumbai',
    intro:
      'Mumbai, India’s financial and entertainment capital, maintains profound commercial, cultural, and community linkages with Gujarat, particularly the Saurashtra region. Thousands of business owners, diamond merchants, logistics professionals, and families regularly travel between Mumbai and Bhavnagar, Surat, and Vadodara. Velora Cabs operates long-distance outstation taxi transfers connecting Mumbai with Bhavnagar and key Gujarat cities. We cater to travelers seeking a private, comfortable alternative to crowded train bookings or complex flight connections. Our chauffeurs offer door-to-door pickups across Mumbai—including Chhatrapati Shivaji Maharaj International Airport (BOM), Borivali, Dadar, Bandra-Kurla Complex (BKC), Andheri, and Navi Mumbai—providing experienced highway drivers for the long-distance journey along the Western Express corridor with transparent billing, polite conduct, and scheduled highway meal rest intervals. We drop you directly at your private residence, corporate office, or airport terminal anywhere in Mumbai or Navi Mumbai without intermediate transfer hassles.',
    localHooks: [
      'Chhatrapati Shivaji Maharaj International Airport (BOM) pickups and drops',
      'Borivali, Andheri, and Dadar highway junction pickups',
      'Bandra-Kurla Complex (BKC) corporate and diamond bourse transit',
      'Long-distance outstation corridor to Bhavnagar, Surat, and Vadodara',
      'Navi Mumbai, Thane, and Western Suburbs door-to-door service',
    ],
    services: [
      'Mumbai to Bhavnagar direct outstation cab',
      'International airport transfers to BOM',
      'Gujarat to Mumbai corporate round-trip rides',
      'Family relocation and personal travel',
      'Tempo Traveller rentals for group pilgrimages',
    ],
    nearestCities: ['surat', 'vapi', 'bharuch'],
    topRoutes: [
      'bhavnagar-to-mumbai-taxi',
      'bhavnagar-to-surat-taxi',
      'bhavnagar-to-vadodara-taxi',
    ],
    faqs: [
      {
        q: 'How long does a cab take from Mumbai to Bhavnagar?',
        a: 'The highway distance from Mumbai to Bhavnagar via NH 48 and the Golden Corridor spans approx. 600–650 km, taking about 11 to 13 hours including scheduled meal and rest stops.',
      },
      {
        q: 'Can Velora Cabs pick up directly from Mumbai Airport (BOM)?',
        a: 'Yes, we provide direct terminal pickups at Mumbai Airport (T1 or T2) for passengers traveling into Gujarat, coordinating with your flight arrival time.',
      },
      {
        q: 'Is a one-way cab booking available from Mumbai to Bhavnagar?',
        a: 'Yes, we offer fixed one-way outstation cab bookings, allowing you to pay solely for your trip to Bhavnagar without returning vehicle charges.',
      },
      {
        q: 'What vehicle is recommended for the long journey between Mumbai and Bhavnagar?',
        a: 'The Maruti Suzuki Ertiga is highly recommended for long outstation trips due to its elevated seating, superior suspension, and substantial luggage space for multiple passengers.',
      },
      {
        q: 'Are toll charges included in the Mumbai outstation quote?',
        a: 'Our WhatsApp quote will explicitly detail the fare structure, specifying how toll plazas and state entry permits are handled so there are zero unexpected surprises.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 11. Bhuj (Kutch Pilgrimage & Leisure - Confirmed)
  {
    slug: 'bhuj',
    name: 'Bhuj',
    audience: 'pilgrimage-leisure',
    metaTitle: 'Taxi Service in Bhuj | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Bhuj: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Bhuj',
    intro:
      'Bhuj, the historic cultural heart of the Kutch district, is the primary gateway to the Great Rann of Kutch, White Desert festivals, artisan handicraft settlements, and sacred pilgrim sites like Mata no Madh and Narayan Sarovar. With architectural landmarks such as Aina Mahal, Prag Mahal, and the Kutch Museum, Bhuj attracts vacationers, cultural enthusiasts, and diaspora families from across Gujarat and abroad. Velora Cabs provides specialized outstation tour services connecting Bhuj and Kutch with Bhavnagar, Rajkot, and Ahmedabad. Our dedicated offerings emphasize spacious vehicles with superior air-conditioning, experienced chauffeurs who understand desert highway routes, and flexible itineraries for multi-day family vacations and community excursions. Whether arriving at Bhuj Airport (BHJ) or exploring the tent city at Dhordo during Rann Utsav, our fleet ensures safe, punctual, and comfortable travel across Kutch.',
    localHooks: [
      'Bhuj Airport (BHJ) and Bhuj Railway Station pickups',
      'Gateway to the White Desert and Rann Utsav festival at Dhordo',
      'Heritage sites including Aina Mahal, Prag Mahal, and Swaminarayan Temple',
      'Pilgrimage excursions to Mata no Madh and Koteshwar',
      'Kutch handicraft village tours in Bhujodi and Ajrakhpur',
    ],
    services: [
      'Rann of Kutch tour taxi packages',
      'Bhuj Airport & railway station transfers',
      'Kutch heritage and handicraft village sightseeing',
      'Outstation cabs to Bhavnagar and Ahmedabad',
      'Tempo Traveller rentals for group holidays',
    ],
    nearestCities: ['gandhidham', 'ahmedabad', 'bhavnagar'],
    topRoutes: ['bhavnagar-to-bhuj-taxi', 'bhavnagar-to-ahmedabad-taxi'],
    faqs: [
      {
        q: 'How far is the White Desert (Dhordo) from Bhuj?',
        a: 'The White Desert tent city at Dhordo is approximately 80 to 85 km north of Bhuj, taking roughly 1.5 to 2 hours by car.',
      },
      {
        q: 'Can I book a cab from Bhuj to Bhavnagar?',
        a: 'Yes, an outstation trip between Bhuj and Bhavnagar spans approx. 380–420 km, taking about 7.5 to 8.5 hours via Maliya and Morbi highway routes.',
      },
      {
        q: 'Do you arrange Kutch pilgrimage tours to Mata no Madh?',
        a: 'Yes, day-excursion packages to Mata no Madh, Narayan Sarovar, and Koteshwar are available for pilgrims visiting Kutch.',
      },
      {
        q: 'What cars are available for Kutch family tours?',
        a: 'We offer comfortable Maruti Ertiga SUVs and spacious Tempo Travellers ideal for multi-day sightseeing across Kutch.',
      },
      {
        q: 'How can I check current booking status for Bhuj?',
        a: 'Reach out to Velora Cabs at +91 87803 11279 on WhatsApp to book your vehicle and receive instant fixed quotes.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 12. Gandhidham (Industrial & Port City - Confirmed)
  {
    slug: 'gandhidham',
    name: 'Gandhidham',
    audience: 'industrial',
    metaTitle: 'Taxi Service in Gandhidham | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Gandhidham: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Gandhidham',
    intro:
      'Gandhidham is the primary commercial and logistics nerve center of Kutch, constructed to support the major maritime gateway of Deendayal Port (Kandla) and nearby Tuna port terminals. The city hosts extensive shipping agencies, timber processing yards, edible oil refineries, bulk liquid storage facilities, and freight logistics corporations. Velora Cabs provides business-oriented taxi transfers for shipping executives, surveyors, and commercial teams traveling between Gandhidham, Kandla, Mundra Port, and industrial corridors in Saurashtra and Ahmedabad. Our corporate services focus on punctuality, port gate clearance compliance, and formal commercial invoicing with clean, air-conditioned cars driven by professional chauffeurs. We understand the high-stakes pace of shipping schedules and ensure smooth connectivity between freight terminals and regional headquarters across Gujarat with reliable doorstep pickups and round-the-clock availability.',
    localHooks: [
      'Deendayal Port (Kandla Port) administrative and terminal transfers',
      'Gandhidham Railway Station connections for arriving business travelers',
      'Timber, edible oil, and bulk freight logistics hub transit',
      'Connection corridor to Mundra Port and SEZ',
      'Intercity highway links to Morbi, Rajkot, and Ahmedabad',
    ],
    services: [
      'Port and maritime executive cab services',
      'Gandhidham to Kandla Port daily business transfers',
      'Outstation taxi to Bhavnagar and Ahmedabad',
      'Railway station pickups at Gandhidham Junction',
      'Full-day corporate taxi standby packages',
    ],
    nearestCities: ['bhuj', 'ahmedabad', 'bhavnagar'],
    topRoutes: ['bhavnagar-to-bhuj-taxi', 'bhavnagar-to-ahmedabad-taxi'],
    faqs: [
      {
        q: 'How far is Kandla Port from Gandhidham by cab?',
        a: 'Kandla Port is roughly 12 to 15 km from central Gandhidham, taking about 20 to 25 minutes by taxi.',
      },
      {
        q: 'Can I hire a taxi from Gandhidham to Mundra Port?',
        a: 'Yes, Mundra Port is approximately 65 to 70 km from Gandhidham, reachable within 1 hour 15 minutes to 1.5 hours.',
      },
      {
        q: 'How long does an outstation cab take from Gandhidham to Bhavnagar?',
        a: 'The road journey spans roughly 350 to 380 km, typically taking around 7 to 8 hours depending on highway traffic.',
      },
      {
        q: 'Are corporate billing and GST receipts supported for Gandhidham trips?',
        a: 'Yes, proper commercial invoicing is provided for all corporate and shipping company travel bookings.',
      },
      {
        q: 'How do I inquire about taxi bookings in Gandhidham?',
        a: 'Please send a WhatsApp message to +91 87803 11279 with your travel details to book your vehicle.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 13. Amreli (Regional Saurashtra - Confirmed)
  {
    slug: 'amreli',
    name: 'Amreli',
    audience: 'business',
    metaTitle: 'Taxi Service in Amreli | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Amreli: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Amreli',
    intro:
      'Amreli is an agricultural and regional administrative hub situated in the heart of southern Saurashtra. Known for its extensive agricultural markets, proximity to the Gir wildlife sanctuary belt, and close cultural connections to Bhavnagar and Surat, Amreli sees steady passenger travel for family visits, business meetings, and medical consultations. Velora Cabs provides comfortable intercity cab options for travelers journeying between Amreli, Bhavnagar, Rajkot, and Ahmedabad. Our confirmed offerings emphasize door-to-door residential pickups, punctual hospital appointment transfers, and well-maintained air-conditioned sedans and SUVs driven by experienced regional chauffeurs who prioritize highway safety and passenger comfort. We also arrange hospital consultation trips to Bhavnagar healthcare centers with flexible return timing and comfortable vehicle standby options, ensuring a safe, quiet, and reliable journey for families and senior citizens.',
    localHooks: [
      'Amreli town center and agricultural APMC market transit',
      'Southern Saurashtra connectivity linking Bhavnagar and Gir',
      'Outstation transit for regional family visits and business',
      'Proximity to Dhari, Savarkundla, and Rajula regional centers',
      'Direct highway corridor connecting to Bhavnagar (approx. 115 km)',
    ],
    services: [
      'Amreli to Bhavnagar outstation cab service',
      'Regional medical consultation travel to Ahmedabad',
      'Gir forest border leisure and nature trips',
      'Railway station and local doorstep pickups',
      'Family round-trip holiday taxi rentals',
    ],
    nearestCities: ['bhavnagar', 'palitana', 'ahmedabad'],
    topRoutes: ['bhavnagar-to-amreli-taxi', 'bhavnagar-to-palitana-taxi'],
    faqs: [
      {
        q: 'How far is Amreli from Bhavnagar by road?',
        a: 'Amreli is roughly 115 to 125 km west of Bhavnagar via the state highway corridor, taking about 2.5 to 3 hours by car.',
      },
      {
        q: 'Can I book a one-way cab between Amreli and Bhavnagar?',
        a: 'Yes, our services include convenient one-way transfers between Amreli and Bhavnagar without paying for return travel.',
      },
      {
        q: 'Do you offer cabs from Amreli to Ahmedabad for medical appointments?',
        a: 'Yes, door-to-door hospital transit from Amreli directly to major healthcare centers in Ahmedabad is part of our outstation offerings.',
      },
      {
        q: 'Which vehicles are available for Amreli regional travel?',
        a: 'We offer reliable Maruti Dzire sedans for small families and Maruti Ertiga SUVs for groups requiring extra comfort.',
      },
      {
        q: 'How can I check if a cab is available in Amreli today?',
        a: 'Contact Velora Cabs on WhatsApp at +91 87803 11279 for fast route booking and vehicle dispatch in Amreli.',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },

  // 14. Palitana (Pilgrimage Center - Confirmed)
  {
    slug: 'palitana',
    name: 'Palitana',
    audience: 'pilgrimage-leisure',
    metaTitle: 'Taxi Service in Palitana | AC Cab Booking, Velora Cabs',
    metaDescription: 'Book a taxi in Palitana: local, airport and outstation AC cabs. Request a quote on WhatsApp or call +91 87803 11279 for route and fare details.',
    h1: 'Taxi & Cab Service in Palitana',
    intro:
      'Palitana, nestled at the foot of the sacred Shatrunjaya Hills in Bhavnagar district, is one of the most revered and spiritually significant pilgrimage destinations in Jainism. With more than eight hundred intricately carved marble temples crowning the sacred mountain summit, hundreds of thousands of devout yatris, families, and senior citizens journey to Palitana every year. Because climbing the 3,500 stone steps requires starting early in the cool morning hours, dependable and stress-free transport is essential. Velora Cabs operates dedicated pilgrimage taxi services between Bhavnagar and Palitana (just 55 km away), as well as direct pilgrim transfers from Ahmedabad, Vadodara, Surat, and Mumbai. We provide pre-dawn 4:00 AM hotel pickups, drop-offs directly at the Taleti parking base, ample luggage space for dharamsala stays, and spacious 12–17 seater Tempo Travellers for community sanghs.',
    localHooks: [
      'Shatrunjaya Hill Taleti base parking and dharamsala transfers',
      'Early-morning pre-dawn (4:00–5:00 AM) pickups for the holy climb',
      'Direct 55 km highway link from Bhavnagar Airport and railway station',
      'Comfortable group travel in 12–17 seater AC Tempo Travellers',
      'Long-distance pilgrim returns to Ahmedabad, Surat, and Mumbai',
    ],
    services: [
      'Bhavnagar to Palitana early-morning yatra taxi',
      'Ahmedabad to Palitana same-day and round-trip cabs',
      'Tempo Traveller rentals for Jain sangh groups',
      'Taleti base to dharamsala local transfers',
      'Outstation pilgrim drops across Gujarat and Maharashtra',
    ],
    nearestCities: ['bhavnagar', 'amreli', 'ahmedabad'],
    topRoutes: [
      'bhavnagar-to-palitana-taxi',
      'bhavnagar-to-ahmedabad-taxi',
      'bhavnagar-to-surat-taxi',
    ],
    faqs: [
      {
        q: 'How far is Palitana from Bhavnagar, and how long does the cab take?',
        a: 'Palitana is situated approximately 50 to 55 km southwest of Bhavnagar city. By private AC cab, the drive takes around 1 hour to 1 hour 15 minutes along a well-paved state highway.',
      },
      {
        q: 'Can we book an early morning 4:30 AM cab from Bhavnagar to Palitana?',
        a: 'Yes, this is one of our most popular pilgrimage services. We schedule prompt pre-dawn pickups from any Bhavnagar hotel or residence so you reach Taleti in time for sunrise darshan.',
      },
      {
        q: 'Can the cab wait at the Taleti base while we climb Shatrunjaya Hill?',
        a: 'Yes, our round-trip packages include driver standby at the Taleti parking lot throughout your morning climb, pooja, and descent until you are ready to return.',
      },
      {
        q: 'Can we book a Tempo Traveller for a Jain group or family sangh to Palitana?',
        a: 'Yes, we provide 12-to-17 seater air-conditioned Tempo Travellers with ample luggage room, ideal for community sanghs traveling from Ahmedabad, Surat, or Mumbai.',
      },
      {
        q: 'Do you offer direct outstation cabs from Ahmedabad Airport to Palitana?',
        a: 'Yes, we pick up directly from Sardar Vallabhbhai Patel International Airport (AMD) in Ahmedabad and drive straight to Palitana (approx. 215 km, 4.5 to 5 hours).',
      },
    ],
    published: true,
    serviceConfirmed: true,
  },
];

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export function getConfirmedCities(): City[] {
  return CITIES.filter((city) => city.published && city.serviceConfirmed);
}

export function getAllCities(): City[] {
  return CITIES;
}
