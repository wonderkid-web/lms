"use client";

import { questions } from "@/constant";
import { Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MultipleExamSection({ id }: { id: string }) {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="space-y-6 p-2">
      <h2 className="text-2xl font-bold">Soal Ujian Ganda</h2>
      {questions.map((question) => (
        <div
          key={question.id}
          className="mb-4 rounded-lg border-2 bg-white p-6 shadow-md"
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
      <Link
        href={`{/class/${id}/selesai`}
        className="bg-background hover:bg-backgroundHover flex w-full items-center justify-center gap-2 rounded-md py-2 text-lg font-semibold text-white"
      >
        Kirim Jawaban
        <Send color="white" size={12} />
      </Link>
    </div>
  );
}

export function EssayExamSection({ id }: { id: string }) {

  return (
    <div className="space-y-6 p-2">
      <h2 className="text-2xl font-bold">Soal Essay</h2>
      {questions.map((question) => (
        <div
          key={question.id}
          className="mb-4 rounded-lg border-2 bg-white p-6 shadow-md"
        >
          <h3 className="mb-2 text-xl font-semibold">Soal {question.id}</h3>
          <p className="mb-4">{question.text}</p>
          
          <textarea
            placeholder="Tulis Jawaban kamu disini"
            className="flex h-40 max-h-40 w-full justify-start overflow-auto rounded-sm border p-2"
          ></textarea>

        </div>
      ))}
      <Link
        href={`{/class/${id}/selesai`}
        className="bg-background hover:bg-backgroundHover flex w-full items-center justify-center gap-2 rounded-md py-2 text-lg font-semibold text-white"
      >
        Kirim Jawaban
        <Send color="white" size={12} />
      </Link>
    </div>
  );
}
