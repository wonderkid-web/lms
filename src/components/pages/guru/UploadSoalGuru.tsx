"use client";
import { sleep } from "@/helper";
import { AlertCircle, Send, Link } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function UploadSoalGuru() {
  const [questionText, setQuestionText] = useState("");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleSubmit = async () => {
    const loading = toast.loading("Mengupload Soal...");
    await sleep(800);
    toast.dismiss(loading);
    toast.success("Keren, Soal baru berhasil di buat!");
  };

  // Handler untuk konfirmasi submit
  const handleSubmitConfirmation = () => {
    if (questionText.trim().length >= 10) {
      // Minimal 10 karakter untuk soal
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
              <label
                htmlFor="question"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Soal
              </label>
              <textarea
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
                <span className="flex items-center text-[12px] text-yellow-600">
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
              className={`flex items-center rounded-lg px-6 py-3 text-white transition-all ${
                questionText.length < 10
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
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
              Apakah Anda yakin ingin mengupload soal ini? Pastikan soal sudah
              sesuai karena tidak dapat diubah setelah diupload.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="rounded-lg bg-gray-100 px-6 py-2 text-gray-700 hover:bg-gray-200"
              >
                Batalkan
              </button>
              <button
                onClick={() => handleSubmit()}
                className="flex items-center rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
              >
                Ya, Upload <Send size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
