import React from "react";
import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb";

async function page(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/edit" method="POST">
        <input
          name="title" //
          placeholder="글제목"
          defaultValue={result.title}
        />
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default page;
