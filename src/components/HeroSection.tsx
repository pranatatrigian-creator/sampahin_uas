import { ArrowRight, Recycle, Leaf, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sampahin-logo.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full opacity-50 animate-float" />
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-accent rounded-full opacity-40 animate-float-delayed" />
      <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-primary rounded-full opacity-60 animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <Recycle size={16} />
              <span>Kelola Sampah Jadi Lebih Mudah</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ubah Sampah Menjadi{" "}
              <span className="text-gradient">Poin Bernilai</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Sampahin Apps menghubungkan rumah tangga, pemulung, dan bank sampah 
              lokal untuk mengelola dan menukar sampah menjadi poin yang bernilai ekonomis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="gradient-cta shadow-strong text-lg px-8" asChild>
                <a href="#kontak">
                  Mulai Sekarang
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#cara-kerja">Pelajari Lebih Lanjut</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-primary">70Jt+</div>
                <div className="text-sm text-muted-foreground">Potensi Rumah Tangga</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-primary">16.8T</div>
                <div className="text-sm text-muted-foreground">Potensi Pasar/tahun</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl font-bold text-primary">8%</div>
                <div className="text-sm text-muted-foreground">Komisi Aplikasi</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl animate-pulse-soft" />
              
              {/* Main image */}
              <img
                src={logo}
                alt="Sampahin Apps"
                className="relative w-80 md:w-96 lg:w-[450px] rounded-3xl shadow-strong animate-float"
              />

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 glass rounded-2xl p-4 shadow-medium animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                    <Leaf className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Ramah Lingkungan</div>
                    <div className="text-xs text-muted-foreground">Berkelanjutan</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                    <Coins className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Tukar Poin</div>
                    <div className="text-xs text-muted-foreground">Sembako & Voucher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
