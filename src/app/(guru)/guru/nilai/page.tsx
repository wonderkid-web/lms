import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <Container>
      <Header text="List Siswa" />

      {/* 
        
        TABLE SISWA    

        */}

      {[1, 2, 3, 4, 5].map((i) => (
        <Link
        key={i}
        href={`/guru/nilai/${i}/progress/`}>Siswa {i}</Link>
      ))}
    </Container>
  );
}

export default page;
