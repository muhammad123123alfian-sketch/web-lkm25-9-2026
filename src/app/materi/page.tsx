"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const materials = [
  {
    title: "Kepemimpinan",
    desc: "Mempelajari esensi kepemimpinan dalam konteks mahasiswa Informatika. Meliputi self-leadership, integritas, dan visi.",
    icon: <Star className="w-10 h-10 text-primary" />,
    color: "bg-primary/10",
    slug: "kepemimpinan",
    topics: ["Self Leadership", "Etika & Integritas", "Visi & Misi"]
  },
  {
    title: "Organisasi",
    desc: "Memahami struktur organisasi, dinamika kelompok, dan manajemen konflik untuk mencapai tujuan bersama.",
    icon: <Users className="w-10 h-10 text-accent" />,
    color: "bg-accent/10",
    slug: "organisasi",
    topics: ["Struktur Organisasi", "Dinamika Kelompok", "Manajemen Konflik"]
  },
  {
    title: "Manajemen Aksi",
    desc: "Pemahaman dan persiapan aksi nyata di lapangan. Membahas mekanisme, perangkat, dan strategi merancang aksi.",
    icon: <Shield className="w-10 h-10 text-emerald-500" />,
    color: "bg-emerald-500/10",
    slug: "manajemen-aksi",
    topics: ["Mekanisme Aksi", "Perangkat Aksi", "Grand Issue"]
  }
];

const MateriPage = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-20"
      >
        <h1 className="text-5xl font-black mb-6 tracking-tighter">Materi LKM</h1>
        <p className="text-muted-foreground text-xl leading-relaxed">
          Eksplorasi materi utama yang menjadi landasan pengembangan karakter dan 
          kemampuan organisasi mahasiswa Informatika 2026.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {materials.map((materi, index) => (
          <motion.div 
            key={materi.slug}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center p-8 md:p-12 bg-card border border-border rounded-[40px] hover:border-primary/50 transition-colors"
          >
            <div className={`w-24 h-24 md:w-32 md:h-32 ${materi.color} rounded-[30px] flex items-center justify-center shrink-0`}>
              {materi.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">{materi.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {materi.desc}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {materi.topics.map(topic => (
                  <span key={topic} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {topic}
                  </span>
                ))}
              </div>
              <Link 
                href={`/materi/${materi.slug}`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Pelajari Detail <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MateriPage;
