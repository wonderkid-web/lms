import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { BookOpen, FileText, Target, Zap, Layers, Award, Rocket, Brain } from "lucide-react";
import React from "react";
import { moduleData } from "@/static";

type Props = {
  params: Promise<{ id: string }>;
};

const moduleIcons = [
  BookOpen,
  FileText,
  Target,
  Zap,
  Layers,
  Award,
  Rocket,
  Brain
];

async function ProgressClassPage({ params }: Props) {
  const { id } = await params;

  // Simulasi data modul

  return (
    <Container className="h-full">
      <Header text="Progress Class" />

      <div className="space-y-6 p-2 md:p-2">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 sm:text-3xl">Pilih Modul Belajar Anda</h2>
          <p className="text-gray-600 text-lg">
            Anda bebas memilih modul mana pun yang ingin dipelajari. Selamat belajar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {moduleData.map((module, index) => {
            const ModuleIcon = moduleIcons[index];
            return (
              <Link
                key={module.number}
                href={{
                  pathname: `progress/${module.number}`,
                  query: { idProgress: module.number },
                }}
                className="bg-white border border-gray-200 rounded-xl p-5 
                           transition-colors duration-200 
                           flex items-center space-x-4 
                           shadow-sm hover:shadow-md"
              >
                <ModuleIcon
                  className="text-blue-500 w-10 h-10"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Modul {module.number}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {module.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default ProgressClassPage;