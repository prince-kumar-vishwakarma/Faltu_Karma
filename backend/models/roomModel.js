import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  RoomID: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  RoomNumber: {
    type: Number,
    required: true
  },
  HostelID: {
    type: String,
    required: true,
    trim: true,
    // ref: 'Hostel' // Uncomment this if you have a Hostel model to reference
  },
  Capacity: {
    type: Number,
    required: true,
    min: 1
  },
  Status: {
    type: String,
    enum: ['Available', 'Occupied', 'Maintenance'],
    default: 'Available'
  }
}, {
  timestamps: true
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
