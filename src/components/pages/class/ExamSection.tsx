"use client";

import { questions } from "@/static";
import {
  Send,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
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
      <div className="w-full p-1">
        {/* Progress Indicator */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-gray-600">
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </div>
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index < currentQuestionIndex
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
                className={`w-full rounded-lg border p-4 text-left transition-all duration-300 ${selectedAnswers[currentQuestion.id] === option
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
  const [remainingTime, setRemainingTime] = useState(3600); // 1 jam ujian
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Otomatis submit jika waktu habis
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle jawaban essay
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

  // Format waktu menjadi menit:detik
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Hitung persentase jawaban yang telah diisi
  const calculateCompletionPercentage = () => {
    const answeredQuestions = Object.keys(selectedAnswers).length;
    return Math.round((answeredQuestions / questions.length) * 100);
  };

  // Handler untuk submit otomatis
  const handleAutoSubmit = () => {
    // Redirect ke halaman selesai atau lakukan submit
    window.location.href = `/class/${id}/selesai`;
  };

  // Konfirmasi submit
  const handleSubmitConfirmation = () => {
    setIsConfirmModalOpen(true);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isAllQuestionsAnswered =
    questions.length === Object.keys(selectedAnswers).length;

  return (
    <div>
      {/* Timer dan Progress */}
      {/* <div className="sticky top-0 z-20 mt-2 rounded-md bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div
              className={`text font-bold ${remainingTime <= 600 ? "text-red-500" : "text-blue-600"}`}
            >
              ⏱️ {formatTime(remainingTime)}
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2.5 w-32 rounded-full bg-gray-200">
                <div
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: `${calculateCompletionPercentage()}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">
                {calculateCompletionPercentage()}%
              </span>
            </div>
          </div>
          <div className="text-gray-600">
            {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>
      </div> */}

      {/* Konten Utama */}
      <div className="container mx-auto mt-8">
        {/* Question */}
        <div className="">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {/* {currentQuestion.text} */}
            Masukan Soal kamu disini 👇
          </h2>

          <div className="space-y-4">
            <textarea
              placeholder="Tulis Jawaban kamu disini"
              value={selectedAnswers[currentQuestion.id] || ""}
              onChange={(e) =>
                handleAnswerChange(currentQuestion.id, e.target.value)
              }
              className="flex h-40 max-h-60 w-full justify-start overflow-auto rounded-lg border p-4 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />

            {/* Indikator Panjang Jawaban */}
            <div className="flex justify-between text-sm text-gray-600">
              {/* <span>
                Panjang Jawaban:{" "}
                {(selectedAnswers[currentQuestion.id] || "").length} karakter
              </span> */}
              {(selectedAnswers[currentQuestion.id] || "").length < 3 && (
                <span className="flex items-center text-yellow-600">
                  <AlertCircle size={16} className="mr-1" />
                  Jawaban terlalu pendek
                </span>
              )}
            </div>
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
              <ArrowLeft size={20} className="mr-2" /> Sebelumnya
            </button>
          )}

          {/* Next/Submit Button */}
          <div className="ml-auto flex space-x-4">
            {currentQuestionIndex < questions.length - 1
              ? // Next button for non-last questions
              selectedAnswers[currentQuestion.id] && (
                <button
                  onClick={moveToNextQuestion}
                  className="flex items-center rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
                >
                  Selanjutnya <ArrowRight size={20} className="ml-2" />
                </button>
              )
              : // Submit button only on last question when all answered
              isAllQuestionsAnswered && (
                <button
                  onClick={handleSubmitConfirmation}
                  className="ml-auto flex items-center rounded-lg bg-green-600 px-6 py-3 text-white transition-colors hover:bg-green-700"
                >
                  <span className="mr-2">Kirim Jawaban</span>
                  <Send size={20} />
                </button>
              )}
          </div>
        </div>
      </div>

      {/* Konfirmasi Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2">
          <div className="w-full max-w-md rounded-lg bg-white p-8">
            <h2 className="mb-4 text-center text-2xl font-bold">
              Konfirmasi Pengiriman
            </h2>
            <p className="mb-6 text-center">
              Apakah Anda yakin ingin mengirim jawaban? Anda tidak dapat
              mengubah jawaban setelah dikirim.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="rounded-lg bg-gray-200 px-6 py-3 text-gray-800 hover:bg-gray-300"
              >
                Batalkan
              </button>
              <Link
                href={`/class/${id}/selesai`}
                className="flex items-center rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
              >
                Ya, Kirim <Send size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function EssayExamSectionTeacher({ id }: { id: string }) {
  const [questionText, setQuestionText] = useState('');
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // Handler untuk konfirmasi submit
  const handleSubmitConfirmation = () => {
    if (questionText.trim().length >= 10) {  // Minimal 10 karakter untuk soal
      setIsConfirmModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Upload Soal</h1>
          <p className="mt-2 text-gray-600">
            Masukkan soal yang akan dikerjakan oleh siswa
          </p>
        </div>

        {/* Question Input Section */}
        <div className="">
          <div className="space-y-4">
            <div>
              <label htmlFor="question" className="mb-2 block text-sm font-medium text-gray-700">
                Soal
              </label>
              <textarea
                id="question"
                placeholder="Contoh: Jelaskan proses fotosintesis dan faktor-faktor yang mempengaruhinya..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="min-h-[200px] w-full rounded-lg border border-gray-300 p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Validation Indicator */}
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-gray-600">
                {questionText.length} karakter
              </span>
              {questionText.length < 10 && (
                <span className="flex items-center text-yellow-600 text-[12px]">
                  <AlertCircle size={12} className="mr-1" />
                  Soal terlalu pendek (minimum 10 karakter)
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSubmitConfirmation}
              disabled={questionText.length < 10}
              className={`flex items-center rounded-lg px-6 py-3 text-white transition-all
                ${questionText.length < 10
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              <span className="mr-2">Upload Soal</span>
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-center text-xl font-bold text-gray-900">
              Konfirmasi Upload Soal
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Apakah Anda yakin ingin mengupload soal ini?
              Pastikan soal sudah sesuai karena tidak dapat diubah setelah diupload.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="rounded-lg bg-gray-100 px-6 py-2 text-gray-700 hover:bg-gray-200"
              >
                Batalkan
              </button>
              <Link
                href={`/class/${id}/selesai`}
                className="flex items-center rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
              >
                Ya, Upload <Send size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
