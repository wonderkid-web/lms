import Container from "@/component/layout/Container";
import Image from "next/image";
import doodle from "@/../public/doodle.jpg";
import Link from "next/link";
import { PencilRuler, ArrowRight, ChevronLeft } from "lucide-react";

type Props = {
  params: { id: string };
};

export default async function Home({ params }: Props) {
  const { id } = params;
  return (
    <Container className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link
            href={`/class`}
            className="group flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft
              className="mr-2 group-hover:-translate-x-1 transition-transform"
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
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow p-2">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
          <div className="flex justify-center mb-4">
            <PencilRuler
              className="text-blue-600"
              size={64}
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Siap Memulai Ujian?
          </h1>

          <p className="text-gray-600 mb-6">
            Pastikan anda sudah siap dan fokus sebelum memulai ujian.
            Periksa kembali persiapan anda.
          </p>

          <Link
            href={`/class/${id}/start`}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-all duration-300 group"
          >
            <span className="mr-2 text-lg font-semibold">Mulai Ujian</span>
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </Link>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
    </Container>
  );
}