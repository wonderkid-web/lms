import Container from "@/component/layout/Container";
import Image from "next/image";
import doodle from "@/../public/doodle.jpg";
import StartButtonClass from "@/component/pages/class/StartButtonClass";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Home({ params }: Props) {
  const { id } = await params;

  return (
    <Container className="relative bg-[#f6f6f6]">
      {/* <Header text="Classroom" /> */}
      <Image src={doodle} alt="doodle bg" objectFit="contain" fill />

      <StartButtonClass id={id} />
    </Container>
  );
}
