import { Inter } from "next/font/google";
import { connectDB } from "../../util/database";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return <div></div>;
}
