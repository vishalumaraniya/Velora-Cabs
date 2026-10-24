import { ServiceItem, RouteItem, FleetItem, TestimonialItem, VehicleModel } from '@/types';

export const BUSINESS_INFO = {
  name: 'Velora Cabs',
  tagline: 'Safe Rides. On Time. Every Time.',
  contactPerson: 'Dharmeshbhai B. Kava',
  phones: [
    { display: '+91 87803 11279', raw: '8780311279', formatted: '+918780311279' },
  ],
  whatsappNumber: '918780311279',
  email: 'veloracabs07@gmail.com',
  address: '404, Shyam Residency, Near Nari Chokdi, Vartej, Bhavnagar, Gujarat 364060, India',
  serviceAreas: ['Local City Rides', 'Airport Transfers', 'Outstation Trips', 'Gujarat & Mumbai Routes'],
  operatingHours: '24 Hours / 7 Days a Week',
  accentColor: '#30AFFF',
  darkBg: '#0B1F33',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-rides',
    title: 'Local City Rides',
    subtitle: 'Point-to-point within city limits',
    description: 'Comfortable, AC sedan rides for daily commutes, shopping trips, business meetings, and city exploration.',
    iconName: 'Car',
    // TODO: Confirm with Dharmeshbhai if GPS-monitored is defensible across all cabs
    features: ['Doorstep Pickup', 'Fixed quote on WhatsApp', 'Clean AC Sedans', 'GPS Monitored'],
    recommendedFor: 'City commuters & shopping trips',
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    subtitle: 'Punctual pickup & drop focus',
    description: 'Hassle-free airport drop and pickup with flight schedule coordination and luggage assistance.',
    iconName: 'Plane',
    features: ['Schedule Coordination', 'On-Time Focus', 'Spacious Boot for Luggage', '24x7 Availability'],
    recommendedFor: 'Travelers & corporate flyers',
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Trips',
    subtitle: 'One-way & round trips across Gujarat & Mumbai',
    description: 'Reliable outstation cab service across Gujarat and Mumbai destinations with upfront fixed quotes.',
    iconName: 'MapPin',
    features: ['One-Way & Round Trip Options', 'Experienced Highway Drivers', 'Fixed quote on WhatsApp', 'Route Guidance'],
    recommendedFor: 'Family trips & intercity travel',
  },
  {
    id: 'express-service',
    title: '24x7 Express Service',
    subtitle: 'Round-the-clock dispatch when needed',
    description: 'Emergency & late-night cab availability. Reliable driver assignment for your scheduled journey.',
    iconName: 'Clock',
    features: ['Prompt Driver Dispatch', 'Late Night Safety', 'Direct WhatsApp Quote', 'Verified Drivers'],
    recommendedFor: 'Urgent trips & late night travel',
  },
];

export const DESTINATION_CITIES = [
  'Bhavnagar',
  'Ahmedabad',
  'Vadodara',
  'Surat',
  'Bharuch',
  'Dahej',
  'Vapi',
  'Daman',
  'Dholera',
  'Mumbai',
  'Bhuj',
  'Gandhidham',
  'Amreli',
  'Palitana',
] as const;

export const POPULAR_ROUTES: RouteItem[] = [
  {
    id: 'bhavnagar-ahmedabad',
    origin: 'Bhavnagar',
    destination: 'Ahmedabad',
    distance: '~172 km',
    duration: '3 - 3.5 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Airport & Corporate Commute',
  },
  {
    id: 'bhavnagar-vadodara',
    origin: 'Bhavnagar',
    destination: 'Vadodara',
    distance: '~205 km',
    duration: '3.5 - 4 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Business & Family Travel',
  },
  {
    id: 'bhavnagar-mumbai',
    origin: 'Bhavnagar',
    destination: 'Mumbai',
    distance: '~650 km',
    duration: '11 - 12 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Interstate One-Way & Round Trip',
  },
  {
    id: 'bhavnagar-surat',
    origin: 'Bhavnagar',
    destination: 'Surat',
    distance: '~270 km',
    duration: '5.5 - 6 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Business & Diamond City Travel',
  },
  {
    id: 'bhavnagar-dahej',
    origin: 'Bhavnagar',
    destination: 'Dahej',
    distance: '~250 km',
    duration: '4.5 - 5 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Port, Industrial & Corporate Trips',
  },
  {
    id: 'bhavnagar-dholera',
    origin: 'Bhavnagar',
    destination: 'Dholera',
    distance: '~65 km',
    duration: '1 - 1.5 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Dholera SIR Business & Industrial Visits',
  },
  {
    id: 'bhavnagar-palitana',
    origin: 'Bhavnagar',
    destination: 'Palitana',
    distance: '~55 km',
    duration: '1 - 1.2 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Pilgrimage & Shatrunjaya Tirth Tour',
  },
  {
    id: 'bhavnagar-vapi',
    origin: 'Bhavnagar',
    destination: 'Vapi',
    distance: '~380 km',
    duration: '7 - 7.5 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'South Gujarat & Daman Coastal Travel',
  },
];

