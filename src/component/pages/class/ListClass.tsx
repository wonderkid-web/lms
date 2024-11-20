import { BookA, ClockAlert, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import doodle from "@/../public/doodle.jpg";
import Image from "next/image";
import { memo } from "react";

const CardClassMemo = memo(CardClass);

function ListClass() {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
      {[1, 2, 3, 4].map((i) => (
        <CardClassMemo classRoom={i} key={i} />
      ))}
    </div>
  );
}

function CardClass({ classRoom }: { classRoom: number }) {
  return (
    <div className="flex h-52 max-h-52 flex-col gap-2 rounded-sm border shadow-sm">
      <div className="relative h-2/3 w-full overflow-hidden">
        <Image src={doodle} alt="doodle" objectFit="cover" fill />
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

      <Link
        className="flex items-center justify-center gap-1 rounded-sm bg-blue-600 py-1 text-center text-sm font-semibold text-white"
        href={`class/${classRoom}`}
      >
        Ujian
        <LinkIcon size={10} />
      </Link>
    </div>
  );
}

export default ListClass;
