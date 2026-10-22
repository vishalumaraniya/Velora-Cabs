// Single source of truth for all taxi routes
// NO price fields anywhere in this file — see Global Rule 3

export interface RouteData {
  slug: string;
  from: string;
  to: string;
  /** TODO: verify exact distance with GPS mapping */
  distanceKm: number;
  /** TODO: verify typical travel time — traffic dependent */
  durationHrs: string;
  intro: string;
  whyChoose: string[];
  notes: string[];
  bestFor: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const ROUTES: RouteData[] = [
  // ─── Bhavnagar ↔ Ahmedabad ───────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-ahmedabad',
    from: 'Bhavnagar',
    to: 'Ahmedabad',
    distanceKm: 215, // TODO: verify
    durationHrs: '3.5 – 4 hrs',
    intro:
      'The Bhavnagar to Ahmedabad cab route is one of the most travelled intercity corridors in Saurashtra. Whether you are heading to Ahmedabad for a business meeting, a flight from Sardar Vallabhbhai Patel International Airport (AMD), or a family visit, Velora Cabs provides a comfortable, AC ride on this well-maintained highway stretch. The route primarily runs via the NH 48 and SH 6 corridor, passing through Sihor and Botad, and is typically clear outside peak city-entry hours.',
    whyChoose: [
      'Doorstep pickup anywhere in Bhavnagar — including Bhavnagar Railway Station, Waghawadi Road, and Crescent Circle area',
      'Drop to any Ahmedabad address including Sardar Patel International Airport (AMD), SG Road, CG Road, Navrangpura, Maninagar and Bopal',
      'Fixed fare confirmed on WhatsApp before you travel — no surprise additions',
      'Experienced drivers familiar with Bhavnagar–Ahmedabad highway diversions and toll booths',
      'Choice of sedan (Swift Dzire) for individuals and small groups, or Ertiga for families needing extra luggage room',
    ],
    notes: [
      'Route typically runs via NH 48 through Sihor, Botad and Dholka',
      'Sardar Patel International Airport (AMD) is approximately 30 km from central Ahmedabad — factor in extra time during peak hours',
      'Toll plazas are present on this route; tolls are payable as applicable',
      'Bhavnagar city traffic is lighter early morning, making 5–7 AM departures smoother',
    ],
    bestFor: [
      'Business travellers and corporate commuters',
      'Passengers with early or late flights at Ahmedabad Airport',
      'Families visiting relatives in Ahmedabad',
      'Medical trips to Ahmedabad hospitals (Civil Hospital, Sterling, Apollo)',
    ],
    faqs: [
      {
        question: 'How long does the Bhavnagar to Ahmedabad cab journey take?',
        answer:
          'The journey is approximately 3.5 to 4 hours depending on traffic, especially during Ahmedabad city entry on SG Road or Sarkhej. Early morning departures are generally fastest.',
      },
      {
        question: 'Can I get a cab from Bhavnagar to Ahmedabad Airport?',
        answer:
          'Yes. We drop directly to the departures terminal at Sardar Vallabhbhai Patel International Airport (AMD). Share your flight time when booking so we can plan the pickup accordingly.',
      },
      {
        question: 'Is a one-way cab available from Bhavnagar to Ahmedabad?',
        answer:
          'Yes. One-way cabs are available on this route. You pay only for the Bhavnagar to Ahmedabad journey — no return-fare loading.',
      },
      {
        question: 'Which vehicle is best for a family trip from Bhavnagar to Ahmedabad?',
        answer:
          'The Maruti Suzuki Ertiga is ideal for families of up to 6 passengers with luggage. For 1–4 passengers travelling light, the Maruti Swift Dzire is comfortable and fuel-efficient.',
      },
    ],
    relatedSlugs: [
      'ahmedabad-to-bhavnagar',
      'bhavnagar-to-vadodara',
      'bhavnagar-to-surat',
      'bhavnagar-to-mumbai',
      'ahmedabad-to-dholera',
      'ahmedabad-to-palitana',
    ],
  },
  {
    slug: 'ahmedabad-to-bhavnagar',
    from: 'Ahmedabad',
    to: 'Bhavnagar',
    distanceKm: 215, // TODO: verify
    durationHrs: '3.5 – 4 hrs',
    intro:
      'Travelling from Ahmedabad to Bhavnagar by cab is a convenient choice for those heading to the Saurashtra coast for pilgrimage visits to Palitana, industrial work in the Bhavnagar port area, or family travel. Velora Cabs offers pickup from any Ahmedabad location — including the airport, railway station, and major residential zones — and delivers you directly to your destination in Bhavnagar. The highway is well-lit and clearly signposted, making it a reliable route even for late-night travel.',
    whyChoose: [
      'Airport pickup from AMD departures or arrivals area for connecting ground transport',
      'Pickup from Ahmedabad Railway Station (Kalupur) or Sabarmati Junction',
      'Drop to Bhavnagar Railway Station, Bhavnagar Port Road, Nari Road or any residential address',
      'Fare confirmed on WhatsApp before the trip starts',
      '24x7 availability — ideal for early morning onward journeys to Palitana',
    ],
    notes: [
      'Route runs via NH 48 / SH 6 through Dholka, Botad and Sihor',
      'Traffic exiting Ahmedabad via Sarkhej or BRTS corridor can add 20–30 minutes during peak hours',
      'Bhavnagar Airport (BHU) is a small domestic terminal — confirm flight options in advance',
      'Road condition from Botad to Bhavnagar is generally smooth on the state highway',
    ],
    bestFor: [
      'Pilgrims en route to Palitana Shatrunjaya (base at Bhavnagar)',
      'Business travellers visiting Bhavnagar port or industrial areas',
      'Returning residents after Ahmedabad airport arrivals',
      'Medical follow-up trips from Ahmedabad to Bhavnagar',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Ahmedabad Airport to Bhavnagar?',
        answer:
          'Yes. After your flight lands at AMD, our driver meets you at the arrivals area and drives you directly to Bhavnagar. Share your flight number when booking so pickup timing is precise.',
      },
      {
        question: 'Is the Ahmedabad to Bhavnagar route safe for night travel?',
        answer:
          'Yes. The NH 48 and state highway corridor is well-maintained. Our drivers are familiar with the route at all hours. Early morning and post-midnight bookings are accepted.',
      },
      {
        question: 'What is the best vehicle for the Ahmedabad to Bhavnagar trip?',
        answer:
          'The Swift Dzire is comfortable for solo and small groups. For larger families or those with significant luggage, the Ertiga offers extra seating and boot space.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-ahmedabad',
      'ahmedabad-to-dholera',
      'ahmedabad-to-palitana',
      'ahmedabad-to-vadodara',
      'bhavnagar-to-palitana',
      'bhavnagar-to-mumbai',
    ],
  },

  // ─── Bhavnagar ↔ Vadodara ────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-vadodara',
    from: 'Bhavnagar',
    to: 'Vadodara',
    distanceKm: 235, // TODO: verify
    durationHrs: '4 – 4.5 hrs',
    intro:
      'The Bhavnagar to Vadodara cab service connects Saurashtra\'s largest city with one of Gujarat\'s major commercial and cultural hubs. Vadodara (Baroda) is home to major industries, Maharaja Sayajirao University, and Vadodara International Airport. This route is popular for business travel to GIDC Waghodia, Savli industrial corridor, and family trips to the Vadodara Heritage belt. The journey takes you through the interior of Gujarat, passing close to Bharuch before dropping down to Vadodara.',
    whyChoose: [
      'Pickup from Bhavnagar city or any surrounding area, dropped at Vadodara Railway Station, Airport or any address',
      'Suitable for business travellers visiting Vadodara GIDC, Effluent Channel Project (ECP) and ONGC offices',
      'Ertiga available for groups of 5–6 with luggage',
      'Fixed fare confirmed before travel — no per-km billing surprise at end of trip',
      'Drivers experienced on the Bhavnagar–Anand–Vadodara highway corridor',
    ],
    notes: [
      'Route typically runs via Anand or Ahmedabad bypass depending on current road conditions',
      'Vadodara Airport (BDQ) is approximately 12 km from central Vadodara — confirm terminal timing when booking',
      'Industrial zones around Savli and Waghodia can cause brief delays during shift-change hours',
      'Toll charges on expressway sections are applicable and payable by the passenger',
    ],
    bestFor: [
      'Business travellers to Vadodara GIDC, Petrochemical zone and universities',
      'Passengers connecting via Vadodara Airport (BDQ) for Indigo/Air India domestic flights',
      'Family trips to Vadodara for Navratri, Diwali or Heritage visits',
      'Medical trips to SSG Hospital and Kiran Hospital, Vadodara',
    ],
    faqs: [
      {
        question: 'How long does a Bhavnagar to Vadodara cab take?',
        answer:
          'The trip takes approximately 4 to 4.5 hours depending on route chosen and traffic around Anand or Nadiad.',
      },
      {
        question: 'Is there a direct cab from Bhavnagar to Vadodara Airport?',
        answer:
          'Yes. We drop you directly to Vadodara Airport (BDQ) departures terminal. Mention your flight time when booking.',
      },
      {
        question: 'Can I stop at Bharuch or Anand on the way?',
        answer:
          'Yes, brief stopovers are accommodated on request. Please inform us when booking so the driver plans the route accordingly.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-surat',
      'bhavnagar-to-bharuch',
      'vadodara-to-surat',
      'ahmedabad-to-vadodara',
      'bhavnagar-to-mumbai',
    ],
  },
  {
    slug: 'vadodara-to-bhavnagar',
    from: 'Vadodara',
    to: 'Bhavnagar',
    distanceKm: 235, // TODO: verify
    durationHrs: '4 – 4.5 hrs',
    intro:
      'Travelling from Vadodara to Bhavnagar by cab is a popular choice for business professionals wrapping up work in Baroda\'s industrial zones and returning to Saurashtra, as well as pilgrims using Vadodara as a rail or air entry point before continuing to Palitana. Velora Cabs picks you up from anywhere in Vadodara — railway station, airport or office — and drives you directly to Bhavnagar in a clean AC vehicle.',
    whyChoose: [
      'Pickup from Vadodara Railway Station (Vadodara Junction) or Airport (BDQ)',
      'Direct drop to Bhavnagar or onward connection to Palitana',
      'Fare shared on WhatsApp before departure — fixed and transparent',
      '24x7 service for early morning train-arrival connections',
    ],
    notes: [
      'Route runs via Anand/Nadiad or through Ahmedabad bypass — driver selects best route',
      'Bhavnagar can act as a staging point for Palitana pilgrimages — mention if you need onward cab',
      'Toll charges applicable on expressway segments',
    ],
    bestFor: [
      'Pilgrims arriving at Vadodara Airport/Station en route to Palitana',
      'Corporate executives from Vadodara GIDC travelling to Bhavnagar port area',
      'Students returning to Bhavnagar from Vadodara universities',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Vadodara to Bhavnagar late at night?',
        answer:
          'Yes. Velora Cabs operates 24 hours a day. Late-night and early-morning bookings are accepted — call or WhatsApp +91 87803 11279 at any time.',
      },
      {
        question: 'Is a round trip from Vadodara to Bhavnagar available?',
        answer:
          'Yes. Round-trip booking from Vadodara to Bhavnagar and back is available. Share the return date and time when booking and we will factor it into your trip plan.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-vadodara',
      'vadodara-to-surat',
      'ahmedabad-to-vadodara',
      'bhavnagar-to-surat',
      'bhavnagar-to-bharuch',
      'bhavnagar-to-palitana',
    ],
  },