export const VEHICLE_OPTIONS: VehicleModel[] = [
  {
    id: 'sedan',
    name: '4 Seater',
    category: 'Sedan (Swift Dzire)',
    subtitle: 'Comfortable AC sedan for up to 4 passengers',
    ratePerKm: 11,
    passengers: 4,
    luggage: 2,
    image: '/images/velora_dzire.webp',
    badge: '1 - 4 Persons',
    features: [
      'Clean AC Cabin',
      'Comfortable 4 Seats',
      'Boot Space for 2 Bags',
      'Doorstep Pickup',
    ],
  },
  {
    id: 'ertiga',
    name: '6-7 Seater',
    category: 'Maruti Ertiga',
    subtitle: 'Spacious cab for family trips and extra luggage',
    ratePerKm: 15,
    passengers: 7,
    luggage: 4,
    image: '/images/velora_ertiga.webp',
    badge: '5 - 7 Persons',
    features: [
      'Rear AC Vents',
      'Comfortable 7 Seats',
      'Extra Boot Space',
      'Smooth Highway Ride',
    ],
  },
  {
    id: 'traveller',
    name: 'More than 7 Seats',
    category: 'Tempo Traveller',
    subtitle: 'Spacious minibus for group tours and family events',
    ratePerKm: 22,
    passengers: 15,
    luggage: 8,
    image: '/images/velora_traveller.webp',
    badge: '8+ Persons',
    features: [
      'High Roof AC Cabin',
      '8 to 15+ Passenger Seating',
      'Large Luggage Carrier',
      'Comfortable Long Trips',
    ],
  },
];

export const FLEET_CARS: FleetItem[] = [
  {
    id: 'sedan-fleet',
    name: '4 Seater Sedan',
    category: 'Maruti Swift Dzire',
    passengers: 4,
    luggage: 2,
    image: '/images/velora_dzire.webp',
    features: [
      'Chilled AC Cabin',
      '4 Passenger Seating',
      'Large Boot Luggage Space',
      'Clean & Sanitized Daily',
      'Safe & Punctual Driver',
    ],
    description: 'Comfortable, fuel-efficient sedan for solo, corporate, and small family trips across cities.',
  },
  {
    id: 'ertiga-fleet',
    name: '6-7 Seater Cab',
    category: 'Maruti Suzuki Ertiga',
    passengers: 7,
    luggage: 4,
    image: '/images/velora_ertiga.webp',
    features: [
      '6-7 Passenger Seating',
      'Dedicated Rear AC Vents',
      'Foldable 3rd Row for Bags',
      'Comfortable Long Highway Ride',
      'Experienced Driver',
    ],
    description: 'The preferred choice for families needing extra seating and generous luggage space.',
  },
  {
    id: 'traveller-fleet',
    name: 'More than 7 Seats',
    category: 'Tempo Traveller / Minibus',
    passengers: 15,
    luggage: 8,
    image: '/images/velora_traveller.webp',
    features: [
      '8 to 15+ Seater Options',
      'Push-Back Comfortable Seats',
      'Powerful Central AC',
      'Huge Luggage Storage',
      'Ideal for Pilgrimage & Groups',
    ],
    description: 'Spacious, high-roof vehicle designed for group tours, weddings, and outstation trips.',
  },
];

