"use client";

import React, { useEffect, useState } from "react";

function Comment({ id, author }) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${id}&author=${author}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result);
        setData(result);
      });
  }, []);
  return (
    <div>
      <hr />
      <div>댓글목록보여줄부분</div>

      {data.length > 0
        ? data.map((a, i) => (
            <ul key={i}>
              <li>
                <p>
                  {a.content} {a.author}
                </p>
              </li>
            </ul>
          ))
        : "댓글없음"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(comment);
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}

export default Comment;
