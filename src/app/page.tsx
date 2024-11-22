import Container from "@/components/layout/Container";
import Image from "next/image";
import logo from "@/../public/logo.png";
import Link from "next/link";
import { BookOpenText } from "lucide-react";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col">
        {/* Content Container */}
        <div className="flex-grow flex items-center justify-center px-4 py-16">
          <div className="text-center">
            {/* Logo Container with Shadow and Scale Hover Effect */}
            <div className="flex justify-center mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src={logo}
                  alt="Platform Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="max-w-xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Selamat Datang di Platform Kami
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Mulai perjalanan belajar Anda dengan mengeksplorasi kelas-kelas yang tersedia.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="absolute bottom-4 left-0 right-0 p-6">
          <Link
            href="/class"
            className="flex items-center justify-center w-full max-w-md mx-auto py-5 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 rounded-xl text-xl font-bold group shadow-lg hover:shadow-xl"
          >
            <span className="mr-4">Lihat Kelas</span>
            <BookOpenText
              className="group-hover:translate-x-1 transition-transform"
              color="white"
              size={28}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}