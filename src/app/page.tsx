"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Users, BookOpen } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-32 mb-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent -z-10 blur-3xl opacity-50" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm mb-8 border border-primary/30"
          >
            <Star className="w-4 h-4 fill-primary" />
            <span>Angkatan 2026 ke-10</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight"
          >
            Membangun <span className="text-primary italic">Karakter</span> & <br />
            Semangat <span className="underline decoration-primary">Informatika</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Selamat datang di portal LKM Informatika 2026. Tempat kami belajar tentang Kepemimpinan, 
            Manajemen Organisasi, dan persiapan Pra-Aksi untuk masa depan.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/materi" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Lihat Materi <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/anggota" 
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/80 transition-colors border border-border"
            >
              Kenali Anggota
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Materi Overview */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Materi LKM</h2>
            <p className="text-muted-foreground text-lg">Tiga pilar utama pengembangan diri di LKM.</p>
          </div>
          <Link href="/materi" className="text-primary font-bold flex items-center gap-2 hover:underline">
            Semua Materi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Kepemimpinan",
              desc: "Mempelajari seni memimpin diri sendiri dan orang lain dengan integritas.",
              icon: <Star className="w-8 h-8 text-primary" />,
              color: "bg-primary/10"
            },
            {
              title: "Organisasi",
              desc: "Manajemen tim, struktur organisasi, dan efektivitas kerja kelompok.",
              icon: <Users className="w-8 h-8 text-accent" />,
              color: "bg-accent/10"
            },
            {
              title: "Pra-Aksi",
              desc: "Implementasi nyata dari teori kepemimpinan dalam kegiatan lapangan.",
              icon: <Shield className="w-8 h-8 text-emerald-500" />,
              color: "bg-emerald-500/10"
            }
          ].map((materi, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="group p-10 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${materi.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {materi.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{materi.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {materi.desc}
              </p>
              <Link href={`/materi/${materi.title.toLowerCase()}`} className="font-bold flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Pelajari <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Anggota */}
      <section className="bg-secondary/30 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Profil Anggota</h2>
            <p className="text-muted-foreground text-lg">Berkenalan dengan tim hebat di balik LKM 2026.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <motion.div 
                key={n}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative w-full aspect-square bg-muted rounded-3xl overflow-hidden mb-6 group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-primary-foreground font-black">Informatika '26</p>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Users size={64} opacity={0.3} />
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-1">Anggota Tim {n}</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">Mahasiswa</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/anggota" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
              Lihat Semua Anggota <Users className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
