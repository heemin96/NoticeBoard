"use client";

import React, { useState } from "react";

function Comment() {
  let [comment, setComment] = useState("");
  return (
    <div>
      <div>댓글목록보여줄부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", { method: "POST", body: comment });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}

export default Comment;
