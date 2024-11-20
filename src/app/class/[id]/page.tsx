import Container from "@/component/layout/Container";
import Header from "@/component/layout/Header";
import { ExamSection } from "@/component/pages/class/ExamSection";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;

  return (
    <Container>
      <Header text={`Classroom ${id}`} />
      <ExamSection id={id} />
    </Container>
  );
}
