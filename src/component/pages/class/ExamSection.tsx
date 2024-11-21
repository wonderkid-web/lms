"use client";

import { questions } from "@/constant";
import { Send, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function MultipleExamSection({ id }: { id: string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isAllQuestionsAnswered =
    questions.length === Object.keys(selectedAnswers).length;

  return (
    <div className="min-h-screen">
      <div className="w-full p-4">
        {/* Progress Indicator */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-gray-600">
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </div>
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index < currentQuestionIndex
                    ? "bg-green-500"
                    : index === currentQuestionIndex
                      ? "bg-blue-500"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerChange(currentQuestion.id, option)}
                className={`w-full rounded-lg border p-4 text-left transition-all duration-300 ${
                  selectedAnswers[currentQuestion.id] === option
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedAnswers[currentQuestion.id] === option && (
                    <CheckCircle2 className="text-blue-500" size={20} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {/* Previous Button */}
          {currentQuestionIndex > 0 && (
            <button
              onClick={moveToPreviousQuestion}
              className="flex items-center rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* Next/Submit Button */}
          {currentQuestionIndex < questions.length - 1
            ? // Next button for non-last questions
              selectedAnswers[currentQuestion.id] && (
                <button
                  onClick={moveToNextQuestion}
                  className="ml-auto flex items-center rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
                >
                  <ArrowRight size={20} />
                </button>
              )
            : // Submit button only on last question when all answered
              isAllQuestionsAnswered && (
                <Link
                  href={`/class/${id}/selesai`}
                  className="ml-auto flex items-center rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
                >
                  <span className="mr-2">Kirim Jawaban</span>
                  <Send size={20} />
                </Link>
              )}
        </div>
      </div>
    </div>
  );
}

export function EssayExamSection({ id }: { id: string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isAllQuestionsAnswered =
    questions.length === Object.keys(selectedAnswers).length;

  return (
    <div className="min-h-screen">
      <div className="w-full p-4">
        {/* Progress Indicator */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-gray-600">
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </div>
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index < currentQuestionIndex
                    ? "bg-green-500"
                    : index === currentQuestionIndex
                      ? "bg-blue-500"
                      : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            <textarea
              placeholder="Tulis Jawaban kamu disini"
              className="flex h-40 max-h-40 w-full justify-start overflow-auto rounded-sm border p-2"
            ></textarea>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {/* Previous Button */}
          {currentQuestionIndex > 0 && (
            <button
              onClick={moveToPreviousQuestion}
              className="flex items-center rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* Next/Submit Button */}
          {currentQuestionIndex < questions.length - 1
            ? // Next button for non-last questions
              selectedAnswers[currentQuestion.id] && (
                <button
                  onClick={moveToNextQuestion}
                  className="ml-auto flex items-center rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
                >
                  <ArrowRight size={20} />
                </button>
              )
            : // Submit button only on last question when all answered
              isAllQuestionsAnswered && (
                <Link
                  href={`/class/${id}/selesai`}
                  className="ml-auto flex items-center rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
                >
                  <span className="mr-2">Kirim Jawaban</span>
                  <Send size={20} />
                </Link>
              )}
        </div>
      </div>
    </div>
  );
}
