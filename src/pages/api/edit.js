import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let 바꿀꺼 = { title: 요청.body.title, content: 요청.body.content };
    console.log(요청.body);
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: 바꿀꺼 });
    응답.status(200).redirect("/list");
  }
}
