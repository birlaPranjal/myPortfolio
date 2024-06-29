import mongoose, { Schema, Document, Model } from 'mongoose';

interface IView extends Document {
    count: number;
}

const viewSchema: Schema<IView> = new Schema({
    count: { type: Number, required: true, default: 0 }
});

const ViewModel: Model<IView> = mongoose.models.View || mongoose.model<IView>('View', viewSchema);

export default ViewModel;
