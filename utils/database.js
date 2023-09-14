import mongoose from "mongoose";

let isConnnected = false;

export const connetToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnnected) {
    console.log("mongo db is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
