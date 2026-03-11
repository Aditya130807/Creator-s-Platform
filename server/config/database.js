import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/creators-platform';
    
    await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('✅ MongoDB connected successfully');
    
  } catch (error) {
    console.log(process.env.MONGO_URI);
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit the application if database connection fails
  }
};

export default connectDB;