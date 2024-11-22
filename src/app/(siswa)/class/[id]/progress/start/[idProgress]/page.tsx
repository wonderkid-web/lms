import Container from "@/component/layout/Container";
import Header from "@/component/layout/Header";
import {
  EssayExamSection,
  MultipleExamSection,
} from "@/component/pages/class/ExamSection";

import React from "react";

type Props = {
  params: Promise<{ idProgress: string }>;
};

async function page({ params }: Props) {
  const { idProgress } = await params;
  return (
    <Container>
      <Header text={`Progress ${idProgress}`} />

      {Number(idProgress) % 3 != 0 && <EssayExamSection id={idProgress} />}

      {Number(idProgress) % 3 == 0 && <MultipleExamSection id={idProgress} />}
    </Container>
  );
}

export default page;
