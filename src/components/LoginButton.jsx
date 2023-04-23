"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

function LoginButton() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        로그인버튼
      </button>
      <button
        onClick={() => {
          signOut();
          router.push("/list");
        }}
      >
        로그아웃버튼
      </button>
    </div>
  );
}

export default LoginButton;
