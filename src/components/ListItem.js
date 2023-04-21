"use client";

import Link from "next/link";

function ListItem({ result }) {
  return (
    <div>
      {result.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + item._id}>
            <h4>{item.title}</h4>
          </Link>
          <p>{item.content}</p>
          <Link href={"/edit/" + item._id}>수정하기</Link>

          <button
            onClick={(e) => {
              fetch(`/api/post/delete`, { method: `POST`, body: item._id }) //
                .then((r) => r.json())
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
            }}
          >
            삭제하기
          </button>

          {/* <button
            onClick={() => {
              fetch("/api/abc/kim&name=babo");
            }}
          >
            삭제하기
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default ListItem;
