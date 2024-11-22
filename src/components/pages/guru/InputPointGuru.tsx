"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

const InputPointGuru = () => {
  const [point, setPoint] = useState(0);

  const handleIncrement = () => {
    if (point < 100) {
      setPoint(prev => Math.min(prev + 1, 100));
    }
  };

  const handleDecrement = () => {
    if (point > 0) {
      setPoint(prev => Math.max(prev - 1, 0));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 100) {
      setPoint(value);
    }
  };

  const handleSave = () => {
    toast('Nilai Siswa Berhasil Disimpan', {
      className: 'bg-green-400 text-white',
      duration: 5000,
    })
  };

  const getGradeColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getGradeText = (value: number) => {
    if (value >= 80) return "Sangat Baik";
    if (value >= 60) return "Cukup";
    return "Perlu Perbaikan";
  };

  const getTextColor = (value: number) => {
    if (value >= 80) return "text-green-600";
    if (value >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className=" bg-white border rounded-lg mx-2">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">Input Nilai Siswa</h2>
        <p className="text-sm text-gray-500 mt-1">
          Masukkan nilai antara 0-100 untuk menilai kinerja siswa
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Input Controls */}
        <div className="relative">
          <input
            type="number"
            value={point}
            onChange={handleInputChange}
            min={0}
            max={100}
            className="w-full py-2 text-center font-medium border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            /100
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${getGradeColor(point)}`}
              style={{ width: `${point}%` }}
            />
          </div>
          <div className="text-center mt-2">
            <span className={`text-sm font-medium ${getTextColor(point)}`}>
              {getGradeText(point)}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <button
          onClick={handleSave}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Simpan Nilai
        </button>
      </div>
    </div>
  );
};

export default InputPointGuru;