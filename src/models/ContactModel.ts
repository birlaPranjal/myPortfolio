import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },
}, { timestamps: true });

const ContactModel = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default ContactModel;