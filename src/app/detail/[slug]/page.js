import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";
import Comment from "@/components/Comment";

async function page(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.slug) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>

      <Comment />
    </div>
  );
}

export default page;
