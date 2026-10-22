// Single source of truth for FAQ data
// Used by: homepage FAQ section, /faq page, and individual route/city pages

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

// 8 FAQs for the homepage
export const homeFaqs: FaqItem[] = [
  {
    question: 'How do I book a Velora Cabs cab?',
    answer:
      'You can book a cab in three easy steps: share your trip details (pickup, drop, date, time) via WhatsApp on +91 87803 11279 or call us directly. We confirm your fare before booking is finalised. Your verified driver arrives at your doorstep at the scheduled time.',
  },
  {
    question: 'Do you offer one-way and round-trip outstation cabs?',
    answer:
      'Yes. We offer both one-way and round-trip outstation cab services across Gujarat and to Mumbai. For a one-way trip you pay only for the distance travelled. For round trips, the return journey is included in the quote we share upfront.',
  },
  {
    question: 'Are cabs available for night or early morning travel?',
    answer:
      'Absolutely. Velora Cabs operates 24 hours a day, 7 days a week. Whether you have an early morning flight at 4 AM or a late-night return from Mumbai, just call or WhatsApp us and we will arrange your cab promptly.',
  },
  {
    question: 'Do you handle airport pickup and drop?',
    answer:
      'Yes. We provide airport pickup and drop services at Ahmedabad (SVPI), Vadodara, Surat, Bhavnagar, Mumbai (BOM / CSIA), and Bhuj airports. Our drivers track your flight and aim to be at arrivals before you collect your luggage.',
  },
  {
    question: 'Which vehicles are available?',
    answer:
      'We operate three vehicle categories: Maruti Swift Dzire (AC sedan, up to 4 passengers), Maruti Suzuki Ertiga (AC family MUV, up to 6 passengers), and Tempo Traveller (AC group vehicle, up to 15 passengers). All vehicles are clean and regularly sanitised.',
  },
  {
    question: 'How is the fare decided?',
    answer:
      'We share your fare confirmation on WhatsApp or call before you confirm the booking — no surprises at the end of the trip. Fares are based on distance and vehicle type. Get a free quote in minutes by messaging us your trip details.',
  },
  {
    question: 'Are tolls and parking charges extra?',
    answer:
      // TODO: owner to confirm toll/parking policy
      'TODO: owner to confirm — please verify the actual toll and parking policy and update this answer.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      // TODO: owner to confirm cancellation policy
      'TODO: owner to confirm — please review and update the cancellation policy. See /cancellation-policy for the draft.',
  },
];

// Full FAQ grouped by category — for /faq page
export const generalFaqs: FaqGroup[] = [
  {
    category: 'Booking',
    items: [
      {
        question: 'How do I book a cab with Velora Cabs?',
        answer:
          'Send your trip details — pickup location, drop location, date, time and number of passengers — on WhatsApp to +91 87803 11279 or call us. We will confirm fare and cab within minutes.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'We recommend booking at least 2–4 hours in advance for outstation trips and 30–60 minutes for local city rides. For early morning airport drops (before 6 AM), booking the night before is ideal.',
      },
      {
        question: 'Can I book by phone call instead of WhatsApp?',
        answer:
          'Yes. Call us on +91 87803 11279 any time of day or night. Our team will take your details and confirm the booking over the call.',
      },
      {
        question: 'Is online payment required at the time of booking?',
        answer:
          'No advance online payment is required to confirm a booking. Fare details are shared and confirmed before the trip begins. For payment terms, please confirm directly when booking.',
      },
    ],
  },
  {
    category: 'Outstation',
    items: [
      {
        question: 'Which cities does Velora Cabs serve for outstation trips?',
        answer:
          'We cover 14 cities across Gujarat and Mumbai: Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli and Palitana, plus many more on request.',
      },
      {
        question: 'Do you offer one-way outstation trips?',
        answer:
          'Yes. One-way outstation cabs are available on all our major routes. You pay only for the trip from your origin to your destination — no return-fare charges.',
      },
      {
        question: 'Can the driver stay overnight for a multi-day trip?',
        answer:
          'Yes, multi-day outstation trips are available. Driver accommodation on outstation nights is typically the customer\'s responsibility; please confirm specifics when booking.',
      },
      {
        question: 'Is there a stop option during long-distance trips?',
        answer:
          'Yes. You can request short comfort stops or en-route pickups. Please mention this at the time of booking so the driver is informed.',
      },
    ],
  },
  {
    category: 'Airport',
    items: [
      {
        question: 'Which airports do you serve?',
        answer:
          'We serve Ahmedabad (SVPI Airport / AMD), Vadodara Airport, Surat Airport (STV), Bhavnagar Airport, Mumbai Chhatrapati Shivaji Maharaj International Airport (BOM / CSIA), and Bhuj Airport.',
      },
      {
        question: 'Do you track flights for airport pickups?',
        answer:
          'Our drivers monitor flight arrival information to adjust pickup time for delays, helping ensure you are not kept waiting after landing.',
      },
      {
        question: 'Can you help with luggage at the airport?',
        answer:
          'Yes. Our drivers assist with loading and unloading luggage at pickup and drop points.',
      },
    ],
  },
  {
    category: 'Vehicles & Safety',
    items: [
      {
        question: 'What vehicles are in the Velora Cabs fleet?',
        answer:
          'Maruti Swift Dzire (AC sedan, 4 passengers), Maruti Suzuki Ertiga (AC family MUV, 6 passengers), and Tempo Traveller (AC group vehicle, up to 15 passengers).',
      },
      {
        question: 'Are the vehicles air-conditioned?',
        answer:
          'Yes. All vehicles in our fleet are air-conditioned and cleaned before every ride.',
      },
      {
        question: 'Are Velora Cabs drivers verified?',
        answer:
          'Yes. Drivers are police-verified and experienced on highway and city routes.',
      },
      {
        question: 'Is GPS tracking available during the trip?',
        answer:
          'Our vehicles are GPS-equipped for route monitoring and driver accountability throughout every journey.',
      },
    ],
  },
  {
    category: 'Payments & Policies',
    items: [
      {
        question: 'How is the fare calculated?',
        answer:
          'Fare is based on distance and the vehicle category selected. Your exact fare is shared and confirmed before your trip starts — no surprise charges at the end.',
      },
      {
        question: 'Are tolls and parking included in the fare?',
        answer:
          // TODO: owner to confirm
          'TODO: owner to confirm toll and parking policy. Please update this answer before going live.',
      },
      {
        question: 'What is the cancellation policy?',
        answer:
          // TODO: owner to confirm
          'TODO: owner to confirm. See /cancellation-policy for a draft that needs legal review and owner verification.',
      },
      {
        question: 'Is GST applicable on cab fares?',
        answer:
          // TODO: owner to confirm GST applicability
          'TODO: owner to confirm whether GST is applicable and at what rate.',
      },
    ],
  },
];
