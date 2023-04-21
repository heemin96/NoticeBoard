"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  const router = useRouter();
  const a = usePathname();
  const b = useSearchParams();

  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      버튼
    </button>
  );
}
