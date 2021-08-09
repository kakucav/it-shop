import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Database connection success');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
