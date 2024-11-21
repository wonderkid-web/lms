import Container from "@/component/layout/Container";
import Image from "next/image";
import logo from "@/../public/logo.png";
import Link from "next/link";
import { BookOpenText } from "lucide-react";

export default function Home() {
  return (
    <Container className="relative bg-[#f6f6f6]">
      {/* <Header text="Classroom" /> */}
      <Image src={logo} alt="doodle bg" objectFit="contain" fill />
      <Link
        className="bg-background absolute bottom-0 left-0 flex w-full hover:bg-backgroundHover items-center justify-center gap-2 py-4 text-xl font-semibold text-white md:text-2xl"
        href={"/class"}
      >
        {" "}
        Lihat Class
        <BookOpenText color="white" size={20} />
      </Link>
    </Container>
  );
}
