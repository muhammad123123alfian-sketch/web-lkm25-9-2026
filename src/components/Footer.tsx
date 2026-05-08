import React from "react";
import Link from "next/link";
import { Rocket, Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Rocket className="text-primary-foreground w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter">LKM 2026</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Website tugas LKM Informatika 2026. Platform untuk dokumentasi, 
              materi, dan profil anggota kelompok LKM (Kepemimpinan, Organisasi, Pra-Aksi).
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Materi LKM</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/materi/kepemimpinan" className="hover:text-primary transition-colors">Kepemimpinan</Link></li>
              <li><Link href="/materi/organisasi" className="hover:text-primary transition-colors">Organisasi</Link></li>
              <li><Link href="/materi/pra-aksi" className="hover:text-primary transition-colors">Pra-Aksi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Hubungi Kami</h4>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="p-3 bg-card rounded-full border border-border hover:bg-primary transition-all group">
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground" />
              </Link>
              <Link href="#" className="p-3 bg-card rounded-full border border-border hover:bg-primary transition-all group">
                <Github className="w-5 h-5 group-hover:text-primary-foreground" />
              </Link>
              <Link href="#" className="p-3 bg-card rounded-full border border-border hover:bg-primary transition-all group">
                <Mail className="w-5 h-5 group-hover:text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2026 LKM Informatika. Built with Next.js & Supabase.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
