import { connect } from "mongoose";
import "dotenv/config";

export default async (): Promise<void> => {
  const DB_URI = "mongodb://localhost:27017/chatapp";
  await connect(DB_URI)
    .then(() => console.log("🟢 success connection DB "))
    .catch((err) => console.log("❌ Failed connection -> \n", err));
};