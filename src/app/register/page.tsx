"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";
import { Rocket, Mail, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) {
      setError("Authentication not initialized.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 min-h-[80vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-card border border-border p-10 rounded-[40px] shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-primary/20 rounded-3xl mb-6">
            <Rocket className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter">Buat Akun</h1>
          <p className="text-muted-foreground mt-2">Gabung dengan komunitas LKM Informatika 2026</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Muhamad Alfian"
                className="w-full bg-secondary py-4 pl-12 pr-4 rounded-2xl border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full bg-secondary py-4 pl-12 pr-4 rounded-2xl border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-secondary py-4 pl-12 pr-4 rounded-2xl border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            {loading ? "Mendaftar..." : "Daftar Sekarang"} <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center mt-10 text-muted-foreground text-sm">
          Sudah punya akun? <Link href="/login" className="text-primary font-bold hover:underline">Masuk di sini</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
