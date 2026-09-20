import { NextResponse } from 'next/server';
import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  pickupLocation: z.string().min(2),
  dropLocation: z.string().min(2),
  tripDate: z.string().min(1),
  tripTime: z.string().optional(),
  tripType: z.enum(['local', 'outstation', 'airport']).optional(),
  message: z.string().optional(),
  carType: z.string().optional(),
  carName: z.string().optional(),
  passengers: z.number().or(z.string()).optional(),
  distanceKm: z.number().optional(),
  estimatedFare: z.number().optional(),
  ratePerKm: z.number().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = inquirySchema.parse(body);

    // Process inquiry (Log, store, or forward to Formspree / Resend API if configured)
    console.log('[VELORA CABS INQUIRY RECEIVED]:', validatedData);

    return NextResponse.json({
      success: true,
      message: 'Booking inquiry received successfully. Our team will contact you shortly.',
      data: validatedData,
    });
  } catch (error) {
    console.error('Inquiry API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid payload format or missing required fields' },
      { status: 400 }
    );
  }
}
