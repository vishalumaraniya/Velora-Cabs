// Single source of truth for FAQ data
// Used by: homepage FAQ section, /faq page, and individual route/city pages
// Strictly adheres to Section 7 and Section 0.7 of SEO Master Prompt

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

// 8 FAQs for the homepage - exact 8 questions from Section 7 with 40-70 words per answer
export const homeFaqs: FaqItem[] = [
  {
    question: 'How do I book a cab in Bhavnagar?',
    answer:
      'Booking a cab in Bhavnagar with Velora Cabs is quick and straightforward. Simply share your pickup location, drop destination, journey date, and preferred vehicle via WhatsApp at +91 87803 11279 or call our dispatch desk. We provide a confirmed upfront quote immediately and assign an experienced, verified local driver directly to your doorstep.',
  },
  {
    question: 'Do you offer one-way outstation taxis?',
    answer:
      'Yes, we provide dedicated one-way outstation taxi services from Bhavnagar across Gujarat, Mumbai, and neighboring regions. With one-way cab bookings, you pay solely for the distance traveled to your destination, completely eliminating reverse return charges. We provide comfortable AC sedans, family MUVs, and ensure doorstep pickup at your scheduled departure time.',
  },
  {
    question: 'Is there airport pickup and drop?',
    answer:
      'Yes, Velora Cabs provides reliable airport transfer services connecting Bhavnagar with Ahmedabad Airport (SVPI), Mumbai International Airport (BOM), Surat, and Vadodara airports. Our drivers prioritize punctuality, coordinate with your arrival schedules, and assist with your luggage, ensuring a stress-free transition between your doorstep and the terminal.',
  },
  {
    question: 'Which cities do you serve?',
    answer:
      'Our base of operations is Bhavnagar, with active daily outstation connections to Ahmedabad, Vadodara, Surat, Mumbai, Bharuch, Dahej, Vapi, Daman, Dholera, Bhuj, Gandhidham, Amreli, and Palitana. Whether you need an industrial transit to Dahej or a family pilgrimage to Palitana Shatrunjaya, our cab network covers all key Gujarat corridors.',
  },
  {
    question: 'Are your drivers verified?',
    answer:
      'Every Velora Cabs chauffeur undergoes thorough document verification, license validation, and background screening before being onboarded. Our drivers are seasoned highway experts familiar with Gujarat and Mumbai routes, committed to defensive driving, passenger comfort, polite conduct, and on-time departures for every journey.',
  },
  {
    question: 'How is the fare calculated?',
    answer:
      'Fares are calculated based on your total route distance, vehicle category (Sedan, MUV, or Tempo Traveller), and journey type (one-way or round-trip). We share a transparent, fixed quote upfront via WhatsApp before your ride is confirmed. Additional route-specific details like tolls or parking are clarified in advance so there are never surprises.',
  },
  {
    question: 'Can I book a Tempo Traveller for a group or pilgrimage?',
    answer:
      'Yes, we offer spacious, fully air-conditioned Tempo Travellers accommodating 12 to 17 passengers, ideal for family vacations, corporate delegations, and religious pilgrimages such as the Shatrunjaya Tirth in Palitana or Somnath-Dwarka tours. Each vehicle provides ample luggage storage, pushback seating, and seasoned highway chauffeurs accustomed to group itineraries.',
  },
  {
    question: 'Is the service available 24x7?',
    answer:
      'Velora Cabs operates round-the-clock dispatch to accommodate early morning airport flights, late-night train arrivals, and urgent emergency travel. You can message or call our support team any time at +91 87803 11279 to schedule an immediate cab or pre-book your journey in advance.',
  },
];

