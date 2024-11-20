"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <ArrowLeft color="gray" size={24} />
    </button>
  );
}

export default BackButton;
