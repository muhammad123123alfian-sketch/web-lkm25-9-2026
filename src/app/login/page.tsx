"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";
import { Rocket, Mail, Lock, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) {
      setError("Authentication not initialized. Check your API keys.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (!auth) {
      setError("Authentication not initialized.");
      return;
    }
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Failed to login with Google");
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
          <h1 className="text-3xl font-black tracking-tighter">Selamat Datang</h1>
          <p className="text-muted-foreground mt-2">Masuk ke portal LKM Informatika 2026</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
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
            {loading ? "Memproses..." : "Masuk Sekarang"} <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-4 text-muted-foreground font-bold">Atau lanjut dengan</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 py-3 border border-border rounded-2xl hover:bg-secondary transition-colors"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" className="w-5 h-5" alt="Google" />
            <span className="text-sm font-bold">Google</span>
          </button>
          <button type="button" className="flex items-center justify-center gap-2 py-3 border border-border rounded-2xl hover:bg-secondary transition-colors">
            <Github className="w-5 h-5" />
            <span className="text-sm font-bold">GitHub</span>
          </button>
        </div>

        <p className="text-center mt-10 text-muted-foreground text-sm">
          Belum punya akun? <Link href="/register" className="text-primary font-bold hover:underline">Daftar di sini</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
