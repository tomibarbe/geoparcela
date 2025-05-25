import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const parcels = await prisma.parcel.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        files: true,
      },
    });

    return NextResponse.json({ 
      message: 'Parcels retrieved successfully',
      data: parcels 
    });
  } catch (error) {
    console.error('Error retrieving parcels:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve parcels' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, coordinates, area, userId } = body;

    const parcel = await prisma.parcel.create({
      data: {
        name,
        description,
        coordinates,
        area,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json({ 
      message: 'Parcel created successfully',
      data: parcel 
    });
  } catch (error) {
    console.error('Error creating parcel:', error);
    return NextResponse.json(
      { error: 'Failed to create parcel' },
      { status: 500 }
    );
  }
} 