// Full FAQ grouped by category — for /faq page (Section 10)
export const generalFaqs: FaqGroup[] = [
  {
    category: 'Booking & Reservations',
    items: [
      {
        question: 'How do I book a cab with Velora Cabs?',
        answer:
          'Send your journey details — pickup location, drop location, date, time and number of passengers — via WhatsApp to +91 87803 11279 or call us directly. We will confirm your vehicle availability and fixed quote promptly.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'We recommend booking at least 2–4 hours in advance for outstation trips and 30–60 minutes for local city rides. For early morning airport drops (before 6 AM), booking the evening prior is recommended.',
      },
      {
        question: 'Can I book by phone call instead of WhatsApp?',
        answer:
          'Yes. Call us on +91 87803 11279 any time. Our dispatch team will note your travel itinerary and confirm booking arrangements directly over the call.',
      },
      {
        question: 'Is online advance payment mandatory?',
        answer:
          'No advance payment is needed to initiate an inquiry. Fare details are confirmed before your trip begins. Payment terms can be settled directly with your booking coordinator.',
      },
    ],
  },
  {
    category: 'Outstation Travel',
    items: [
      {
        question: 'Which cities does Velora Cabs serve for outstation trips?',
        answer:
          'We connect 14 primary destinations across Gujarat and Mumbai: Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli, and Palitana, with customized outstation drops on request.',
      },
      {
        question: 'Do you offer one-way outstation trips without return charges?',
        answer:
          'Yes. Dedicated one-way outstation cabs are available across all primary routes. You pay only for your one-way travel, with zero reverse empty return charges.',
      },
      {
        question: 'Can the driver stay overnight for a multi-day itinerary?',
        answer:
          'Yes, multi-day outstation packages are available for family holidays and business visits. Driver allowance terms are communicated transparently before your journey starts.',
      },
      {
        question: 'Are comfort stops allowed during long-distance highway travel?',
        answer:
          'Yes. You can request brief refreshment stops or meal breaks at clean highway restaurants along your route. Simply coordinate with your driver.',
      },
    ],
  },
  {
    category: 'Airport Transfers',
    items: [
      {
        question: 'Which airports are covered by your taxi service?',
        answer:
          'We provide airport transfers for Ahmedabad (SVPI Airport / AMD), Mumbai (BOM / CSIA), Surat Airport (STV), Vadodara Airport, Bhavnagar Airport, and Bhuj Airport.',
      },
      {
        question: 'How do you coordinate airport pickups for delayed flights?',
        answer:
          'Our team tracks public flight arrival status to align pickup times with flight delays, ensuring your chauffeur is ready when you exit terminal arrivals.',
      },
      {
        question: 'Do chauffeurs assist with heavy luggage at the airport?',
        answer:
          'Yes. Our chauffeurs assist passengers with loading and unloading luggage at terminal curbsides and home doorsteps.',
      },
    ],
  },
  {
    category: 'Fleet & Safety Standards',
    items: [
      {
        question: 'What vehicles are available in the Velora Cabs fleet?',
        answer:
          'We operate Maruti Swift Dzire (AC sedan for up to 4 passengers), Maruti Suzuki Ertiga (AC MUV for up to 6 passengers), and Tempo Traveller (AC vehicle for 12 to 17 passengers).',
      },
      {
        question: 'Are all vehicles air-conditioned and cleaned?',
        answer:
          'Yes. Every cab in our fleet features functioning air conditioning and is cleaned and inspected prior to reporting for your trip.',
      },
      {
        question: 'What background checks are conducted on drivers?',
        answer:
          'All drivers undergo comprehensive identity verification, commercial driving license checks, and background screening, with extensive experience on Gujarat highways.',
      },
      {
        question: 'Are vehicles equipped with GPS tracking?',
        answer:
          'Yes. Our fleet utilizes GPS-enabled tracking for enhanced navigational accuracy, safety monitoring, and driver route adherence.',
      },
    ],
  },
  {
    category: 'Fares & Booking Policies',
    items: [
      {
        question: 'How are fares determined for outstation trips?',
        answer:
          'Fares are determined by total trip distance, duration, and chosen vehicle category. All quotes are confirmed upfront before you book.',
      },
      {
        question: 'Are toll and parking charges included in the fare?',
        answer:
          'Toll taxes, state entry permits, and airport parking fees depend on your specific route and booking package. Please confirm exact inclusions with our team before booking.',
      },
      {
        question: 'What is the trip cancellation policy?',
        answer:
          'We offer flexible scheduling. If your travel plans change, please notify our dispatch team on WhatsApp as early as possible so we can adjust or cancel your reservation smoothly.',
      },
      {
        question: 'Can I obtain a GST invoice for business travel?',
        answer:
          'Yes, GST invoices can be provided for corporate and business travel. Please request a tax invoice with your company GSTIN when booking.',
      },
    ],
  },
];
