import { link } from "fs";
import { Book, Users, Calendar, Clock } from "lucide-react";

export const questions = [
  {
    id: 1,
    text: "Ibukota Indonesia?",
    options: ["London", "Jakarta", "Paris", "Madrid"],
  },
  {
    id: 2,
    text: "Planet Merah di Tata Surya?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
  },
  {
    id: 3,
    text: "Yang Ngelukis Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
  },
  {
    id: 4,
    text: "Hewan tercepat di darat?",
    options: ["Cheetah", "Kuda", "Harimau", "Singa"],
  },
  {
    id: 5,
    text: "Ibukota Jepang?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
  },
  {
    id: 6,
    text: "Siapa penemu lampu pijar?",
    options: [
      "Alexander Graham Bell",
      "Thomas Alva Edison",
      "Nikola Tesla",
      "Benjamin Franklin",
    ],
  },
  {
    id: 7,
    text: "Lambang kimia air?",
    options: ["H2O", "O2", "CO2", "NaCl"],
  },
  {
    id: 8,
    text: "Gunung tertinggi di dunia?",
    options: ["Kilimanjaro", "Everest", "Elbrus", "Denali"],
  },
  {
    id: 9,
    text: "Berapa jumlah sisi pada segitiga?",
    options: ["3", "4", "5", "6"],
  },
  {
    id: 10,
    text: "Siapa presiden pertama Indonesia?",
    options: ["Soekarno", "Soeharto", "Joko Widodo", "B.J. Habibie"],
  },
];


export const classes = [
  {
    title: "Pengantar Web Developer",
    description: "Materi React.Js",
    classRoom: 1
  },
  {
    title: "Dasar Pemrograman JavaScript",
    description: "Materi Pemula",
    classRoom: 2
  },
  {
    title: "Pengembangan Frontend dengan Next.js",
    description: "Materi Intermediate",
    classRoom: 3
  },
  {
    title: "Backend dengan Node.js",
    description: "Materi Fullstack",
    classRoom: 4
  },
  {
    title: "Membangun REST API",
    description: "Materi Lanjutan",
    classRoom: 5
  },
  {
    title: "Pemrograman Berorientasi Objek",
    description: "Materi Java dan Python",
    classRoom: 6
  },
  {
    title: "Pengelolaan Database dengan MySQL",
    description: "Materi Backend",
    classRoom: 7
  },
  {
    title: "Dasar-Dasar Docker",
    description: "Materi DevOps",
    classRoom: 8
  },
  {
    title: "Deploy Aplikasi dengan Vercel",
    description: "Materi Deployment",
    classRoom: 9
  },
  {
    title: "Pengantar Testing dengan Jest",
    description: "Materi QA",
    classRoom: 10
  },
];

