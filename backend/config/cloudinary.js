import { v2 as cloudinary } from "cloudinary";

const connectClodinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLODUINARY_NAME,
    api_key: process.env.CLODUINARY_API_KEY,
    api_secret: process.env.CLODUINARY_SECRET_KEY,
  });
};

export default connectClodinary;
