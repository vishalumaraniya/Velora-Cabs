import { ServiceItem, RouteItem, FleetItem, TestimonialItem } from '@/types';

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
  address: 'Bhavnagar, Gujarat, India',
  serviceAreas: ['Bhavnagar', 'Surat', 'Baroda (Vadodara)', 'Ahmedabad', 'Mumbai', 'All India Outstation'],
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
    description: 'Hassle-free airport drop and pickup to Ahmedabad, Surat, Vadodara, and Mumbai airports with luggage assistance.',
    iconName: 'Plane',
    features: ['Flight Tracking', 'Zero Delay Guarantee', 'Spacious Boot for Luggage', '24x7 Availability'],
    recommendedFor: 'Travelers & corporate flyers',
  },
  {
    id: 'outstation-trips',
    title: 'Outstation Trips',
    subtitle: 'One-way & round trips across India',
    description: 'Reliable outstation cab service across Gujarat, Maharashtra, Rajasthan, and pan-India destinations at transparent per-km rates.',
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

export const POPULAR_ROUTES: RouteItem[] = [
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
    id: 'baroda-ahmedabad',
    origin: 'Baroda (Vadodara)',
    destination: 'Ahmedabad',
    distance: '~110 km',
    duration: '2 Hrs',
    startingPrice: 'Best Rate Guaranteed',
    popularFor: 'Airport & Corporate Commute',
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
    id: 'all-india-outstation',
    origin: 'Gujarat Base',
    destination: 'All India Destinations',
    distance: 'Custom Routes',
    duration: 'Flexible Schedule',
    startingPrice: 'Competitive Per KM',
    popularFor: 'Pilgrimage, Tours & Inter-state Trips',
  },
];

export const FLEET_CARS: FleetItem[] = [
  {
    id: 'premium-ac-sedan',
    name: 'Premium AC Sedan',
    category: 'AC Compact Sedan',
    passengers: 4,
    luggage: 2,
    image: '/images/velora_dzire_sedan.jpg',
    features: [
      'Automatic / Manual AC',
      'Ergonomic Leatherette Seats',
      '378L Large Boot Luggage Space',
      'Dual Airbags & ABS Safety',
      'Clean & Sanitized After Every Trip',
      'Bluetooth & USB Audio System',
    ],
    description: 'India\'s most loved sedan for smooth, comfortable, and fuel-efficient journeys both in-city and across highways.',
  },
  {
    id: 'executive-sedans',
    name: 'Comfort AC Sedan Fleet',
    category: 'Executive Sedan',
    passengers: 4,
    luggage: 3,
    image: '/images/velora_dzire_sedan.jpg',
    features: [
      'Ample Rear Legroom',
      'High-Speed Highway Stability',
      'Punctual Professional Drivers',
      'Mobile Charging Outlets',
    ],
    description: 'Spacious sedan cabs optimized for outstation travel and airport transfers with maximum passenger relaxation.',
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
    location: 'Bhavnagar',
    rating: 5,
    route: 'Bhavnagar to Surat One-Way',
    comment: 'Booked Velora Cabs for an urgent business trip to Surat. Dharmeshbhai arranged the cab quickly. The cab was clean, smooth, and driver reached 15 minutes before time. Highly recommended!',
    date: 'August 2026',
  },
  {
    id: '2',
    name: 'Meera Shah',
    location: 'Ahmedabad',
    rating: 5,
    route: 'Ahmedabad Airport Drop',
    comment: 'Punctuality is top-notch! Reached Ahmedabad airport comfortably with zero stress. Driver drove safely throughout the highway. Will always use Velora Cabs for outstation travel.',
    date: 'July 2026',
  },
  {
    id: '3',
    name: 'Amitabh Joshi',
    location: 'Vadodara',
    rating: 5,
    route: 'Baroda to Mumbai Outstation',
    comment: 'Excellent outstation service. Transparent billing with no hidden surprises. The car was spotless and comfortable for my family. 5 stars for safety and service quality!',
    date: 'June 2026',
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
}) {
  const text = `Hello Velora Cabs, I would like to inquire about a cab booking:
  
🚗 *Name:* ${data.name || 'Not provided'}
📞 *Phone:* ${data.phone || 'Not provided'}
📍 *Pickup:* ${data.pickupLocation || 'Not provided'}
🎯 *Drop:* ${data.dropLocation || 'Not provided'}
📅 *Date:* ${data.tripDate || 'Asap'}
⏰ *Time:* ${data.tripTime || 'Flexible'}
🏷️ *Trip Type:* ${data.tripType || 'Outstation / Local'}
💬 *Notes:* ${data.message || 'None'}

Please share quote and availability. Thank you!`;

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
