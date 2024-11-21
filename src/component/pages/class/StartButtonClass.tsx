"use client";

import { ArrowRight, PencilRuler } from "lucide-react";
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
      className="group flex w-full items-center justify-center rounded-lg bg-blue-600 py-4 text-white transition-all duration-300 hover:bg-blue-700"
    >
      <span className="mr-2 text-lg font-semibold">Mulai Ujian</span>
      <ArrowRight
        className="transition-transform group-hover:translate-x-1"
        size={24}
      />
    </Link>
  );
}

export default StartButtonClass;
