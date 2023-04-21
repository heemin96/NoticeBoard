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
          fetch("/URL", { method: "POST", body: comment });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}

export default Comment;
