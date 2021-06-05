import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  bank: {
    type: String,
    require: true,
  },
  accountNumber: {
    type: Number,
    require: true,
  },
  agencyNumber: {
    type: Number,
    require: true,
  },
  creditCardNumber: {
    type: Number,
    require: true,
  },
  ip: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  balance: {
    type: Number,
    default: 1000,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export { User };
