"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Star, Users, Shield, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const materiContent: Record<string, any> = {
  kepemimpinan: {
    title: "Kepemimpinan (Leadership)",
    description: "Seni memimpin diri sendiri sebelum memimpin orang lain.",
    icon: <Star className="w-12 h-12 text-primary" />,
    color: "bg-primary/10",
    pemateri: { name: "Kak Ridwan", role: "Ketua Himpunan 2024", info: "Informatika '24" },
    moderator: { name: "Kak Sarah", role: "Sekretaris Umum", info: "Informatika '24" },
    longContent: "Kepemimpinan bukan sekadar jabatan, melainkan pengaruh. Dalam konteks Informatika, seorang pemimpin harus mampu menjembatani antara visi teknis dan kebutuhan manusiawi tim."
  },
  organisasi: {
    title: "Manajemen Organisasi",
    description: "Membangun sistem yang efisien and kolaboratif.",
    icon: <Users className="w-12 h-12 text-accent" />,
    color: "bg-accent/10",
    pemateri: { name: "Kak Sarah", role: "Sekretaris Umum", info: "Informatika '24" },
    moderator: { name: "Kak Budi", role: "Koor. Lapangan", info: "Informatika '25" },
    longContent: "Organisasi yang kuat lahir dari koordinasi yang rapi. Kita belajar bagaimana mengelola sumber daya dan dinamika tim agar mencapai tujuan bersama secara efektif."
  },
  "pra-aksi": {
    title: "Persiapan Pra-Aksi",
    description: "Strategi eksekusi lapangan yang matang.",
    icon: <Shield className="w-12 h-12 text-emerald-500" />,
    color: "bg-emerald-500/10",
    pemateri: { name: "Kak Budi", role: "Koor. Lapangan", info: "Informatika '25" },
    moderator: { name: "Kak Ridwan", role: "Ketua Himpunan 2024", info: "Informatika '24" },
    longContent: "Aksi tanpa rencana adalah kegagalan. Di sini kita membedah cara menyusun strategi yang taktis untuk menghadapi berbagai scenerio di lapangan."
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
            <h2 className="text-2xl font-bold mb-8">Detail Pembahasan</h2>
            <div className="p-10 bg-card border border-border rounded-[40px] hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-6">Materi Utama</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {content.longContent}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="space-y-8 sticky top-32">
            {/* Pemateri Card */}
            <div className="bg-card border border-border rounded-[40px] p-8 group">
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-bold mb-6 block text-center">Pemateri</span>
              <div className="relative w-full aspect-square bg-muted rounded-[30px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                  <div className="flex gap-3">
                    <button aria-label="GitHub Profile" className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Github size={20} /></button>
                    <button aria-label="Instagram Profile" className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Instagram size={20} /></button>
                    <button aria-label="LinkedIn Profile" className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Linkedin size={20} /></button>
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <Users size={60} className="text-muted-foreground opacity-20" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{content.pemateri.name}</h3>
                <div className="inline-block px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-xs font-bold mb-3 border border-primary/20">
                  {content.pemateri.role}
                </div>
                <p className="text-muted-foreground font-medium tracking-widest text-[10px] uppercase">{content.pemateri.info}</p>
              </div>
            </div>

            {/* Moderator Card */}
            <div className="bg-card border border-border rounded-[40px] p-8 group">
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-bold mb-6 block text-center">Moderator</span>
              <div className="relative w-full aspect-square bg-muted rounded-[30px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                  <div className="flex gap-3">
                    <button aria-label="GitHub Profile" className="p-2 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Github size={16} /></button>
                    <button aria-label="Instagram Profile" className="p-2 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Instagram size={16} /></button>
                    <button aria-label="LinkedIn Profile" className="p-2 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Linkedin size={16} /></button>
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  <Users size={60} className="text-muted-foreground opacity-20" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{content.moderator.name}</h3>
                <div className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold mb-3 border border-border">
                  {content.moderator.role}
                </div>
                <p className="text-muted-foreground font-medium tracking-widest text-[10px] uppercase">{content.moderator.info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriDetail;
