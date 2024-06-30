import mongoose from 'mongoose';

const viewSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

const ViewModel = mongoose.models.View || mongoose.model('View', viewSchema);
export default ViewModel;
