import Container from "@/component/layout/Container";
import Image from "next/image";
import doodle from "@/../public/doodle.jpg";
import Link from "next/link";
import { PencilRuler } from "lucide-react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Home({ params }: Props) {
  const { id } = await params;
  return (
    <Container className="relative bg-[#f6f6f6]">
      {/* <Header text="Classroom" /> */}
      <Image src={doodle} alt="doodle bg" objectFit="contain" fill />

      <Link
        href={`/class/${id}/start`}
        className="bg-background absolute bottom-1 left-0 flex w-full items-center justify-center py-8 text-xl font-semibold text-white md:text-2xl"
      >
        <h1>Siap Memulai Ujian?</h1>
        <PencilRuler color="white" size={15} />
      </Link>
    </Container>
  );
}
