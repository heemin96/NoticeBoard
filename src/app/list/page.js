import ListItem from "@/components/ListItem";
import { connectDB } from "../../../util/database";

export const dynamic = "force-dynamic";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  const plainObject = JSON.parse(JSON.stringify(result));
  // console.log(plainObject);

  return (
    <div className="list-bg">
      <ListItem result={plainObject} />
    </div>
  );
}
