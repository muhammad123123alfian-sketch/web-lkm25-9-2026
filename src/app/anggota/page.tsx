"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Instagram, Linkedin, Search, Star } from "lucide-react";

// 1. Interface Member
interface Member {
  id: string;
  name: string;
  npm?: string | number;
  info: string;
  role?: string;
  linkedin?: string;
  instagram?: string;
  imageUrl?: string; 
}

// 2. Data Mentor (Hanya Instagram sesuai request)
const staticMentors: Member[] = [
  { 
    id: "M1", 
    name: "Alif Tsabitul'Azmi Juanda", 
    info: "Informatika '24", 
    role: "Mentor",
    instagram: "https://instagram.com/aliftsabitula", 
    imageUrl: "/images/mentors/alif.jpg" 
  },
  { 
    id: "M2", 
    name: "Bunga Rylla", 
    info: "Informatika '24", 
    role: "Mentor",
    instagram: "https://instagram.com/bungarylla",
    imageUrl: "/images/mentors/bunga.jpg" 
  },
];

// 3. Data Anggota (Lengkap dengan LinkedIn)
const staticMembers: Member[] = [
  { id: "1", name: "Nathanael Firla Putra Lumbantobing", npm: "257006111075", info: "Informatika '25", role: "Ketua Kelompok", linkedin: "https://www.linkedin.com/in/nathanael-firla-putra-lumbantobing-24360a405", imageUrl: "/images/members/nathanael.jpg" },
  { id: "2", name: "Rafli Adriana Saputra", npm: "257006111004", info: "Informatika '25", role: "Anggota", linkedin: "#", imageUrl: "/images/members/rafli.jpg" },
  { id: "3", name: "Oktya Salsabella", npm: "257006111209", info: "Informatika '25", role: "Anggota", linkedin: "https://www.linkedin.com/in/oktyasalsabella", imageUrl: "/images/members/oktya.jpg" },
  { id: "4", name: "Tesah Haerani", npm: "257006111132", info: "Informatika '25", role: "Anggota", linkedin: "https://www.linkedin.com/in/tesah-haerani-428737392", imageUrl: "/images/members/tesah.jpg" },
  { id: "5", name: "Muhammad Rizi Fadilillah", npm: "257006111157", info: "Informatika '25", role: "Anggota", linkedin: "https://www.linkedin.com/in/rizki-fadlillah-062957280", imageUrl: "/images/members/rizi.jpg" },
  { id: "6", name: "Salsalbila", npm: "25700611113", info: "Informatika '25", role: "Anggota", linkedin: "https://www.linkedin.com/in/salsabila-15ab07374", imageUrl: "/images/members/salsabila.jpg" },
  { id: "7", name: "Muhamad Alfian Holidi", npm: "257006111136", info: "Informatika '25", role: "Anggota", linkedin: "#", imageUrl: "/images/members/alfian.jpg" },
  { id: "8", name: "Archen Ribiam Putra Sapaat", npm: "257006111133", info: "Informatika '25", role: "Anggota", linkedin: "https://www.linkedin.com/in/archen-ribiam-putra-sapaat-aknp-300614405/", imageUrl: "/images/members/archen.jpg" },
  { id: "9", name: "Andre Manika", npm: "257006111213", info: "Informatika '25", role: "Anggota", linkedin: "#", imageUrl: "/images/members/andre.jpg" },
  { id: "10", name: "Muhamad Rifqi Revanza", npm: "257006111204", info: "Informatika '25", role: "Anggota", linkedin: "#", imageUrl: "/images/members/rifqi.jpg" },
];

const AnggotaPage = () => {
  const [search, setSearch] = useState("");

  const filteredMembers = staticMembers.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.npm?.toString().includes(search)
  );

  const MemberCard = ({ member, index, isMentor = false }: { member: Member, index: number, isMentor?: boolean }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1 }}
      className={`bg-card border ${isMentor ? 'border-primary/40 shadow-lg shadow-primary/10' : 'border-border'} rounded-[40px] p-6 group relative overflow-hidden`}
    >
      {isMentor && (
        <div className="absolute top-5 right-5 bg-primary text-white p-2 rounded-full z-20">
          <Star size={16} className="fill-white" />
        </div>
      )}

      {/* Foto Profile Section */}
      <div className="relative w-full aspect-[4/5] bg-muted rounded-[30px] overflow-hidden mb-6">
        {member.imageUrl ? (
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=512`;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <Users size={60} className="text-muted-foreground opacity-20" />
          </div>
        )}

        {/* Hover Overlay Logic */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 z-10 backdrop-blur-[4px]">
          <div className="flex gap-4">
            {isMentor ? (
              // Tombol Instagram untuk Mentor
              member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-[#e4405f] rounded-full hover:scale-110 transition-all shadow-xl">
                  <Instagram size={28} />
                </a>
              )
            ) : (
              // Tombol LinkedIn untuk Anggota
              member.linkedin && member.linkedin !== "#" && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white text-[#0077b5] rounded-full hover:scale-110 transition-all shadow-xl">
                  <Linkedin size={28} fill="currentColor" />
                </a>
              )
            )}
          </div>
          <p className="text-white text-[11px] font-black uppercase tracking-[0.2em]">
            View {isMentor ? 'Instagram' : 'LinkedIn'}
          </p>
        </div>
      </div>
      
      {/* Informasi Text */}
      <div className="text-center px-2">
        <h3 className="text-xl font-bold mb-1 line-clamp-1 group-hover:text-primary transition-colors">{member.name}</h3>
        <p className="text-primary/60 font-mono text-xs mb-4 tracking-wider">{member.npm || "MENTOR"}</p>
        
        <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold mb-4 border ${
          isMentor ? 'bg-primary text-white border-primary' : 'bg-secondary text-muted-foreground border-border'
        }`}>
          {isMentor ? 'GROUP MENTOR' : 'GROUP MEMBER'}
        </div>
        
        <p className="text-muted-foreground font-medium text-xs tracking-tight">{member.info}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter italic">
              TEAM<span className="text-primary">LKM.</span>
            </h1>
            <p className="text-muted-foreground text-lg">Informatika Angkatan 2026 — Official Group</p>
          </motion.div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search member..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card py-4 pl-12 pr-6 rounded-2xl border border-border focus:border-primary outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Mentor Section (Selalu Tampil) */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black uppercase tracking-widest">Our Mentors</h2>
            <div className="h-[1px] flex-1 bg-border"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staticMentors.map((mentor, index) => (
              <MemberCard key={mentor.id} member={mentor} index={index} isMentor={true} />
            ))}
          </div>
        </section>

        {/* Member Section (Langsung Tampil Lengkap) */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black uppercase tracking-widest">Our Members</h2>
            <div className="h-[1px] flex-1 bg-border"></div>
            <span className="text-xs font-bold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {filteredMembers.length} Person
            </span>
          </div>
          
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-[40px] border border-dashed border-border">
              <p className="text-muted-foreground italic">No member found matching your search.</p>
            </div>
          )}
        </section>
        
      </div>
    </div>
  );
};

export default AnggotaPage;
