import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Here you would typically send this to a database or email service
    // For this assignment, we'll simulate a successful storage/operation
    console.log('Form submission received:', { name, email, company, message });

    // Simulate a small delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Lead captured successfully!', data: body },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error capturing lead', error },
      { status: 500 }
    );
  }
}
