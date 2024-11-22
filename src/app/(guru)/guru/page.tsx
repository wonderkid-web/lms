"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import { ChevronRight, Search } from "lucide-react";
import { initialStudents, stats } from "@/static";
import { getProgressColor, getStatusColor } from "@/helper";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState(initialStudents);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setStudents(initialStudents);
    } else {
      const filteredStudents = initialStudents.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.subject.toLowerCase().includes(query),
      );
      setStudents(filteredStudents);
    }
  };

  return (
    <Container>
      <Header text="Selamat Datang Guru" />

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="rounded-full bg-blue-50 p-3">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Students List Section */}
      <div className="max-w-full overflow-auto relative">
        <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm w-[75vh] sm:min-w-full">
          <div className="mb-6 flex items-center justify-between relative">
            <h2 className="text-xl font-bold text-gray-900">Daftar Siswa</h2>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Cari nama siswa atau mata kuliah..."
                className="w-64 rounded-lg border py-2 pl-10 pr-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Nama Siswa
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Progress
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Mata Kuliah
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                    Aktivitas Terakhir
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                            <span className="font-medium text-gray-600">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <span className="font-medium text-gray-900">
                            {student.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="w-full max-w-xs">
                          <div className="flex items-center">
                            <div className="mr-2 h-2.5 w-full rounded-full bg-gray-200">
                              <div
                                className={`h-2.5 rounded-full ${getProgressColor(student.progress)}`}
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {student.progress}%
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {student.subject}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(student.status)}`}
                        >
                          {student.status === "active"
                            ? "Aktif"
                            : "Perlu Perhatian"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {student.lastActivity}
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-blue-500 hover:text-blue-700">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-gray-500">
                      Tidak ada siswa yang ditemukan dengan kata kunci "
                      {searchQuery}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
}
