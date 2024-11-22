"use client";
import React, { useState } from "react";
import Container from "@/component/layout/Container";
import Header from "@/component/layout/Header";
import { Book, Users, Calendar, Clock, ChevronRight, Search } from "lucide-react";

// Sample data - normally would come from API/database
const stats = [
  { label: "Total Mata Kuliah", value: "12", icon: Book },
  { label: "Total Siswa", value: "156", icon: Users },
  { label: "Menuju Semester Baru", value: "3 Bulan", icon: Calendar },
  { label: "Rata-rata Kehadiran", value: "89%", icon: Clock },
];

const initialStudents = [
  {
    id: 1,
    name: "Ahmad Santoso",
    progress: 75,
    subject: "Matematika",
    lastActivity: "2 jam yang lalu",
    status: "active"
  },
  {
    id: 2,
    name: "Siti Rahmah",
    progress: 92,
    subject: "Fisika",
    lastActivity: "1 hari yang lalu",
    status: "active"
  },
  {
    id: 3,
    name: "Budi Prakoso",
    progress: 45,
    subject: "Kimia",
    lastActivity: "3 jam yang lalu",
    status: "warning"
  },
  {
    id: 4,
    name: "Diana Putri",
    progress: 88,
    subject: "Biologi",
    lastActivity: "5 jam yang lalu",
    status: "active"
  },
];

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-green-500";
  if (progress >= 60) return "bg-yellow-500";
  return "bg-red-500";
};

const getStatusColor = (status: string) => {
  return status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";
};

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
      const filteredStudents = initialStudents.filter(student =>
        student.name.toLowerCase().includes(query) ||
        student.subject.toLowerCase().includes(query)
      );
      setStudents(filteredStudents);
    }
  };

  return (
    <Container>
      <Header text="Selamat Datang Guru" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Students List Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Daftar Siswa</h2>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Cari nama siswa atau mata kuliah..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Nama Siswa</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Progress</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Mata Kuliah</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Aktivitas Terakhir</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <span className="text-gray-600 font-medium">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full max-w-xs">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className={`h-2.5 rounded-full ${getProgressColor(student.progress)}`}
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">{student.progress}%</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{student.subject}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                        {student.status === 'active' ? 'Aktif' : 'Perlu Perhatian'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{student.lastActivity}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-700">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500">
                    Tidak ada siswa yang ditemukan dengan kata kunci "{searchQuery}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}