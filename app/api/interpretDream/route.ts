import { NextRequest, NextResponse } from 'next/server';
import { getDreamInterpretation } from '../../../assistant/getDreamInterpretation';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get dream description
    const { dreamDescription } = await req.json();

    // Ensure dreamDescription is provided
    if (!dreamDescription) {
      throw new Error('Missing dream description');
    }

    // Call your function to get the interpretation
    const interpretation = await getDreamInterpretation(dreamDescription);

    // Return the interpretation as JSON
    return new NextResponse(JSON.stringify({ interpretation }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error:', error);
    // Handle errors gracefully
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
