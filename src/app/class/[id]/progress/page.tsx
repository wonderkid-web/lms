import Container from "@/component/layout/Container";
import Header from "@/component/layout/Header";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

async function page({ params }: Props) {
  const { id } = await params;
  return (
    <Container className="h-full">
      <Header text="Progress Class" />

      <div className="flex h-full flex-col gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((progress) => (
          <Link
            href={{
              pathname: `/class/${id}/progress/start`,
              query: {
                idProgress: progress,
              },
            }}
            key={progress}
            className="bg-background hover:bg-backgroundHover w-full rounded-sm py-3 text-center text-white"
          >
            {progress}
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default page;
