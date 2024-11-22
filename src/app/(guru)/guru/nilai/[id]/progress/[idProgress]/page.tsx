import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import {
  MultipleExamSection,
} from "@/components/pages/class/ExamSection";
import MozaicInput from "@/components/pages/class/MozaicInput";
import InputPointGuru from "@/components/pages/guru/InputPointGuru";

import React from "react";

type Props = {
  params: Promise<{ idProgress: string }>;
};

async function page({ params }: Props) {
  const { idProgress } = await params;
  return (
    <Container>
      <Header text={`Progress ${idProgress}`} />

      {Number(idProgress) % 3 == 0 && <MultipleExamSection id={idProgress} />}

      <MozaicInput />

      <InputPointGuru />
    </Container>
  );
}

export default page;
