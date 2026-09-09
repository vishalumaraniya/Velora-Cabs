export interface BookingFormData {
  name: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  tripDate: string;
  tripTime: string;
  tripType: 'local' | 'outstation' | 'airport';
  message?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  recommendedFor: string;
}

export interface RouteItem {
  id: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  startingPrice: string;
  popularFor: string;
}

export interface FleetItem {
  id: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  route: string;
  comment: string;
  date: string;
}
