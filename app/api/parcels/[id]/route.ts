import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const parcel = await prisma.parcel.findUnique({
      where: { id: params.id },
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

    if (!parcel) {
      return NextResponse.json(
        { error: 'Parcel not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Parcel retrieved successfully',
      data: parcel 
    });
  } catch (error) {
    console.error('Error retrieving parcel:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve parcel' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, description, coordinates, area } = body;

    const parcel = await prisma.parcel.update({
      where: { id: params.id },
      data: {
        name,
        description,
        coordinates,
        area,
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
      message: 'Parcel updated successfully',
      data: parcel 
    });
  } catch (error) {
    console.error('Error updating parcel:', error);
    return NextResponse.json(
      { error: 'Failed to update parcel' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.parcel.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ 
      message: 'Parcel deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting parcel:', error);
    return NextResponse.json(
      { error: 'Failed to delete parcel' },
      { status: 500 }
    );
  }
} 