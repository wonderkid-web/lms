"use client";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import React, { useState } from "react";

function InputPointGuru() {
  const [point, setPoint] = useState(0);

  return (
    <Container>
      <Header text="Penilaian Siswa" />

      <input
        onChange={(e) => setPoint(Number(e.currentTarget.value))}
        placeholder="Masukan Nilai yang ingin di berikan"
        type="number"
      />
      <button>save</button>
    </Container>
  );
}

export default InputPointGuru;
