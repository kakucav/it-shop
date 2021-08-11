import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0 },
    address: {
      city: { type: String },
      street: { type: String },
      name: { type: String },
      phone: { type: String },
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
