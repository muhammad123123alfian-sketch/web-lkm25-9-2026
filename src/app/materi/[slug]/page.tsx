"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Star, Users, Shield } from "lucide-react";
import Link from "next/link";

const materiContent: Record<string, any> = {
  kepemimpinan: {
    title: "Kepemimpinan (Leadership)",
    description: "Seni memimpin diri sendiri sebelum memimpin orang lain.",
    icon: <Star className="w-12 h-12 text-primary" />,
    color: "bg-primary/10",
    modules: [
      { id: 1, title: "Self Leadership & Discipline", duration: "45 mins" },
      { id: 2, title: "Etika & Integritas Pemimpin Informatika", duration: "60 mins" },
      { id: 3, title: "Komunikasi Efektif dalam Tim", duration: "30 mins" },
    ],
    longContent: "Kepemimpinan bukan sekadar jabatan, melainkan pengaruh. Dalam konteks Informatika, seorang pemimpin harus mampu menjembatani antara visi teknis dan kebutuhan manusiawi tim."
  },
  organisasi: {
    title: "Manajemen Organisasi",
    description: "Membangun sistem yang efisien dan kolaboratif.",
    icon: <Users className="w-12 h-12 text-accent" />,
    color: "bg-accent/10",
    modules: [
      { id: 1, title: "Struktur & Budaya Organisasi", duration: "50 mins" },
      { id: 2, title: "Manajemen Konflik & Solusi", duration: "40 mins" },
      { id: 3, title: "Efisiensi Kerja Kelompok", duration: "60 mins" },
    ],
    longContent: "Organisasi yang kuat lahir dari koordinasi yang rapi. Kita belajar bagaimana mengelola sumber daya dan dinamika tim agar mencapai tujuan bersama secara efektif."
  },
  "pra-aksi": {
    title: "Persiapan Pra-Aksi",
    description: "Strategi eksekusi lapangan yang matang.",
    icon: <Shield className="w-12 h-12 text-emerald-500" />,
    color: "bg-emerald-500/10",
    modules: [
      { id: 1, title: "Analisis SWOT & Kondisi Lapangan", duration: "45 mins" },
      { id: 2, title: "Manajemen Logistik & Operasional", duration: "55 mins" },
      { id: 3, title: "Mitigasi Risiko & Problem Solving", duration: "35 mins" },
    ],
    longContent: "Aksi tanpa rencana adalah kegagalan. Di sini kita membedah cara menyusun strategi yang taktis untuk menghadapi berbagai skenario di lapangan."
  }
};

const MateriDetail = () => {
  const params = useParams();
  const slug = params.slug as string;
  const content = materiContent[slug];

  if (!content) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-2xl font-bold">Materi tidak ditemukan</h1>
        <Link href="/materi" className="text-primary mt-4 inline-block">Kembali ke Daftar Materi</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <Link href="/materi" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Kembali ke Materi
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className={`w-20 h-20 ${content.color} rounded-3xl flex items-center justify-center mb-8`}>
              {content.icon}
            </div>
            <h1 className="text-5xl font-black mb-6 tracking-tighter">{content.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {content.description}
            </p>
          </motion.div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-6">Ringkasan Materi</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {content.longContent}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8">Modul Pembelajaran</h2>
            {content.modules.map((module: any) => (
              <div key={module.id} className="flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-sm">
                    {module.id}
                  </div>
                  <h3 className="font-bold text-lg">{module.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" /> {module.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-secondary/30 border border-border rounded-[40px] p-8 sticky top-32">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="text-primary w-6 h-6" /> Informasi Kursus
            </h3>
            <ul className="space-y-6">
              <li className="flex justify-between items-center pb-4 border-bottom border-border">
                <span className="text-muted-foreground">Tingkat</span>
                <span className="font-bold">Pemula - Menengah</span>
              </li>
              <li className="flex justify-between items-center pb-4 border-bottom border-border">
                <span className="text-muted-foreground">Total Waktu</span>
                <span className="font-bold">~3 Jam</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-muted-foreground">Sertifikat</span>
                <span className="font-bold">Tersedia</span>
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold mt-10 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
              Mulai Belajar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriDetail;
