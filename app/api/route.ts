import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Geoparcela API is running' });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ message: 'Data received', data: body });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 