export const WHY_US_FEATURES = [
  {
    // TODO: Confirm with Dharmeshbhai if GPS-monitored is defensible
    title: 'Safety-Focused Travel',
    description: 'Your safety is our top priority. All cabs are GPS-monitored and maintained to high safety standards for complete peace of mind.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Experienced Drivers',
    description: 'Polite, background-checked, and seasoned drivers with extensive Gujarat and highway knowledge.',
    iconName: 'UserCheck',
  },
  {
    title: '24x7 Availability',
    description: 'Early morning airport transfer or late-night arrival? Our cab network operates around the clock to meet your schedule.',
    iconName: 'Clock24',
  },
  {
    title: 'Punctual Pickup Focus',
    description: 'We respect your time. Our drivers prioritize prompt arrival at your doorstep before your scheduled departure.',
    iconName: 'Timer',
  },
  {
    // TODO: Keep 'no surge pricing / no hidden surge charges' only if confirmed by business owner
    title: 'Fixed quote on WhatsApp',
    description: 'No surge pricing. Fixed, transparent route quotes confirmed upfront via WhatsApp before your trip starts.',
    iconName: 'BadgeIndianRupee',
  },
  {
    title: 'Clean & Comfortable AC Cabs',
    description: 'Every vehicle undergoes thorough interior cleaning and air-conditioning inspection prior to dispatch.',
    iconName: 'Sparkles',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rajesh Patel',
    location: 'Verified Passenger',
    rating: 5,
    route: 'Intercity One-Way Ride',
    comment: 'Booked Velora Cabs for an urgent business trip. They arranged the cab quickly. The cab was clean, smooth, and driver reached 15 minutes before time. Highly recommended!',
    date: 'August 2026',
    image: '/images/passenger_rajesh.webp',
  },
  {
    id: '2',
    name: 'Meera Shah',
    location: 'Verified Passenger',
    rating: 5,
    route: 'Airport Pickup & Drop',
    comment: 'Punctuality is top-notch! Reached the airport comfortably with zero stress. Driver drove safely throughout the highway. Will always use Velora Cabs for travel.',
    date: 'July 2026',
    image: '/images/passenger_meera.webp',
  },
  {
    id: '3',
    name: 'Amitabh Joshi',
    location: 'Verified Passenger',
    rating: 5,
    route: 'Family Outstation Journey',
    comment: 'Excellent outstation service. Transparent billing with no hidden surprises. The car was spotless and comfortable for my family. 5 stars for safety and service quality!',
    date: 'June 2026',
    image: '/images/passenger_amitabh.webp',
  },
];

export function formatDateToDDMMYYYY(dateStr?: string): string {
  if (!dateStr) return 'Asap';
  const parts = dateStr.trim().split('-');
  if (parts.length === 3 && parts[0].length === 4) {
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  }
  return dateStr;
}

export function buildWhatsAppLink(data: {
  name?: string;
  phone?: string;
  pickupLocation?: string;
  dropLocation?: string;
  tripDate?: string;
  tripTime?: string;
  tripType?: string;
  message?: string;
  carName?: string;
}) {
  const tripTypeLabel =
    data.tripType === 'outstation'
      ? 'One-Way Outstation'
      : data.tripType === 'roundtrip'
      ? 'Round Trip'
      : data.tripType === 'airport'
      ? 'Airport Transfer'
      : data.tripType === 'local'
      ? 'Local City Rental'
      : (data.tripType || 'Outstation');

  const formattedDate = formatDateToDDMMYYYY(data.tripDate);
  const specialNote = data.message?.trim() || 'None';

  const text = `🚖 *VELORA CABS — NEW BOOKING INQUIRY*
══════════════════════════════
  FIELD           DETAILS
══════════════════════════════
  Passenger     : ${data.name || 'Not provided'}
  Contact       : ${data.phone || 'Not provided'}
  Pickup        : ${data.pickupLocation || 'Bhavnagar'}
  Drop          : ${data.dropLocation || 'Ahmedabad'}
  Date          : ${formattedDate}
  Trip Type     : ${tripTypeLabel}
  Car Model     : ${data.carName || 'Maruti Swift Dzire'}
══════════════════════════════

📌 *SPECIAL NOTE:*
👉 ${specialNote}

══════════════════════════════
Kindly confirm driver assignment & best price. Thank you!`;

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
