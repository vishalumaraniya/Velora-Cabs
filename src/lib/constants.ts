import { ServiceItem, RouteItem, FleetItem, TestimonialItem, VehicleModel } from '@/types';

export const BUSINESS_INFO = {
  name: 'Velora Cabs',
  tagline: 'Safe Rides. On Time. Every Time.',
  contactPerson: 'Dharmeshbhai B. Kava',
  phones: [
    { display: '+91 87803 11279', raw: '8780311279', formatted: '+918780311279' },
    { display: '+91 84691 62988', raw: '8469162988', formatted: '+918469162988' },
  ],
  whatsappNumber: '918780311279',
  email: 'veloracabs07@gmail.com',
  address: 'India',
  serviceAreas: ['Local City Rides', 'Airport Transfers', 'Outstation Trips', 'Pan-India Service'],
  operatingHours: '24 Hours / 7 Days a Week',
  accentColor: '#F5B921',
  darkBg: '#0d0d0f',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-rides',
    title: 'Local City Rides',
    subtitle: 'Point-to-point within city limits',
    description: 'Comfortable, AC sedan rides for daily commutes, shopping trips, business meetings, and city exploration.',
    iconName: 'Car',
    features: ['Doorstep Pickup', 'Flat Hourly & KM Rates', 'Clean & Sanitized Sedans', 'GPS Tracked'],
    recommendedFor: 'City commuters & shopping trips',
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    subtitle: 'On-time pickup & drop guaranteed',
    description: 'Hassle-free airport drop and pickup with real-time flight tracking and luggage assistance.',
    iconName: 'Plane',
    features: ['Flight Tracking', 'Zero Delay Guarantee', 'Spacious Boot for Luggage', '24x7 Availability'],
    recommendedFor: 'Travelers & corporate flyers',
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Trips',
    subtitle: 'One-way & round trips across India',
    description: 'Reliable outstation cab service across pan-India destinations at transparent per-km rates.',
    iconName: 'MapPin',
    features: ['One-Way & Round Trip Options', 'Experienced Highway Drivers', 'No Hidden Charges', 'Toll & State Tax Transparency'],
    recommendedFor: 'Family trips & intercity travel',
  },
  {
    id: 'express-service',
    title: '24x7 Express Service',
    subtitle: 'Instant dispatch whenever needed',
    description: 'Emergency & late-night cab availability round-the-clock. Reliable driver assignment within minutes of your call.',
    iconName: 'Clock',
    features: ['Immediate Driver Dispatch', 'Late Night Safety', 'Direct Call Booking', 'Verified Drivers'],
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
    image: '/images/velora_dzire.png',
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
    image: '/images/velora_ertiga.png',
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
    image: '/images/velora_traveller.png',
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
    image: '/images/velora_dzire.png',
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
    image: '/images/velora_ertiga.png',
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
    image: '/images/velora_traveller.png',
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
    title: 'Safe Rides Priority',
    description: 'Your safety is our top priority. All cabs are equipped with safety features and GPS tracking for complete peace of mind.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Experienced Drivers',
    description: 'Friendly, police-verified, and seasoned drivers with extensive highway knowledge and polite conduct.',
    iconName: 'UserCheck',
  },
  {
    title: '24x7 Availability',
    description: 'Early morning flight or midnight emergency ride? Our cabs operate 24 hours a day, 7 days a week without interruption.',
    iconName: 'Clock24',
  },
  {
    title: 'On-Time Guarantee',
    description: 'We value your time. Drivers arrive at your pickup location 10 minutes prior to scheduled departure.',
    iconName: 'Timer',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden surge pricing. Clear per-kilometer and fixed route quotes upfront before trip confirmation.',
    iconName: 'BadgeIndianRupee',
  },
  {
    title: 'Clean & Sanitized Cabs',
    description: 'Every vehicle undergoes thorough interior cleaning, fresh fragrance treatment, and sanitation prior to dispatch.',
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
    image: '/images/passenger_rajesh.jpg',
  },
  {
    id: '2',
    name: 'Meera Shah',
    location: 'Verified Passenger',
    rating: 5,
    route: 'Airport Pickup & Drop',
    comment: 'Punctuality is top-notch! Reached the airport comfortably with zero stress. Driver drove safely throughout the highway. Will always use Velora Cabs for travel.',
    date: 'July 2026',
    image: '/images/passenger_meera.jpg',
  },
  {
    id: '3',
    name: 'Amitabh Joshi',
    location: 'Verified Passenger',
    rating: 5,
    route: 'Family Outstation Journey',
    comment: 'Excellent outstation service. Transparent billing with no hidden surprises. The car was spotless and comfortable for my family. 5 stars for safety and service quality!',
    date: 'June 2026',
    image: '/images/passenger_amitabh.jpg',
  },
];

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

  const text = `🚖 *VELORA CABS — NEW BOOKING INQUIRY*
══════════════════════════════
  FIELD           DETAILS
══════════════════════════════
  Passenger     : ${data.name || 'Not provided'}
  Contact       : ${data.phone || 'Not provided'}
  Pickup        : ${data.pickupLocation || 'Bhavnagar'}
  Drop          : ${data.dropLocation || 'Ahmedabad'}
  Date          : ${data.tripDate || 'Asap'}
  Trip Type     : ${tripTypeLabel}
  Car Model     : ${data.carName || 'Maruti Swift Dzire'}
  Special Note  : ${data.message || 'None'}
══════════════════════════════
Kindly confirm driver assignment & best price. Thank you!`;

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