  // ─── Bhavnagar ↔ Surat ───────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-surat',
    from: 'Bhavnagar',
    to: 'Surat',
    distanceKm: 270, // TODO: verify
    durationHrs: '5.5 – 6 hrs',
    intro:
      'The Bhavnagar to Surat cab journey connects Saurashtra\'s business and port activity with the Diamond City — India\'s textile and diamond trading capital. This route is heavily used by traders, gem-industry professionals, and textile buyers who need a direct, comfortable road link between the two cities. Velora Cabs covers this entire corridor with AC vehicles and experienced highway drivers who know the NH 48 and Bharuch bypass well.',
    whyChoose: [
      'Door-to-door service from Bhavnagar to any Surat address — Ring Road, Udhna, Katargam, Athwa or Diamond Bourse',
      'Ertiga available for traders carrying sample bags and luggage',
      'Fixed fare quoted on WhatsApp before the trip — no last-minute additions',
      'Stop at Bharuch or Ankleswar on request for business visits',
      'Drivers familiar with Surat city entry routes to avoid inner-ring congestion',
    ],
    notes: [
      'Route runs via NH 48 through Bharuch and Surat Ring Road',
      'Surat city traffic (Udhna Darwaja, Ring Road, Katargam) can add significant time during peak hours 9–11 AM and 5–8 PM',
      'Surat Airport (STV) is approximately 15 km from the Diamond Bourse and central Ring Road',
      'Toll on NH 48 at Bharuch bridge and Surat approach — applicable and payable',
    ],
    bestFor: [
      'Diamond and textile trade professionals travelling between Bhavnagar and Surat',
      'Families visiting relatives in Surat\'s large Gujarati community',
      'Airport pickup and drop at Surat Airport (STV)',
      'Bulk buyers and exporters visiting Surat wholesale markets',
    ],
    faqs: [
      {
        question: 'How many hours is Bhavnagar to Surat by cab?',
        answer:
          'The distance is approximately 270 km and the journey takes 5.5 to 6 hours under normal traffic conditions. Surat city entry during peak hours can add 30–45 minutes.',
      },
      {
        question: 'Can I stop at Bharuch between Bhavnagar and Surat?',
        answer:
          'Yes. Brief stops at Bharuch or Ankleswar for business or food are accommodated. Please mention this when booking.',
      },
      {
        question: 'Is a cab from Bhavnagar to Surat Airport available?',
        answer:
          'Yes. We drop directly to Surat Airport (STV) departures. Mention your flight time when booking so we depart Bhavnagar with enough buffer.',
      },
      {
        question: 'Do you offer the Surat to Bhavnagar direction as well?',
        answer:
          'Yes. See our Surat to Bhavnagar cab page, or simply WhatsApp us your travel direction and details.',
      },
    ],
    relatedSlugs: [
      'surat-to-bhavnagar',
      'bhavnagar-to-mumbai',
      'bhavnagar-to-bharuch',
      'vadodara-to-surat',
      'surat-to-mumbai',
      'vapi-to-mumbai',
    ],
  },
  {
    slug: 'surat-to-bhavnagar',
    from: 'Surat',
    to: 'Bhavnagar',
    distanceKm: 270, // TODO: verify
    durationHrs: '5.5 – 6 hrs',
    intro:
      'Returning from Surat to Bhavnagar by cab after diamond trade meetings, textile purchases or family stays is a smooth and comfortable experience with Velora Cabs. We pick you up from Surat Ring Road, Udhna industrial area, Surat Railway Station or Surat Airport, and take you directly to Bhavnagar with a clean AC vehicle and an experienced driver. This westbound journey benefits from lighter highway traffic during late mornings and early afternoons.',
    whyChoose: [
      'Pickup from Surat Railway Station, Surat Airport (STV), Ring Road or Diamond Bourse',
      'Drop to any Bhavnagar address, or directly to Palitana on request',
      'Fixed fare confirmed before departure — no surprise additions',
      'Overnight or early-morning return bookings accepted',
    ],
    notes: [
      'Surat exit via Udhna or Hazira road can be slow during morning peak; share departure preference when booking',
      'Bharuch city stretch has congestion near the bridge during school and office hours',
      'Bhavnagar is reachable in one comfortable drive without an overnight halt',
    ],
    bestFor: [
      'Traders completing Surat market purchases returning to Bhavnagar',
      'Pilgrims connecting from Surat rail/air to Bhavnagar before Palitana',
      'Families returning after Surat visits',
      'Business professionals after Hazira LNG port area meetings',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Surat Airport to Bhavnagar?',
        answer:
          'Yes. After landing at Surat Airport (STV), our driver will take you directly to Bhavnagar. Share your flight arrival time so pickup is ready.',
      },
      {
        question: 'What is the best departure time from Surat to avoid traffic?',
        answer:
          'Departing Surat before 8 AM or after 8 PM helps avoid inner-city congestion on Ring Road and NH 48 approach. Mid-afternoon (1–3 PM) is also relatively clear.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-surat',
      'surat-to-mumbai',
      'bhavnagar-to-mumbai',
      'bhavnagar-to-bharuch',
      'vapi-to-mumbai',
      'bhavnagar-to-vadodara',
    ],
  },

  // ─── Bhavnagar ↔ Mumbai ───────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-mumbai',
    from: 'Bhavnagar',
    to: 'Mumbai',
    distanceKm: 650, // TODO: verify
    durationHrs: '11 – 12 hrs',
    intro:
      'The Bhavnagar to Mumbai cab journey is a long-distance road trip through the Gujarat–Maharashtra highway corridor, covering the busiest outstation route from Saurashtra. Travellers heading to Mumbai for medical treatment at Kokilaben Dhirubhai Ambani, Jaslok or Lilavati hospitals, business in BKC or Nariman Point, or family visits in suburban Mumbai choose Velora Cabs for the comfort of a direct, non-stop AC ride. Our drivers are experienced on this overnight route and make the journey smooth and safe.',
    whyChoose: [
      'Direct cab — no bus stops or intermediate passengers',
      'Pickup from anywhere in Bhavnagar, drop at any Mumbai suburb — Andheri, Borivali, Navi Mumbai, Thane or BKC',
      'Mumbai airport drop (CSIA T1 or T2) arranged for early morning flights',
      'Ertiga or Tempo Traveller for family groups needing more space',
      'Experienced overnight drivers — no fatigue risk on the long Gujarat–Maharashtra stretch',
    ],
    notes: [
      'Route runs via NH 48 through Bharuch, Surat, Vapi and then NH 48 into Mumbai via Vasai',
      'Mumbai entry via Western Express Highway or Eastern Freeway varies by destination — driver selects optimal route',
      'Mumbai Chhatrapati Shivaji Maharaj International Airport (BOM / CSIA) is at T1 (domestic) and T2 (international) — confirm terminal when booking',
      'Departure from Bhavnagar around 8–10 PM enables comfortable overnight travel with Mumbai arrival in early morning',
      'Toll charges on NH 48 and Mumbai Entry Point — applicable and payable',
    ],
    bestFor: [
      'Medical trips to Mumbai hospitals (CSMIA, Tata Memorial, Kokilaben)',
      'Business travellers to BKC, Nariman Point and Navi Mumbai SEEPZ',
      'Families making interstate visits to Mumbai suburbs',
      'Passengers wanting Mumbai Airport drop for international flights from T2',
    ],
    faqs: [
      {
        question: 'How long does a Bhavnagar to Mumbai cab journey take?',
        answer:
          'The journey covers approximately 650 km and takes 11 to 12 hours depending on highway traffic, Surat bypass and Mumbai entry delays. Overnight trips departing around 9–10 PM typically arrive in Mumbai by early morning.',
      },
      {
        question: 'Is there a rest stop on the Bhavnagar to Mumbai route?',
        answer:
          'Yes. Drivers typically stop at a highway dhaba or petrol station near Bharuch or Vapi for a short break. The exact stop is at the driver\'s discretion based on timing.',
      },
      {
        question: 'Can I get a cab from Bhavnagar directly to Mumbai Airport?',
        answer:
          'Yes. We drop to Mumbai CSIA T1 (domestic) or T2 (international). Mention your terminal and flight time when booking so we plan the Bhavnagar departure accordingly.',
      },
      {
        question: 'Is a one-way cab from Bhavnagar to Mumbai available?',
        answer:
          'Yes. One-way cabs are available from Bhavnagar to Mumbai. You pay only for the trip to Mumbai — no hidden return fare.',
      },
    ],
    relatedSlugs: [
      'mumbai-to-bhavnagar',
      'surat-to-mumbai',
      'bhavnagar-to-surat',
      'vapi-to-mumbai',
      'bhavnagar-to-bharuch',
      'bhavnagar-to-ahmedabad',
    ],
  },
  {
    slug: 'mumbai-to-bhavnagar',
    from: 'Mumbai',
    to: 'Bhavnagar',
    distanceKm: 650, // TODO: verify
    durationHrs: '11 – 12 hrs',
    intro:
      'Heading back to Bhavnagar from Mumbai by cab with Velora Cabs means a comfortable, direct overnight journey with an experienced driver — no bus halts, no route changes. We pick you up from anywhere in Mumbai — your home, office, or Mumbai Airport (CSIA T1/T2) — and drive you all the way to Bhavnagar in a clean AC vehicle. This route is popular with Saurashtra residents who work in Mumbai and return home for festivals, weddings and family visits.',
    whyChoose: [
      'Airport pickup from CSIA T1 or T2 after international or domestic arrivals',
      'Pickup from Andheri, Borivali, Thane, Navi Mumbai, BKC or Nariman Point',
      'Direct door-to-door — no intermediate stops unless requested',
      'Overnight or early-morning departures available',
      'Fare fixed and confirmed on WhatsApp before the trip starts',
    ],
    notes: [
      'Mumbai exit on Western Express Highway or Vasai route adds 45–90 minutes during peak traffic',
      'Departing Mumbai after 10 PM or before 6 AM avoids worst traffic',
      'Bhavnagar arrival time depends heavily on Mumbai departure time and highway traffic flow',
      'Toll charges at Mumbai entry/exit points and NH 48 — payable en route',
    ],
    bestFor: [
      'Saurashtra residents returning from Mumbai for festivals and family occasions',
      'Post-medical-treatment patients being discharged from Mumbai hospitals',
      'Business travellers returning to Bhavnagar after Mumbai corporate meetings',
      'Pilgrims starting their Saurashtra pilgrimage tour from Mumbai',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Mumbai Airport directly to Bhavnagar?',
        answer:
          'Yes. Our driver meets you at CSIA arrivals (T1 or T2). Just share your flight number and arrival time so pickup is timed correctly.',
      },
      {
        question: 'What time should I depart Mumbai for Bhavnagar?',
        answer:
          'Departing between 9 PM and midnight avoids Mumbai city traffic. A 10 PM departure typically reaches Bhavnagar by 9–10 AM the next morning.',
      },
      {
        question: 'Is a round trip from Mumbai to Bhavnagar available?',
        answer:
          'Yes. Round-trip booking means we handle both legs — Mumbai to Bhavnagar and Bhavnagar back to Mumbai — with consistent fare confirmation for both journeys.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-mumbai',
      'surat-to-mumbai',
      'vapi-to-mumbai',
      'bhavnagar-to-surat',
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-bharuch',
    ],
  },

  // ─── Bhavnagar ↔ Bharuch ─────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-bharuch',
    from: 'Bhavnagar',
    to: 'Bharuch',
    distanceKm: 175, // TODO: verify
    durationHrs: '3 – 3.5 hrs',
    intro:
      'The Bhavnagar to Bharuch cab route serves a growing corridor of industrial and port-related travel. Bharuch is home to one of India\'s largest chemical and petrochemical industrial clusters, with Dahej SEZ and GIDC Ankleshwar lying just beyond. Professionals from Bhavnagar working in or visiting Bharuch\'s chemical plants, fertiliser factories and the ONGC complex frequently use this route. Velora Cabs makes the journey comfortable with AC vehicles and highway-experienced drivers.',
    whyChoose: [
      'Pickup from any Bhavnagar address for direct drop to Bharuch or Ankleshwar GIDC',
      'Convenient for Dahej SEZ visitors — Bharuch is the gateway city',
      'Fixed fare on WhatsApp — no meter surprises',
      'Ertiga for small corporate teams travelling together',
    ],
    notes: [
      'Route runs via NH 48 through Botad and Ahmedabad bypass or direct through Anand/Nadiad corridor',
      'Bharuch bridge traffic can be slow during morning and evening hours',
      'Ankleshwar GIDC and Bharuch industrial area have internal check gates — plan arrival time accordingly',
      'Dahej is an additional 45–60 km beyond Bharuch city centre',
    ],
    bestFor: [
      'Chemical industry professionals visiting Bharuch GIDC and Ankleshwar',
      'ONGC and fertiliser plant employees based in Bhavnagar',
      'Business travellers using Bharuch as a transit point to Surat or Vadodara',
      'Passengers connecting at Bharuch Railway Station for further travel',
    ],
    faqs: [
      {
        question: 'How long is the Bhavnagar to Bharuch cab ride?',
        answer:
          'Approximately 3 to 3.5 hours covering around 175 km via NH 48. Traffic at Bharuch bridge approach can add time during peak hours.',
      },
      {
        question: 'Can I get a cab from Bhavnagar to Ankleshwar GIDC?',
        answer:
          'Yes. Ankleshwar industrial area is adjacent to Bharuch. We drop to the GIDC gate or any address within Ankleshwar.',
      },
      {
        question: 'Is the Bharuch to Dahej cab available through Velora Cabs?',
        answer:
          'Yes. We operate on the Bhavnagar–Bharuch–Dahej corridor. If your final destination is Dahej, mention this when booking — the fare will reflect the full distance.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-dahej',
      'bhavnagar-to-surat',
      'bhavnagar-to-vadodara',
      'ahmedabad-to-dahej',
      'bhavnagar-to-mumbai',
      'vadodara-to-surat',
    ],
  },
  {
    slug: 'bharuch-to-bhavnagar',
    from: 'Bharuch',
    to: 'Bhavnagar',
    distanceKm: 175, // TODO: verify
    durationHrs: '3 – 3.5 hrs',
    intro:
      'Returning from Bharuch\'s industrial zones to Bhavnagar is a common journey for chemical plant contractors and port logistics professionals. Velora Cabs picks you up from Bharuch city, Ankleshwar GIDC or even Dahej SEZ and drives you directly back to Bhavnagar without the hassle of bus connections or shared cabs.',
    whyChoose: [
      'Pickup from Bharuch Railway Station, Ankleshwar GIDC, or Bharuch city address',
      'Direct drop anywhere in Bhavnagar',
      'Flexible pickup times for industrial shift completion',
      'Fare fixed upfront via WhatsApp',
    ],
    notes: [
      'Ankleshwar GIDC exits can have traffic delays during shift changes (6–8 AM and 2–4 PM)',
      'Bharuch bridge is often congested during evening hours',
    ],
    bestFor: [
      'Industrial contractors returning to Bhavnagar after Bharuch GIDC project work',
      'Passengers connecting from Bharuch Railway Station to Bhavnagar',
      'Corporate teams completing Ankleshwar/Dahej visits',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Ankleshwar to Bhavnagar?',
        answer:
          'Yes. We pick up from Ankleshwar GIDC gate or any address and drive you directly to Bhavnagar. Fare is based on actual pickup point.',
      },
      {
        question: 'Is there an early morning cab from Bharuch to Bhavnagar?',
        answer:
          'Yes. Early morning bookings are available 24x7. Call or WhatsApp the night before to schedule a pre-dawn departure.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-bharuch',
      'bhavnagar-to-dahej',
      'bhavnagar-to-surat',
      'bhavnagar-to-vadodara',
      'ahmedabad-to-dahej',
      'bhavnagar-to-ahmedabad',
    ],
  },

  // ─── Bhavnagar ↔ Dahej ───────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-dahej',
    from: 'Bhavnagar',
    to: 'Dahej',
    distanceKm: 215, // TODO: verify
    durationHrs: '3.5 – 4 hrs',
    intro:
      'Dahej is one of Gujarat\'s most active industrial port towns — home to Dahej SEZ, ONGC Dahej Terminal, Dahej LNG terminal and major petrochemical plants. The Bhavnagar to Dahej cab route is used almost exclusively by industrial and port professionals who need a comfortable, punctual ride to early-morning plant reporting times. Velora Cabs understands this operational context — our drivers arrive on time and know the port-area access roads.',
    whyChoose: [
      'Doorstep pickup from Bhavnagar, delivered to Dahej SEZ gate, ONGC terminal or LNG plant',
      'Early morning departures available for 6 AM plant reporting',
      'Fixed fare confirmed before travel — suitable for corporate billing',
      'Ertiga for small teams of 4–6 professionals',
    ],
    notes: [
      'Dahej is reached via Bharuch — factor in Bharuch bridge traffic when departing during peak hours',
      'Dahej port area has security gates — passenger must carry valid ID and work pass',
      'Route covers approximately 215 km total via Bharuch approach',
    ],
    bestFor: [
      'ONGC and LNG terminal employees visiting Dahej from Bhavnagar',
      'Petrochemical plant contractors and inspectors',
      'Port logistics and shipping professionals',
      'Corporate teams making site visits to Dahej SEZ factories',
    ],
    faqs: [
      {
        question: 'Is there a direct cab from Bhavnagar to Dahej?',
        answer:
          'Yes. Velora Cabs operates direct cabs on the Bhavnagar–Bharuch–Dahej corridor. No change of vehicle — you are dropped at your Dahej destination.',
      },
      {
        question: 'Can I book an early morning cab from Bhavnagar to Dahej for 6 AM plant arrival?',
        answer:
          'Yes. We plan the Bhavnagar departure time to ensure you reach Dahej SEZ or ONGC terminal before your plant reporting time. Book the night before for best results.',
      },
      {
        question: 'Is Dahej to Bhavnagar return cab available?',
        answer:
          'Yes. We operate the return direction as well — Dahej to Bhavnagar. Fare is confirmed before the trip.',
      },
    ],
    relatedSlugs: [
      'dahej-to-bhavnagar',
      'bhavnagar-to-bharuch',
      'ahmedabad-to-dahej',
      'bhavnagar-to-surat',
      'bhavnagar-to-vadodara',
      'bhavnagar-to-mumbai',
    ],
  },
  {
    slug: 'dahej-to-bhavnagar',
    from: 'Dahej',
    to: 'Bhavnagar',
    distanceKm: 215, // TODO: verify
    durationHrs: '3.5 – 4 hrs',
    intro:
      'After long plant shifts or inspection visits at Dahej SEZ or ONGC Terminal, a direct cab back to Bhavnagar is the most comfortable option. Velora Cabs picks up from the Dahej plant gates or LNG terminal and drives you directly to Bhavnagar — no transfers, no waiting at bus stands.',
    whyChoose: [
      'Pickup from Dahej SEZ gate, ONGC terminal, or LNG plant entrance',
      'Direct drop to Bhavnagar address without intermediate stops',
      'Shift-end timing flexibility — no fixed departure requirement',
      'Fare fixed and shared via WhatsApp before pickup',
    ],
    notes: [
      'Bharuch bridge congestion during evening (5–8 PM) can affect travel time',
      'Coordinate pickup time with plant exit procedure to avoid waiting',
    ],
    bestFor: [
      'Plant engineers and inspectors returning to Bhavnagar after Dahej shifts',
      'Port and shipping professionals finishing port-day operations',
      'Corporate teams completing Dahej SEZ factory visits',
    ],
    faqs: [
      {
        question: 'Can a cab pick me up from inside the Dahej SEZ security gate?',
        answer:
          'Our driver will wait at the designated pickup point outside the security gate or at the nearest accessible location. Coordinate the exact meeting point when booking.',
      },
      {
        question: 'Is a late-night Dahej to Bhavnagar cab available?',
        answer:
          'Yes. We operate 24 hours a day. Late-night shift-end pickups from Dahej are available on advance booking.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-dahej',
      'ahmedabad-to-dahej',
      'bhavnagar-to-bharuch',
      'bhavnagar-to-surat',
      'bhavnagar-to-vadodara',
      'bhavnagar-to-ahmedabad',
    ],
  },

  // ─── Bhavnagar → Palitana ─────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-palitana',
    from: 'Bhavnagar',
    to: 'Palitana',
    distanceKm: 55, // TODO: verify
    durationHrs: '1 – 1.5 hrs',
    intro:
      'Palitana, home to the sacred Shatrunjaya hill with its cluster of over 900 Jain temples, is one of the holiest pilgrimage sites in India. Located just 55 km from Bhavnagar, this short cab journey is one of the most frequently booked routes by Jain pilgrims arriving at Bhavnagar by train or air. Velora Cabs provides a quiet, comfortable ride to the Palitana town base, where pilgrims begin the climb to Shatrunjaya. Early morning departures are popular to begin the climb before the heat of the day.',
    whyChoose: [
      'Pickup from Bhavnagar Railway Station, Bhavnagar Airport or any Bhavnagar hotel or home',
      'Drop to Palitana town centre, near the Shatrunjaya tirth entrance',
      'Quiet, comfortable ride — ideal for senior and elderly pilgrims',
      'Early morning 4–5 AM pickups available for dawn climb start',
      'Return cab from Palitana to Bhavnagar or onward to Ahmedabad arranged on request',
    ],
    notes: [
      'Palitana is approximately 55 km from Bhavnagar via SH 19 through Ghogha and Talaja',
      'The tirth entrance at Shatrunjaya base village requires a short walk from the drop point',
      'Palitana town has limited parking near the hill — driver waits at an agreed point',
      'Pilgrims should carry water and light footwear for the hill climb',
    ],
    bestFor: [
      'Jain pilgrims on Shatrunjaya Yatra from Bhavnagar',
      'Families visiting the Palitana temples for religious occasions',
      'Tour groups needing Tempo Traveller for group pilgrimages',
      'Day-trippers from Bhavnagar hotels to Palitana and back',
    ],
    faqs: [
      {
        question: 'How far is Palitana from Bhavnagar by cab?',
        answer:
          'Palitana is approximately 55 km from Bhavnagar and the cab journey takes about 1 to 1.5 hours via SH 19.',
      },
      {
        question: 'Can I book an early morning cab to Palitana for 4 AM?',
        answer:
          'Yes. Early morning pickups for dawn pilgrim climbs are accepted. Book the previous evening and confirm the departure time clearly.',
      },
      {
        question: 'Is a round-trip cab from Bhavnagar to Palitana available?',
        answer:
          'Yes. We can wait at Palitana while you complete the climb and drive you back to Bhavnagar, or arrange a fixed return time cab.',
      },
      {
        question: 'Can a Tempo Traveller be booked for a pilgrim group to Palitana?',
        answer:
          'Yes. Our Tempo Traveller accommodates groups of up to 15 passengers — ideal for group Jain pilgrimage visits to Shatrunjaya.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-ahmedabad',
      'ahmedabad-to-palitana',
      'bhavnagar-to-amreli',
      'ahmedabad-to-bhavnagar',
      'bhavnagar-to-surat',
      'bhavnagar-to-mumbai',
    ],
  },

  // ─── Bhavnagar → Amreli ───────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-amreli',
    from: 'Bhavnagar',
    to: 'Amreli',
    distanceKm: 110, // TODO: verify
    durationHrs: '2 – 2.5 hrs',
    intro:
      'Amreli, the district headquarters of Amreli district in Saurashtra, is connected to Bhavnagar by a well-maintained state highway. The route is used by administrative travellers, agricultural traders, court professionals and medical patients who need to reach Bhavnagar\'s referral hospitals or travel to Amreli for government work. Velora Cabs covers this intra-Saurashtra route with timely, comfortable AC rides.',
    whyChoose: [
      'Pickup from Bhavnagar city, drop to Amreli town centre or Amreli GIDC',
      'Comfortable AC ride on the flat Saurashtra plains highway',
      'Flexible departure times for court hearings or government office visits',
      'Fare fixed on WhatsApp before travel',
    ],
    notes: [
      'Route runs via Gariadhar or Lathidad depending on current road conditions',
      'Amreli town is compact — driver can drop to your specific address within town',
      'No major toll plazas on this intra-district route; confirm at time of booking',
    ],
    bestFor: [
      'Government officials and court professionals between Bhavnagar and Amreli',
      'Agricultural traders visiting Amreli APMC yard',
      'Medical patients from Amreli seeking treatment at Bhavnagar hospitals',
      'Students commuting between Bhavnagar and Amreli institutions',
    ],
    faqs: [
      {
        question: 'How long is the Bhavnagar to Amreli cab journey?',
        answer:
          'Approximately 2 to 2.5 hours via SH across the Saurashtra plains — a comfortable single-session drive.',
      },
      {
        question: 'Is a same-day return from Bhavnagar to Amreli possible?',
        answer:
          'Yes. Many passengers complete their Amreli visit and return the same day. Book a round trip or arrange a fixed return time.',
      },
    ],
    relatedSlugs: [
      'bhavnagar-to-palitana',
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-surat',
      'bhavnagar-to-rajkot',
      'bhavnagar-to-bhuj',
      'bhavnagar-to-mumbai',
    ],
  },

  // ─── Bhavnagar → Bhuj ─────────────────────────────────────────────────────
  {
    slug: 'bhavnagar-to-bhuj',
    from: 'Bhavnagar',
    to: 'Bhuj',
    distanceKm: 355, // TODO: verify
    durationHrs: '6 – 7 hrs',
    intro:
      'Bhuj, the cultural capital of Kutch, is a rapidly growing destination for industrial activity at Mundra Port, APSE, and Kandla Port, as well as for tourism at the Rann of Kutch and Bhuj Heritage sites. The Bhavnagar to Bhuj cab route traverses the length of Gujarat\'s Saurashtra and Kutch regions, offering a scenic journey through the Bhal plains and across the Little Rann approach. Velora Cabs covers this long-distance intra-Gujarat route with highway-capable vehicles and rested drivers.',
    whyChoose: [
      'Direct cab — no bus halts between Bhavnagar and Bhuj',
      'Drop to Bhuj city, Mundra Port industrial zone or Gandhidham',
      'Ertiga or Tempo Traveller for families and groups visiting Kutch',
      'Fixed fare confirmed before the long journey begins',
      'Drivers familiar with Kutch approach roads and Bhuj city navigation',
    ],
    notes: [
      'Route runs via Dhrangadhra, Morbi and Anjar or via Rajkot-Bhuj corridor depending on conditions',
      'Bhuj Airport (BHJ) handles limited flights — confirm availability; cab is often the only ground option',
      'Kutch wildlife sanctuary roads near Rann area are seasonal — check road status in monsoon',
      'Bhuj city has good accommodation; this route can be a day trip from Bhavnagar or with overnight stay',
    ],
    bestFor: [
      'Industrial professionals visiting Mundra Port, APSE Zone or Adani group facilities',
      'Tourism groups heading to Rann of Kutch, Bhuj Palace and Kutch Museum',
      'Families visiting Kutch relatives with luggage — Ertiga recommended',
      'Gandhidham port and Kandla customs professionals',
    ],
    faqs: [
      {
        question: 'How many hours is Bhavnagar to Bhuj by cab?',
        answer:
          'Approximately 6 to 7 hours covering around 355 km. The route crosses the Saurashtra plains before entering Kutch.',
      },
      {
        question: 'Can I get a drop at Mundra Port from Bhavnagar?',
        answer:
          'Yes. Mundra Port is approximately 60 km south of Bhuj. Mention Mundra as your destination and fare will reflect the full distance.',
      },
      {
        question: 'Is this route available for the Rann Utsav festival season?',
        answer:
          'Yes. Rann Utsav (typically October–February) brings high demand — book in advance for festival-period travel.',
      },
    ],
    relatedSlugs: [
      'gandhidham-to-bhuj',
      'bhuj-to-gandhidham',
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-amreli',
      'bhavnagar-to-palitana',
      'bhavnagar-to-mumbai',
    ],
  },

  // ─── Ahmedabad → Dholera ──────────────────────────────────────────────────
  {
    slug: 'ahmedabad-to-dholera',
    from: 'Ahmedabad',
    to: 'Dholera',
    distanceKm: 100, // TODO: verify
    durationHrs: '1.5 – 2 hrs',
    intro:
      'Dholera Special Investment Region (DSIR) is India\'s first and largest greenfield smart city project, under development on the Gulf of Khambhat coast approximately 100 km south of Ahmedabad. The Ahmedabad to Dholera cab route has become one of the fastest-growing business corridors in Gujarat, with investors, government delegates, construction professionals and real estate buyers making frequent trips. The Dholera-SIR activation road and the upcoming Dholera International Airport are transforming this route into a critical professional travel link.',
    whyChoose: [
      'Pickup from any Ahmedabad address — airport, SG Road, CG Road, Satellite or Bopal',
      'Drop to Dholera SIR project site, DFC corridor zone or GIDC Dholera',
      'Suitable for corporate site visits and investor tours of DSIR plots',
      'Fixed fare confirmed before travel — corporate billing friendly',
      'Drivers familiar with the Dholera Activation Road and DSIR entry points',
    ],
    notes: [
      'Route runs via Dholera Activation Road from Ahmedabad (NH-751 approach through Khambhat direction)',
      'Dholera SIR is an active construction zone — road conditions near project areas may vary',
      'The future Dholera International Airport is under construction in the DSIR area — monitor arrival for airport-related visits',
      'Limited food options en route; carry refreshments for the journey',
    ],
    bestFor: [
      'Real estate investors and developers visiting Dholera SIR plots',
      'Government officials and delegate tours of the DSIR',
      'Construction and project management professionals at DSIR site',
      'Corporate investors from Ahmedabad for business scouting',
    ],
    faqs: [
      {
        question: 'How long is the Ahmedabad to Dholera cab journey?',
        answer:
          'Approximately 1.5 to 2 hours for the 100 km route. The Dholera Activation Road has improved travel times significantly.',
      },
      {
        question: 'Is there a cab from Ahmedabad Airport to Dholera SIR?',
        answer:
          'Yes. We pick up from AMD arrivals and drive you directly to the Dholera SIR project site or any Dholera address. Ideal for government delegations landing at Ahmedabad.',
      },
      {
        question: 'What is the best vehicle for a Dholera site visit?',
        answer:
          'The Swift Dzire works well for 1–4 visitors. For corporate teams of 5–6 with site documents and equipment, the Ertiga offers extra space.',
      },
    ],
    relatedSlugs: [
      'ahmedabad-to-bhavnagar',
      'ahmedabad-to-palitana',
      'bhavnagar-to-ahmedabad',
      'ahmedabad-to-vadodara',
      'ahmedabad-to-dahej',
      'bhavnagar-to-dahej',
    ],
  },

  // ─── Ahmedabad → Palitana ─────────────────────────────────────────────────
  {
    slug: 'ahmedabad-to-palitana',
    from: 'Ahmedabad',
    to: 'Palitana',
    distanceKm: 215, // TODO: verify
    durationHrs: '3.5 – 4 hrs',
    intro:
      'The Ahmedabad to Palitana cab route is one of the most significant pilgrimage journeys in Gujarat, connecting the state capital with the sacred Shatrunjaya hill — the holiest Jain tirth on Earth, housing over 900 temples. Jain families, NRI pilgrims transiting through Ahmedabad Airport, and religious tour groups book this route in large numbers, particularly during Paryushana and Diwali seasons. Velora Cabs provides a quiet, respectful and comfortable ride for this sacred journey.',
    whyChoose: [
      'Pickup from Ahmedabad Airport (AMD), Ahmedabad Railway Station (Kalupur) or any Ahmedabad address',
      'Direct drop to Palitana tirth base — no route changes',
      'Tempo Traveller available for large pilgrim groups',
      'Early morning departures for dawn arrival at Shatrunjaya base',
      'Drivers are respectful and familiar with pilgrimage-group needs',
    ],
    notes: [
      'Route runs via Bhavnagar bypass or through Botad and Talaja depending on group preference',
      'Palitana town is a non-violence zone — no meat/eggs sold in the area',
      'Shatrunjaya hill climb is approximately 3,500+ steps — plan start time accordingly',
      'Temple opening hours vary by season — verify with tirth management before travelling',
    ],
    bestFor: [
      'Jain families and pilgrim groups on Shatrunjaya Yatra',
      'NRI pilgrims arriving via Ahmedabad Airport for tirth visits',
      'Religious tour groups from Ahmedabad',
      'Devotees combining Palitana with Bhavnagar temples and Velavadar',
    ],
    faqs: [
      {
        question: 'How long does the Ahmedabad to Palitana cab journey take?',
        answer:
          'Approximately 3.5 to 4 hours for the 215 km route. The Bhavnagar bypass keeps the route smooth.',
      },
      {
        question: 'Can a large group book a Tempo Traveller from Ahmedabad to Palitana?',
        answer:
          'Yes. Our Tempo Traveller accommodates up to 15 passengers — ideal for group pilgrimages from Ahmedabad.',
      },
      {
        question: 'Is a round-trip cab from Ahmedabad to Palitana available?',
        answer:
          'Yes. We offer round-trip cabs where we wait in Palitana while you complete your visit, then drive you back to Ahmedabad.',
      },
      {
        question: 'Can I combine Palitana and Bhavnagar in one trip?',
        answer:
          'Yes. Many pilgrims stop in Bhavnagar, visit Palitana and then return to Ahmedabad. We plan multi-stop itineraries — share your plan when booking.',
      },
    ],
    relatedSlugs: [
      'ahmedabad-to-bhavnagar',
      'bhavnagar-to-palitana',
      'ahmedabad-to-dholera',
      'bhavnagar-to-ahmedabad',
      'ahmedabad-to-vadodara',
      'bhavnagar-to-surat',
    ],
  },

  // ─── Ahmedabad ↔ Vadodara ─────────────────────────────────────────────────
  {
    slug: 'ahmedabad-to-vadodara',
    from: 'Ahmedabad',
    to: 'Vadodara',
    distanceKm: 110, // TODO: verify
    durationHrs: '1.5 – 2 hrs',
    intro:
      'The Ahmedabad to Vadodara cab route is one of the busiest business corridors in Gujarat, served by the Ahmedabad–Vadodara Expressway. It connects two of Gujarat\'s three largest cities — the commercial capital with the cultural and industrial hub of Baroda. Corporate executives, students, shoppers and medical travellers make this journey daily. Velora Cabs provides a smooth, reliable AC ride on this expressway route with experienced drivers who manage expressway speed and toll lanes efficiently.',
    whyChoose: [
      'Pickup from Ahmedabad Airport (AMD), SG Road, Prahlad Nagar or any Ahmedabad zone',
      'Drop to Vadodara Airport (BDQ), Vadodara Railway Station, Sayajigunj or Waghodia GIDC',
      'Fastest road option via the Ahmedabad–Vadodara Expressway (approx 1.5 hours)',
      'Fixed fare confirmed before travel — no expressway surprises',
    ],
    notes: [
      'Ahmedabad–Vadodara Expressway toll is applicable — payable at toll plazas',
      'Ahmedabad city exit via BRTS, Sarkhej or Isanpur adds 20–30 min during peak hours',
      'Vadodara city entry near Gorwa or Harni junction can be slow in evenings',
      'Vadodara Airport (BDQ) connects to Delhi, Mumbai and other metros via domestic flights',
    ],
    bestFor: [
      'Corporate executives commuting between Ahmedabad and Vadodara offices',
      'Passengers connecting at Vadodara Airport (BDQ) for domestic flights',
      'Students travelling between Ahmedabad and MSU Vadodara',
      'Medical travellers to SSG Hospital or private hospitals in Vadodara',
    ],
    faqs: [
      {
        question: 'How long is the Ahmedabad to Vadodara cab journey via expressway?',
        answer:
          'Via the Ahmedabad–Vadodara Expressway, the journey is approximately 1.5 to 2 hours depending on city entry/exit traffic.',
      },
      {
        question: 'Is a cab from Ahmedabad Airport to Vadodara available?',
        answer:
          'Yes. We pick up from AMD arrivals and drive directly to your Vadodara destination or Vadodara Airport (BDQ).',
      },
      {
        question: 'Can I book a one-way cab from Ahmedabad to Vadodara?',
        answer:
          'Yes. One-way cabs are available. You pay only for the Ahmedabad to Vadodara journey.',
      },
    ],
    relatedSlugs: [
      'vadodara-to-ahmedabad',
      'vadodara-to-surat',
      'ahmedabad-to-dahej',
      'ahmedabad-to-dholera',
      'bhavnagar-to-vadodara',
      'bhavnagar-to-ahmedabad',
    ],
  },
  {
    slug: 'vadodara-to-ahmedabad',
    from: 'Vadodara',
    to: 'Ahmedabad',
    distanceKm: 110, // TODO: verify
    durationHrs: '1.5 – 2 hrs',
    intro:
      'Heading from Vadodara to Ahmedabad for a flight at AMD, a business meeting on SG Road, or a hospital appointment? Velora Cabs picks you up from any Vadodara location — Waghodia GIDC, Vadodara Airport, Sayajigunj or any residential address — and gets you to Ahmedabad reliably via the expressway. This route is heavily used by corporate professionals who split their week between the two cities.',
    whyChoose: [
      'Pickup from Vadodara Airport (BDQ), Vadodara Junction or any Vadodara zone',
      'Drop to Ahmedabad Airport (AMD), Prahlad Nagar, GIFT City or any address',
      'Fast expressway route — typically under 2 hours',
      'Fixed fare confirmed on WhatsApp before departure',
    ],
    notes: [
      'Expressway toll applicable at plaza between Ahmedabad and Vadodara',
      'Vadodara exit near Harni can be congested on weekday mornings',
      'Ahmedabad entry via Sarkhej-Sanand interchange adds time during peak hours',
    ],
    bestFor: [
      'Travellers catching early flights at Ahmedabad Airport from Vadodara',
      'Corporate commuters between Vadodara GIDC and Ahmedabad offices',
      'Patients visiting Ahmedabad hospitals from Vadodara',
      'Students travelling between MSU and universities in Ahmedabad',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Vadodara to Ahmedabad Airport at 4 AM?',
        answer:
          'Yes. Our 24x7 service accepts early morning bookings. Book the night before with your AMD departure time and we will plan pickup from Vadodara accordingly.',
      },
      {
        question: 'Is a Vadodara to GIFT City cab available?',
        answer:
          'Yes. GIFT City in Gandhinagar is reachable from Vadodara via Ahmedabad — approximately 2.5 to 3 hours total.',
      },
    ],
    relatedSlugs: [
      'ahmedabad-to-vadodara',
      'vadodara-to-surat',
      'bhavnagar-to-vadodara',
      'ahmedabad-to-dholera',
      'ahmedabad-to-dahej',
      'bhavnagar-to-ahmedabad',
    ],
  },

  // ─── Vadodara ↔ Surat ─────────────────────────────────────────────────────
  {
    slug: 'vadodara-to-surat',
    from: 'Vadodara',
    to: 'Surat',
    distanceKm: 155, // TODO: verify
    durationHrs: '2.5 – 3 hrs',
    intro:
      'The Vadodara to Surat cab route connects Baroda\'s industrial and university hub with the Diamond City and textile trading centre. This is a high-frequency business corridor used by diamond industry professionals, textile buyers visiting Surat\'s wholesale markets, and university students. The NH 48 between Vadodara and Surat is generally well-maintained, and traffic is predictable outside the Surat city approach zone.',
    whyChoose: [
      'Pickup from Vadodara Railway Station, Airport (BDQ) or any Vadodara address',
      'Drop to Surat Ring Road, Diamond Bourse, Katargam or Surat Airport (STV)',
      'Fixed fare confirmed before travel — no surprise additions',
      'Ertiga for diamond traders with sample cases and extra luggage',
    ],
    notes: [
      'Route runs via NH 48 with Bharuch bypass',
      'Surat city entry on Ring Road is congested during daytime peak hours',
      'Bharuch bridge toll applies on this route',
      'Surat Airport (STV) is well south of city centre — allow extra time for airport drops',
    ],
    bestFor: [
      'Diamond and textile trade professionals travelling between Vadodara and Surat',
      'Students and faculty between MSU Vadodara and Surat University',
      'Business executives visiting Surat GIDC and Hazira LNG from Vadodara',
      'Passengers connecting Surat rail with Vadodara airport',
    ],
    faqs: [
      {
        question: 'How long is the Vadodara to Surat cab journey?',
        answer:
          'Approximately 2.5 to 3 hours for the 155 km route. Surat city entry can add 20–40 minutes during peak hours.',
      },
      {
        question: 'Is a cab from Vadodara to Surat Diamond Bourse available?',
        answer:
          'Yes. The Surat Diamond Bourse (SDB) in Varachha/Khajod area is one of our frequent drop points from Vadodara.',
      },
    ],
    relatedSlugs: [
      'surat-to-vadodara',
      'vadodara-to-ahmedabad',
      'surat-to-mumbai',
      'bhavnagar-to-surat',
      'bhavnagar-to-vadodara',
      'ahmedabad-to-vadodara',
    ],
  },
  {
    slug: 'surat-to-vadodara',
    from: 'Surat',
    to: 'Vadodara',
    distanceKm: 155, // TODO: verify
    durationHrs: '2.5 – 3 hrs',
    intro:
      'Returning from Surat to Vadodara after business meetings, diamond trading or family visits is straightforward with Velora Cabs. We pick you up from any Surat location and deliver you to any Vadodara address — including the airport (BDQ) for connecting domestic flights.',
    whyChoose: [
      'Pickup from Surat Railway Station, Surat Airport (STV), Ring Road or any Surat area',
      'Drop to Vadodara Airport, Vadodara Station or any city address',
      'Fixed fare on WhatsApp before departure',
      '24x7 availability including late-night post-market departures',
    ],
    notes: [
      'Surat exit via Udhna/Katargam is slow during morning peak',
      'NH 48 after Bharuch is generally clear — steady progress to Vadodara',
    ],
    bestFor: [
      'Diamond and textile professionals returning from Surat to Vadodara',
      'Passengers catching Vadodara Airport (BDQ) domestic flights after Surat business',
      'Families returning from Surat after weekend visits',
    ],
    faqs: [
      {
        question: 'What is the best time to travel from Surat to Vadodara by cab?',
        answer:
          'Departing Surat before 8 AM or between 11 AM and 3 PM avoids peak Ring Road and Bharuch bridge congestion.',
      },
    ],
    relatedSlugs: [
      'vadodara-to-surat',
      'surat-to-mumbai',
      'bhavnagar-to-surat',
      'ahmedabad-to-vadodara',
      'bhavnagar-to-vadodara',
      'vapi-to-mumbai',
    ],
  },

  // ─── Surat ↔ Mumbai ───────────────────────────────────────────────────────
  {
    slug: 'surat-to-mumbai',
    from: 'Surat',
    to: 'Mumbai',
    distanceKm: 280, // TODO: verify
    durationHrs: '4.5 – 5.5 hrs',
    intro:
      'Surat to Mumbai is one of the busiest inter-state highway routes in western India. Diamond exporters, textile industry professionals, Bollywood aspirants and families traversing the Gujarat–Maharashtra border make this journey constantly. Velora Cabs provides a smooth, AC ride on NH 48 — passing through Valsad, Vapi and Vasai before entering Mumbai — with experienced drivers who manage the Mumbai approach traffic efficiently.',
    whyChoose: [
      'Pickup from Surat Railway Station, Ring Road, Surat Airport (STV) or Diamond Bourse',
      'Drop to Mumbai Airport CSIA T1/T2, Andheri, Borivali, Thane, Navi Mumbai or BKC',
      'Experienced Mumbai-approach drivers — know WEH, EEH and Vasai routes',
      'Fixed fare confirmed before travel — corporate billing friendly',
    ],
    notes: [
      'Route runs via NH 48 through Valsad, Vapi, Silvassa and Vasai',
      'Mumbai entry via Western Express Highway is typical; Eastern Freeway for eastern suburbs',
      'Mumbai CSIA T1 and T2 are different terminals — confirm your terminal when booking',
      'Toll charges at multiple points between Surat and Mumbai — applicable and payable',
    ],
    bestFor: [
      'Diamond and textile exporters with Mumbai SEEPZ and BKC meetings',
      'Surat residents visiting family in Mumbai suburbs',
      'Passengers needing Mumbai Airport drop for international flights',
      'Corporate teams for regular Surat–Mumbai business commute',
    ],
    faqs: [
      {
        question: 'How long is a Surat to Mumbai cab journey?',
        answer:
          'Approximately 4.5 to 5.5 hours for 280 km. Mumbai approach traffic from Vasai to your destination adds variable time — allow extra buffer for airport drops.',
      },
      {
        question: 'Can I stop at Vapi between Surat and Mumbai?',
        answer:
          'Yes. Brief Vapi stops for business or passenger pickup can be arranged — mention this when booking.',
      },
      {
        question: 'Is a night cab from Surat to Mumbai available?',
        answer:
          'Yes. Overnight departures from Surat around 11 PM–midnight are popular, reaching Mumbai early morning. Our drivers are experienced on this overnight route.',
      },
    ],
    relatedSlugs: [
      'mumbai-to-surat',
      'vapi-to-mumbai',
      'bhavnagar-to-mumbai',
      'vadodara-to-surat',
      'surat-to-vadodara',
      'bhavnagar-to-surat',
    ],
  },
  {
    slug: 'mumbai-to-surat',
    from: 'Mumbai',
    to: 'Surat',
    distanceKm: 280, // TODO: verify
    durationHrs: '4.5 – 5.5 hrs',
    intro:
      'Heading from Mumbai to Surat for diamond trade, textile business or a family visit? Velora Cabs picks you up from any Mumbai location — including the airport (CSIA), Andheri, Borivali or BKC — and drives you directly to Surat via NH 48. The reverse journey benefits from clear highway stretches after Vasai and delivers you to Surat\'s Ring Road, Diamond Bourse or any other address.',
    whyChoose: [
      'Pickup from Mumbai Airport CSIA T1/T2, Andheri, Bandra or any Mumbai suburb',
      'Drop to Surat Ring Road, Katargam, Diamond Bourse or Hazira LNG area',
      'Fixed fare confirmed on WhatsApp before departure',
      '24x7 availability including post-midnight Mumbai departures',
    ],
    notes: [
      'Mumbai exit on WEH towards Vasai is slow during morning peak (7–10 AM)',
      'Departing Mumbai after 10 AM or post 10 PM gives clearest highway access',
      'NH 48 after Vasai is generally smooth through Vapi and Valsad to Surat',
    ],
    bestFor: [
      'Diamond and textile traders returning to Surat from Mumbai markets',
      'Passengers arriving at Mumbai Airport and heading to Surat',
      'Families visiting Surat after Mumbai stays',
      'Corporate staff with regular Mumbai–Surat project commitments',
    ],
    faqs: [
      {
        question: 'What is the best departure time from Mumbai to Surat by cab?',
        answer:
          'Departing Mumbai after 10 PM or before 6 AM avoids the worst WEH and highway approach traffic, giving clear run to Surat.',
      },
    ],
    relatedSlugs: [
      'surat-to-mumbai',
      'vapi-to-mumbai',
      'bhavnagar-to-mumbai',
      'bhavnagar-to-surat',
      'vadodara-to-surat',
      'surat-to-vadodara',
    ],
  },

  // ─── Vapi ↔ Mumbai ────────────────────────────────────────────────────────
  {
    slug: 'vapi-to-mumbai',
    from: 'Vapi',
    to: 'Mumbai',
    distanceKm: 185, // TODO: verify
    durationHrs: '3.5 – 4.5 hrs',
    intro:
      'Vapi is Gujarat\'s southernmost major industrial city, home to one of Asia\'s largest chemical and GIDC industrial estates. The Vapi to Mumbai cab route is among the most frequently booked industrial commuter routes — GIDC professionals, Daman resort guests and pharmaceutical industry executives use it to access Mumbai for meetings, flights or weekend returns. Velora Cabs covers this corridor with experienced Mumbai-approach drivers.',
    whyChoose: [
      'Pickup from Vapi GIDC, Vapi Railway Station or any Vapi/Valsad address',
      'Drop to Mumbai Airport CSIA T1/T2, Andheri, Borivali, Thane or BKC',
      'Fast route — under 4 hours in off-peak conditions via NH 48 and Vasai',
      'Fixed fare before travel — ideal for corporate daily billing',
    ],
    notes: [
      'Route runs via NH 48 through Silvassa, Vasai and into Mumbai via WEH',
      'Vasai/Virar area has consistent morning and evening peak congestion',
      'Mumbai CSIA is at Andheri — one of the closest Mumbai destinations for Vapi travellers',
      'Daman can be included as a pickup/drop point on request',
    ],
    bestFor: [
      'Vapi GIDC industrial professionals with Mumbai corporate meetings',
      'Pharmaceutical and chemical industry executives',
      'Mumbai Airport drop for Vapi-based travellers catching flights',
      'Daman tourists connecting back to Mumbai by road',
    ],
    faqs: [
      {
        question: 'How long is the Vapi to Mumbai cab journey?',
        answer:
          'Approximately 3.5 to 4.5 hours for the 185 km route. Mumbai approach from Vasai can add significant time during peak hours.',
      },
      {
        question: 'Can I be picked up at Vapi Railway Station for a Mumbai cab?',
        answer:
          'Yes. We pick up from Vapi Junction (Western Railway) and drop to any Mumbai or suburban destination.',
      },
      {
        question: 'Is a Daman to Mumbai cab available through Velora Cabs?',
        answer:
          'Yes. We include Daman pickup on the Vapi–Mumbai route. Mention Daman as your origin when booking.',
      },
    ],
    relatedSlugs: [
      'mumbai-to-vapi',
      'vapi-to-daman',
      'surat-to-mumbai',
      'bhavnagar-to-mumbai',
      'mumbai-to-surat',
      'surat-to-vadodara',
    ],
  },
  {
    slug: 'mumbai-to-vapi',
    from: 'Mumbai',
    to: 'Vapi',
    distanceKm: 185, // TODO: verify
    durationHrs: '3.5 – 4.5 hrs',
    intro:
      'Returning from Mumbai to Vapi GIDC or onwards to Daman after Mumbai business or airport arrivals is convenient with Velora Cabs. We pick you up from CSIA airport, Andheri, Borivali or any Mumbai suburb and drive you directly to Vapi industrial area or the Daman border.',
    whyChoose: [
      'Pickup from Mumbai Airport (CSIA T1/T2) or any Mumbai zone',
      'Drop to Vapi GIDC, Vapi Railway Station or Daman resort/hotel',
      'Fixed fare confirmed before departure',
      'Overnight travel option for post-meeting returns',
    ],
    notes: [
      'Mumbai exit on WEH towards Vasai is slow mornings',
      'After Vasai the highway clears significantly — good progress to Vapi',
      'Daman is approximately 12 km west of Vapi on the coast',
    ],
    bestFor: [
      'GIDC professionals returning after Mumbai meetings',
      'Daman resort guests arriving via Mumbai Airport',
      'Pharmaceutical company teams returning from Mumbai HQ to Vapi plants',
    ],
    faqs: [
      {
        question: 'Can I get a cab from Mumbai Airport to Vapi GIDC?',
        answer:
          'Yes. Airport pickup from CSIA and direct drop to Vapi GIDC is one of our regular routes.',
      },
    ],
    relatedSlugs: [
      'vapi-to-mumbai',
      'vapi-to-daman',
      'surat-to-mumbai',
      'mumbai-to-surat',
      'bhavnagar-to-mumbai',
      'bhavnagar-to-surat',
    ],
  },

  // ─── Vapi ↔ Daman ─────────────────────────────────────────────────────────
  {
    slug: 'vapi-to-daman',
    from: 'Vapi',
    to: 'Daman',
    distanceKm: 12, // TODO: verify
    durationHrs: '20 – 30 mins',
    intro:
      'Daman is a Union Territory coastal town approximately 12 km from Vapi, popular for resorts, beaches and duty-free shopping. The short Vapi to Daman cab ride is booked daily by weekend travellers from Gujarat, corporate resort guests and pharmaceutical industry professionals. Velora Cabs connects Vapi Railway Station and GIDC directly to Daman\'s Devka Beach, Nani Daman and Moti Daman resort zones.',
    whyChoose: [
      'Quick 20–30 minute ride from Vapi Junction or GIDC to Daman',
      'Drop at Devka Beach, Nani Daman jetty, Moti Daman fort or any Daman resort',
      'Fixed fare — short route, no surprise charges',
      'Return cab from Daman to Vapi also available',
    ],
    notes: [
      'The Daman–Vapi crossing involves the Gujarat–Daman border',
      'Daman roads near Devka are narrow — driver familiar with local navigation',
      'Resort check-in is typically afternoon; plan arrival time accordingly',
    ],
    bestFor: [
      'Weekend resort guests visiting Daman from Vapi Railway Station',
      'Corporate team outings from Vapi GIDC to Daman',
      'Families arriving at Vapi by train for a Daman beach break',
      'Day visitors to Daman fort and lighthouse from Vapi',
    ],
    faqs: [
      {
        question: 'How far is Daman from Vapi by cab?',
        answer:
          'Approximately 12 km — a 20 to 30 minute ride depending on the crossing at the Daman border checkpoint.',
      },
      {
        question: 'Can I book a cab from Vapi Station directly to a Daman resort?',
        answer:
          'Yes. We pick up from Vapi Junction and drop to any Daman resort, hotel or address in Nani or Moti Daman.',
      },
    ],
    relatedSlugs: [
      'daman-to-vapi',
      'vapi-to-mumbai',
      'mumbai-to-vapi',
      'surat-to-mumbai',
      'bhavnagar-to-surat',
      'bhavnagar-to-mumbai',
    ],
  },
  {
    slug: 'daman-to-vapi',
    from: 'Daman',
    to: 'Vapi',
    distanceKm: 12, // TODO: verify
    durationHrs: '20 – 30 mins',
    intro:
      'After a relaxing Daman resort stay or a day at Devka Beach, the quick cab ride back to Vapi Railway Station ensures smooth onward connections by train to Surat, Vadodara, Ahmedabad or Mumbai. Velora Cabs picks up from anywhere in Daman — Nani Daman, Moti Daman or Devka — and drops you at Vapi Junction or Vapi GIDC.',
    whyChoose: [
      'Pickup from any Daman hotel, resort or address',
      'Drop to Vapi Junction for train connections',
      'Short, fixed fare ride — no negotiation required',
      'Early morning pickups for catching the first trains from Vapi',
    ],
    notes: [
      'Daman–Vapi border can occasionally have brief checks — carry ID',
      'Vapi Junction (Western Railway) has trains to Mumbai, Surat, Vadodara and Ahmedabad',
    ],
    bestFor: [
      'Resort guests returning to Vapi for train departure',
      'Corporate team outings returning to Vapi GIDC',
      'Day trippers heading back from Daman to Vapi for evening trains',
    ],
    faqs: [
      {
        question: 'Can I book an early morning cab from Daman to Vapi Station?',
        answer:
          'Yes. Early morning bookings are available for catching early trains from Vapi Junction. Book the previous evening.',
      },
    ],
    relatedSlugs: [
      'vapi-to-daman',
      'vapi-to-mumbai',
      'surat-to-mumbai',
      'mumbai-to-vapi',
      'bhavnagar-to-surat',
      'bhavnagar-to-mumbai',
    ],
  },

  // ─── Gandhidham ↔ Bhuj ────────────────────────────────────────────────────
  {
    slug: 'gandhidham-to-bhuj',
    from: 'Gandhidham',
    to: 'Bhuj',
    distanceKm: 60, // TODO: verify
    durationHrs: '1 – 1.5 hrs',
    intro:
      'Gandhidham and Bhuj are the twin economic and cultural centres of Kutch district. Gandhidham hosts Kandla Port (now Deendayal Port), one of India\'s largest container ports, and the Gandhidham railway junction — a major freight hub. The quick Gandhidham to Bhuj cab ride connects port and customs professionals with Bhuj city\'s administrative, tourism and commercial facilities. Velora Cabs covers this short but high-frequency corridor efficiently.',
    whyChoose: [
      'Pickup from Gandhidham Railway Station, Kandla Port gate or Gandhidham city',
      'Drop to Bhuj city centre, Bhuj Airport (BHJ), or any Bhuj address',
      'Flat fixed fare for this short route',
      '24x7 service for port and customs shift workers',
    ],
    notes: [
      'Route runs via NH 341 between Gandhidham and Bhuj — generally smooth',
      'Kandla Port area has security gates — driver waits at the designated exit point',
      'Bhuj Airport (BHJ) has limited domestic flights — confirm flight availability',
    ],
    bestFor: [
      'Kandla Port customs, shipping and logistics professionals',
      'Bhuj tourists arriving at Gandhidham Railway Station',
      'Administrative professionals between Bhuj district HQ and Gandhidham',
      'Rann of Kutch tourists using Gandhidham as a train arrival point',
    ],
    faqs: [
      {
        question: 'How far is Gandhidham from Bhuj by cab?',
        answer:
          'Approximately 60 km — a 1 to 1.5 hour cab ride via NH 341.',
      },
      {
        question: 'Can I get a cab from Kandla Port to Bhuj?',
        answer:
          'Yes. Kandla Port (Deendayal Port) is within Gandhidham. We pick up from the port gate and drive to any Bhuj address.',
      },
      {
        question: 'Is a Gandhidham to Bhuj Airport cab available?',
        answer:
          'Yes. We drop to Bhuj Airport (BHJ) terminal. Mention your flight time when booking.',
      },
    ],
    relatedSlugs: [
      'bhuj-to-gandhidham',
      'bhavnagar-to-bhuj',
      'ahmedabad-to-bhuj',
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-amreli',
      'bhavnagar-to-surat',
    ],
  },
  {
    slug: 'bhuj-to-gandhidham',
    from: 'Bhuj',
    to: 'Gandhidham',
    distanceKm: 60, // TODO: verify
    durationHrs: '1 – 1.5 hrs',
    intro:
      'From Bhuj city — after heritage visits, administrative work or Rann of Kutch tourism — the quick cab to Gandhidham provides access to Kandla Port, Gandhidham Railway Station and the NH 48 corridor for onward travel. Velora Cabs makes this short intra-Kutch journey smooth and punctual.',
    whyChoose: [
      'Pickup from Bhuj city centre, Bhuj Airport (BHJ) or any Bhuj address',
      'Drop to Gandhidham Railway Station, Kandla Port gate or any Gandhidham address',
      'Fixed, pre-confirmed fare',
      '24x7 service for port shift and train connections',
    ],
    notes: [
      'NH 341 between Bhuj and Gandhidham is generally well-maintained',
      'Gandhidham Railway Station has trains to Mumbai, Ahmedabad and other major cities',
      'Kandla Port has its own access road — coordinate drop point when booking',
    ],
    bestFor: [
      'Bhuj tourists heading to Gandhidham for onward train to Ahmedabad or Mumbai',
      'Port professionals returning from Bhuj administrative work to Kandla',
      'Kutch residents commuting between the two district centres',
    ],
    faqs: [
      {
        question: 'Can I book a cab from Bhuj to Gandhidham Railway Station?',
        answer:
          'Yes. We drop directly to Gandhidham Junction for your train connection.',
      },
    ],
    relatedSlugs: [
      'gandhidham-to-bhuj',
      'bhavnagar-to-bhuj',
      'bhavnagar-to-ahmedabad',
      'bhavnagar-to-surat',
      'bhavnagar-to-amreli',
      'ahmedabad-to-dholera',
    ],
  },

  // ─── Ahmedabad ↔ Dahej ────────────────────────────────────────────────────
  {
    slug: 'ahmedabad-to-dahej',
    from: 'Ahmedabad',
    to: 'Dahej',
    distanceKm: 165, // TODO: verify
    durationHrs: '2.5 – 3 hrs',
    intro:
      'Dahej, on the Gulf of Khambhat coast in Bharuch district, is home to one of India\'s most significant industrial clusters — Dahej SEZ, Dahej Petroleum Complex, ONGC Dahej terminal, and the Dahej LNG Import Terminal. The Ahmedabad to Dahej cab route is extensively used by corporate executives, government officials, plant engineers and port logistics professionals who fly into Ahmedabad and need to reach Dahej quickly. Velora Cabs provides punctual, professional cab service on this industrial corridor.',
    whyChoose: [
      'Pickup from Ahmedabad Airport (AMD), SG Road, Prahlad Nagar or any Ahmedabad zone',
      'Drop to Dahej SEZ gate, ONGC terminal, LNG terminal or Dahej jetty area',
      'Early morning departures for 6 AM plant reporting — book night before',
      'Fixed fare suitable for corporate travel desk and expense reporting',
      'Ertiga for teams of 4–6 with equipment or document bags',
    ],
    notes: [
      'Route runs via Anand/Nadiad or directly via Bharuch to reach Dahej',
      'Bharuch bridge traffic adds time during peak hours',
      'Dahej SEZ and plant zones have security gates — carry valid ID and work pass',
      'Limited food and fuel options near Dahej — stop at Bharuch if needed',
    ],
    bestFor: [
      'Corporate executives flying into Ahmedabad for Dahej plant visits',
      'ONGC and petroleum company officials visiting Dahej terminal',
      'LNG industry professionals and project teams',
      'Government GIDC officials conducting Dahej SEZ inspections',
    ],
    faqs: [
      {
        question: 'How long is the Ahmedabad to Dahej cab journey?',
        answer:
          'Approximately 2.5 to 3 hours covering 165 km via Bharuch. Bharuch bridge and approach traffic can add 20–30 minutes during peak hours.',
      },
      {
        question: 'Is a cab from Ahmedabad Airport to Dahej available?',
        answer:
          'Yes. We pick up from AMD arrivals and drive directly to the Dahej SEZ or ONGC terminal — a common corporate airport-to-site route.',
      },
      {
        question: 'Can I combine Bharuch with a Dahej visit from Ahmedabad?',
        answer:
          'Yes. We can stop at Bharuch city for a brief meeting and then continue to Dahej. Mention this when booking so the driver plans the route and timing.',
      },
    ],
    relatedSlugs: [
      'dahej-to-ahmedabad',
      'bhavnagar-to-dahej',
      'ahmedabad-to-vadodara',
      'ahmedabad-to-dholera',
      'bhavnagar-to-bharuch',
      'ahmedabad-to-bhavnagar',
    ],
  },
  {
    slug: 'dahej-to-ahmedabad',
    from: 'Dahej',
    to: 'Ahmedabad',
    distanceKm: 165, // TODO: verify
    durationHrs: '2.5 – 3 hrs',
    intro:
      'After completing plant visits, inspection work or business meetings at Dahej SEZ or ONGC Terminal, professionals need a reliable cab back to Ahmedabad for their return flight or hotel. Velora Cabs picks up from Dahej plant gates and delivers you to AMD airport, Ahmedabad hotels or any city address — in a clean AC vehicle, on time, every time.',
    whyChoose: [
      'Pickup from Dahej SEZ gate, ONGC terminal or LNG facility entrance',
      'Drop to Ahmedabad Airport (AMD), SG Road, Navrangpura or any Ahmedabad zone',
      'Fare confirmed before pickup — no surprises when you are tired after a long plant day',
      '24x7 availability for post-shift and late-night departures from Dahej',
    ],
    notes: [
      'Coordinate pickup time with plant shift-end or security exit',
      'Evening Bharuch bridge congestion (5–8 PM) can affect arrival in Ahmedabad',
      'Ahmedabad city entry near Sarkhej can be slow during rush hour',
    ],
    bestFor: [
      'Plant engineers returning from Dahej shifts to Ahmedabad airport for evening flights',
      'Government officials completing Dahej SEZ inspection tours',
      'Corporate executives returning from Dahej to Ahmedabad for hotel/flight',
    ],
    faqs: [
      {
        question: 'Can I get a cab from Dahej to Ahmedabad Airport for an evening flight?',
        answer:
          'Yes. Share your flight time and we will plan the Dahej departure to ensure you reach AMD with adequate buffer, factoring in Bharuch bridge traffic.',
      },
    ],
    relatedSlugs: [
      'ahmedabad-to-dahej',
      'bhavnagar-to-dahej',
      'ahmedabad-to-vadodara',
      'bhavnagar-to-bharuch',
      'ahmedabad-to-bhavnagar',
      'ahmedabad-to-dholera',
    ],
  },
];

// Helper: get route by slug
export function getRouteBySlug(slug: string): RouteData | undefined {
  return ROUTES.find((r) => r.slug === slug);
}

// Helper: get all slugs for generateStaticParams
export function getAllRouteSlugs(): { slug: string }[] {
  return ROUTES.map((r) => ({ slug: r.slug }));
}

// Helper: get related routes for a given slug (up to 6)
export function getRelatedRoutes(slug: string): RouteData[] {
  const route = getRouteBySlug(slug);
  if (!route) return [];
  return route.relatedSlugs
    .map((s) => getRouteBySlug(s))
    .filter((r): r is RouteData => !!r)
    .slice(0, 6);
}

// Helper: get routes grouped by origin city
export function getRoutesGroupedByOrigin(): Record<string, RouteData[]> {
  return ROUTES.reduce(
    (acc, route) => {
      if (!acc[route.from]) acc[route.from] = [];
      acc[route.from].push(route);
      return acc;
    },
    {} as Record<string, RouteData[]>
  );
}
