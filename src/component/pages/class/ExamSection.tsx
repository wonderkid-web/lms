"use client";

import { questions } from "@/constant";
import { Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ExamSection({ id }: { id: string }) {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="space-y-6 p-2">
      <h2 className="text-2xl font-bold">Soal Ujian</h2>
      {questions.map((question) => (
        <div
          key={question.id}
          className="mb-4 rounded-lg bg-white p-6 shadow-md"
        >
          <h3 className="mb-2 text-xl font-semibold">Soal {question.id}</h3>
          <p className="mb-4">{question.text}</p>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center space-x-2"
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={selectedAnswers[question.id] === option}
                  onChange={() => handleAnswerChange(question.id, option)}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <Link href={`{/class/${id}/selesai`} className="w-full flex justify-center items-center text-lg text-white gap-2 bg-background py-2 rounded-md hover:bg-backgroundHover font-semibold">Kirim Jawaban
      <Send color="white" size={12} />
      </Link>
    </div>
  );
}
