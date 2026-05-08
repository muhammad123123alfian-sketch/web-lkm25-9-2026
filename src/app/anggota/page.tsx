"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Github, Instagram, Linkedin, Search } from "lucide-react";
import { memberService, Member } from "@/services/memberService";

const staticMembers: Member[] = [
  { id: "1", name: "Muhamad Alfian Holidi", role: "Ketua Kelompok", info: "Informatika '26" },
  { id: "2", name: "Anggota 2", role: "Sekretaris", info: "Informatika '26" },
  { id: "3", name: "Anggota 3", role: "Bendahara", info: "Informatika '26" },
  { id: "4", name: "Anggota 4", role: "Anggota", info: "Informatika '26" },
  { id: "5", name: "Anggota 5", role: "Anggota", info: "Informatika '26" },
  { id: "6", name: "Anggota 6", role: "Anggota", info: "Informatika '26" },
];

const AnggotaPage = () => {
  const [members, setMembers] = useState<Member[]>(staticMembers);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await memberService.getAllMembers();
        if (data && data.length > 0) {
          setMembers(data);
        }
      } catch (err) {
        console.error("Failed to fetch members", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-black mb-6 tracking-tighter">Profil Anggota</h1>
          <p className="text-muted-foreground text-xl">
            Bertemu dengan tim yang berdedikasi dalam menyelesaikan tugas LKM Informatika 2026.
          </p>
        </motion.div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cari anggota..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-secondary py-4 pl-12 pr-4 rounded-2xl border border-border focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMembers.map((member, index) => (
          <motion.div 
            key={member.id || member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-[40px] p-8 hover:shadow-2xl transition-all group"
          >
            <div className="relative w-full aspect-square bg-muted rounded-[30px] overflow-hidden mb-8">
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                <div className="flex gap-3">
                  <button aria-label="GitHub Profile" className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Github size={20} /></button>
                  <button aria-label="Instagram Profile" className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Instagram size={20} /></button>
                  <button aria-label="LinkedIn Profile" className="p-3 bg-background rounded-full hover:scale-110 transition-transform shadow-lg"><Linkedin size={20} /></button>
                </div>
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <Users size={80} className="text-muted-foreground opacity-20" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <div className="inline-block px-4 py-1 bg-primary/20 text-primary-foreground rounded-full text-sm font-bold mb-4 border border-primary/20">
                {member.role}
              </div>
              <p className="text-muted-foreground font-medium tracking-widest text-sm uppercase">{member.info}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnggotaPage;
