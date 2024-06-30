import { NextRequest, NextResponse } from 'next/server';
import ViewModel from '@/models/Views';
import { dbConnect } from '@/config/dbConfig';

export async function POST(req: NextRequest): Promise<NextResponse> {
    await dbConnect();
    try {
        const view = await ViewModel.findOne();
        if (view) {
            view.count += 1;  // Increment the count
            await view.save();
        } else {
            await ViewModel.create({ count: 1 });  // Initialize with count 1 if no record found
        }
        return NextResponse.json({ message: 'View count updated' });
    } catch (error) {
        console.error('Error updating view count:', error);
        return NextResponse.json({ error: "Error occurred" }, { status: 500 });
    }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    await dbConnect();
    try {
        const view = await ViewModel.findOne();
        if (view) {
            return NextResponse.json({ count: view.count });
        } else {
            return NextResponse.json({ count: 0 });
        }
    } catch (error) {
        console.error('Error fetching view count:', error);
        return NextResponse.json({ error: "Error occurred" }, { status: 500 });
    }
}