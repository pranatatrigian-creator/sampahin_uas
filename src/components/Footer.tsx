import { Heart, Recycle } from "lucide-react";
import logo from "@/assets/sampahin-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-soft py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sampahin Apps"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div>
              <span className="font-display font-bold text-lg">Sampahin Apps</span>
              <p className="text-xs text-muted-foreground">
                Ubah Sampah Jadi Poin
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#tentang"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Tentang
            </a>
            <a
              href="#fitur"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Fitur
            </a>
            <a
              href="#cara-kerja"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cara Kerja
            </a>
            <a
              href="#harga"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Harga
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#kontak"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Kontak
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Sampahin Apps</span>
            <span className="mx-1">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-primary fill-primary" /> for
              <Recycle size={14} className="text-primary ml-1" /> Earth
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
