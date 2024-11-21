"use client";

import { questions } from "@/constant";
import { Send, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function ExamSection({ id }: { id: string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isAllQuestionsAnswered = questions.length === Object.keys(selectedAnswers).length;

  return (
    <div className="min-h-screen">
      <div className="w-full  p-4">
        {/* Progress Indicator */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </div>
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index < currentQuestionIndex
                  ? 'bg-green-500'
                  : index === currentQuestionIndex
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerChange(currentQuestion.id, option)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${selectedAnswers[currentQuestion.id] === option
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
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
        <div className="mt-8 flex justify-between items-center">
          {/* Previous Button */}
          {currentQuestionIndex > 0 && (
            <button
              onClick={moveToPreviousQuestion}
              className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* Next/Submit Button */}
          {currentQuestionIndex < questions.length - 1 ? (
            // Next button for non-last questions
            selectedAnswers[currentQuestion.id] && (
              <button
                onClick={moveToNextQuestion}
                className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors ml-auto"
              >
                <ArrowRight size={20} />
              </button>
            )
          ) : (
            // Submit button only on last question when all answered
            isAllQuestionsAnswered && (
              <Link
                href={`/class/${id}/selesai`}
                className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors ml-auto"
              >
                <span className="mr-2">Kirim Jawaban</span>
                <Send size={20} />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}