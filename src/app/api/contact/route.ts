import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/config/dbConfig';
import ContactModel from '@/models/ContactModel';

export async function POST(req: NextRequest): Promise<NextResponse> {
    await dbConnect();
    
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newContact = await ContactModel.create({
            name,
            email,
            message
        });

        return NextResponse.json({ message: "Contact form submitted successfully", id: newContact._id }, { status: 201 });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return NextResponse.json({ error: "Error occurred while submitting the form" }, { status: 500 });
    }
}