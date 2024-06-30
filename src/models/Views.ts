import mongoose from 'mongoose';

// Define the schema
const viewSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

// Check if the model already exists to prevent recompilation
const ViewModel = mongoose.models.View || mongoose.model('View', viewSchema);

export default ViewModel;