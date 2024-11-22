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

export const stats = [
  { label: "Total Mata Kuliah", value: "12", icon: Book },
  { label: "Total Siswa", value: "156", icon: Users },
  { label: "Menuju Semester Baru", value: "3 Bulan", icon: Calendar },
  { label: "Rata-rata Kehadiran", value: "89%", icon: Clock },
];