export const initialStudents = [
  { id: 1, name: "Ahmad Santoso", progress: 75, subject: "Matematika", lastActivity: "2 jam yang lalu", status: "active" },
  { id: 2, name: "Siti Rahmah", progress: 92, subject: "Fisika", lastActivity: "1 hari yang lalu", status: "active" },
  { id: 3, name: "Budi Prakoso", progress: 45, subject: "Kimia", lastActivity: "3 jam yang lalu", status: "warning" },
  { id: 4, name: "Diana Putri", progress: 88, subject: "Biologi", lastActivity: "5 jam yang lalu", status: "active" },
  { id: 5, name: "Eka Saputra", progress: 67, subject: "Matematika", lastActivity: "10 menit yang lalu", status: "active" },
  { id: 6, name: "Fahmi Hakim", progress: 34, subject: "Fisika", lastActivity: "3 hari yang lalu", status: "warning" },
  { id: 7, name: "Gita Anggraini", progress: 90, subject: "Kimia", lastActivity: "30 menit yang lalu", status: "active" },
  { id: 8, name: "Hadi Pratama", progress: 72, subject: "Biologi", lastActivity: "2 jam yang lalu", status: "active" },
  { id: 9, name: "Indah Lestari", progress: 56, subject: "Matematika", lastActivity: "1 minggu yang lalu", status: "warning" },
  { id: 10, name: "Joko Susilo", progress: 49, subject: "Fisika", lastActivity: "6 hari yang lalu", status: "warning" },
  { id: 11, name: "Kiki Amelia", progress: 85, subject: "Kimia", lastActivity: "20 menit yang lalu", status: "active" },
  { id: 12, name: "Lukman Hakim", progress: 62, subject: "Biologi", lastActivity: "4 jam yang lalu", status: "active" },
  { id: 13, name: "Maya Sari", progress: 78, subject: "Matematika", lastActivity: "2 hari yang lalu", status: "active" },
  { id: 14, name: "Nina Rahayu", progress: 40, subject: "Fisika", lastActivity: "8 jam yang lalu", status: "warning" },
  { id: 15, name: "Oscar Bastian", progress: 94, subject: "Kimia", lastActivity: "15 menit yang lalu", status: "active" },
  { id: 16, name: "Putri Maharani", progress: 69, subject: "Biologi", lastActivity: "2 hari yang lalu", status: "active" },
  { id: 17, name: "Qori Ramadhan", progress: 30, subject: "Matematika", lastActivity: "1 bulan yang lalu", status: "danger" },
  { id: 18, name: "Rizki Pranata", progress: 85, subject: "Fisika", lastActivity: "3 jam yang lalu", status: "active" },
  { id: 19, name: "Salsa Anindya", progress: 91, subject: "Kimia", lastActivity: "10 menit yang lalu", status: "active" },
  { id: 20, name: "Tomi Gunawan", progress: 57, subject: "Biologi", lastActivity: "1 hari yang lalu", status: "warning" },
  { id: 21, name: "Umar Hadi", progress: 80, subject: "Matematika", lastActivity: "4 jam yang lalu", status: "active" },
  { id: 22, name: "Vina Lestari", progress: 49, subject: "Fisika", lastActivity: "2 minggu yang lalu", status: "warning" },
  { id: 23, name: "Wawan Setiawan", progress: 88, subject: "Kimia", lastActivity: "5 menit yang lalu", status: "active" },
  { id: 24, name: "Xena Agustina", progress: 74, subject: "Biologi", lastActivity: "3 jam yang lalu", status: "active" },
  { id: 25, name: "Yoga Pratama", progress: 32, subject: "Matematika", lastActivity: "1 bulan yang lalu", status: "danger" },
  { id: 26, name: "Zahra Amalia", progress: 95, subject: "Fisika", lastActivity: "2 menit yang lalu", status: "active" },
  { id: 27, name: "Adi Kurniawan", progress: 60, subject: "Kimia", lastActivity: "6 jam yang lalu", status: "active" },
  { id: 28, name: "Beni Aprianto", progress: 48, subject: "Biologi", lastActivity: "1 minggu yang lalu", status: "warning" },
  { id: 29, name: "Citra Dewi", progress: 87, subject: "Matematika", lastActivity: "15 menit yang lalu", status: "active" },
  { id: 30, name: "Dani Syahputra", progress: 45, subject: "Fisika", lastActivity: "3 minggu yang lalu", status: "warning" },
  { id: 31, name: "Ely Susanti", progress: 92, subject: "Kimia", lastActivity: "30 menit yang lalu", status: "active" },
  { id: 32, name: "Farhan Saputra", progress: 55, subject: "Biologi", lastActivity: "2 hari yang lalu", status: "warning" },
  { id: 33, name: "Gilang Permana", progress: 83, subject: "Matematika", lastActivity: "7 jam yang lalu", status: "active" },
  { id: 34, name: "Hana Kartika", progress: 38, subject: "Fisika", lastActivity: "1 bulan yang lalu", status: "danger" },
  { id: 35, name: "Iman Wicaksono", progress: 89, subject: "Kimia", lastActivity: "1 jam yang lalu", status: "active" },
  { id: 36, name: "Junaidi Putra", progress: 61, subject: "Biologi", lastActivity: "3 hari yang lalu", status: "active" },
  { id: 37, name: "Kirana Dewi", progress: 79, subject: "Matematika", lastActivity: "5 jam yang lalu", status: "active" },
  { id: 38, name: "Lia Sari", progress: 42, subject: "Fisika", lastActivity: "10 hari yang lalu", status: "warning" },
  { id: 39, name: "Miko Adriansyah", progress: 93, subject: "Kimia", lastActivity: "10 menit yang lalu", status: "active" },
  { id: 40, name: "Novi Susanti", progress: 63, subject: "Biologi", lastActivity: "2 jam yang lalu", status: "active" },
  { id: 41, name: "Oki Firmansyah", progress: 51, subject: "Matematika", lastActivity: "1 minggu yang lalu", status: "warning" },
  { id: 42, name: "Putra Pradana", progress: 85, subject: "Fisika", lastActivity: "4 jam yang lalu", status: "active" },
  { id: 43, name: "Qisthi Ramadhani", progress: 29, subject: "Kimia", lastActivity: "1 bulan yang lalu", status: "danger" },
  { id: 44, name: "Rina Sulastri", progress: 81, subject: "Biologi", lastActivity: "3 jam yang lalu", status: "active" },
  { id: 45, name: "Sandi Hermanto", progress: 46, subject: "Matematika", lastActivity: "2 minggu yang lalu", status: "warning" },
  { id: 46, name: "Tina Kartini", progress: 87, subject: "Fisika", lastActivity: "20 menit yang lalu", status: "active" },
  { id: 47, name: "Uci Suryani", progress: 58, subject: "Kimia", lastActivity: "5 hari yang lalu", status: "warning" },
  { id: 48, name: "Vito Prasetyo", progress: 96, subject: "Biologi", lastActivity: "10 menit yang lalu", status: "active" },
  { id: 49, name: "Wahyu Ramadhan", progress: 68, subject: "Matematika", lastActivity: "3 jam yang lalu", status: "active" },
  { id: 50, name: "Xaverius Timotius", progress: 37, subject: "Fisika", lastActivity: "1 bulan yang lalu", status: "danger" }
];


export const stats = [
  { label: "Total Siswa", value: "50", icon: Users, link: "guru/nilai" },
  { label: "Total Soal", value: "5", icon: Book, link: "guru/soal" },
  { label: "Total Mata Kuliah", value: "12", icon: Book, link: "" },
  { label: "Menuju Semester Baru", value: "3 Bulan", icon: Calendar, link: "" },
  { label: "Rata-rata Kehadiran", value: "89%", icon: Clock, link: "" },
];

export const moduleData = [
  { number: 1, title: "Pengenalan Dasar" },
  { number: 2, title: "Konsep Fundamental" },
  { number: 3, title: "Strategi Lanjutan" },
  { number: 4, title: "Praktik Terapan" },
  { number: 5, title: "Studi Kasus" },
  { number: 6, title: "Proyek Akhir" },
  { number: 7, title: "Pengembangan Profesional" },
  { number: 8, title: "Refleksi dan Evaluasi" },
];