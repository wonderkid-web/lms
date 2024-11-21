"use client";

import { PencilRuler } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  id: string;
};

function StartButtonClass({ id }: Props) {
  const idProgress = useSearchParams().get("idProgress");
  return (
    <Link
      href={`/class/${id}/progress/start/${idProgress}`}
      className="bg-background absolute bottom-1 left-0 flex w-full items-center justify-center py-8 text-xl font-semibold text-white md:text-2xl"
    >
      <h1>Siap Memulai Ujian?</h1>
      <PencilRuler color="white" size={15} />
    </Link>
  );
}

export default StartButtonClass;
