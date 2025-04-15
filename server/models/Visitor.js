import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VisitorSchema = new Schema({
  ip: {
    type: String,
    required: true,
  },
  user_agent: {
    type: String,
    default: null,
  },
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

export default Visitor;