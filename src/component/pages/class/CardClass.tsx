import { BookA, ClockAlert, LinkIcon } from "lucide-react";
import Image from "next/image";
import doodle from "@/../public/doodle.jpg";
import Link from "next/link";

type Props = {
  classRoom: number;
};

export default function CardClass({ classRoom }: Props) {
  return (
    <div className="flex h-72 max-h-52 flex-col gap-2 rounded-md border shadow-sm">
      <div className="relative h-1/2 w-full overflow-hidden">
        <Image src={doodle} alt="doodle" objectFit="cover" fill priority />
      </div>

      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center gap-2">
          <BookA className="text-xs" size={15} color="gray" />
          <p className="text-lg font-semibold text-gray-700">Kalkulus</p>
        </div>
        <div className="flex items-center gap-2">
          <ClockAlert className="text-xs" size={15} color="gray" />
          <p className="text-xs italic text-gray-400">21 November 2024</p>
        </div>
      </div>

      <div className="p-2">
        <Link
          className="flex items-center justify-center gap-2 rounded-md bg-blue-600 py-1 text-center text-sm font-semibold text-white w-full"
          href={`class/${classRoom}`}
        >
          Ujian
          <LinkIcon size={10} />
        </Link>
      </div>
    </div>
  );
}
