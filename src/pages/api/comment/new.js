import { connectDB } from "../../../../util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    const db = (await connectDB).db("forum");
    let result = await db.collection("comment").insertOne(요청.body);
  }
}
