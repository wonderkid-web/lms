import Container from "@/component/layout/Container";
import Image from "next/image";
import doodle from "@/../public/doodle.jpg";
import Link from "next/link";
import { PencilRuler, ChevronLeft } from "lucide-react";
import StartButtonClass from "@/component/pages/class/StartButtonClass";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Home({ params }: Props) {
  const { id } = await params;
  return (
    <Container className="relative flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-20 p-4">
        <div className="mx-auto flex max-w-4xl items-center">
          <Link
            href={`/class`}
            className="group flex items-center text-gray-700 transition-colors hover:text-blue-600"
          >
            <ChevronLeft
              className="mr-2 transition-transform group-hover:-translate-x-1"
              size={24}
            />
            <span className="font-medium">Mulai Ujian</span>
          </Link>
        </div>
      </header>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={doodle}
          alt="doodle bg"
          layout="fill"
          objectFit="cover"
          className="opacity-10 blur-[2px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-grow flex-col items-center justify-center p-2">
        <div className="w-full max-w-md space-y-6 rounded-2xl bg-white/80 p-8 text-center shadow-xl backdrop-blur-sm">
          <div className="mb-4 flex justify-center">
            <PencilRuler
              className="text-blue-600"
              size={64}
              strokeWidth={1.5}
            />
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Siap Memulai Ujian?
          </h1>

          <p className="mb-6 text-gray-600">
            Pastikan anda sudah siap dan fokus sebelum memulai ujian. Periksa
            kembali persiapan anda.
          </p>

          <StartButtonClass id={id} />
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
    </Container>
  );
}
