import {
  Smartphone,
  MapPin,
  Gift,
  Bell,
  BookOpen,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Aplikasi Android/iOS",
      description:
        "Akses mudah melalui smartphone untuk mengelola sampah rumah tangga Anda kapan saja.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: MapPin,
      title: "Pelacakan GPS",
      description:
        "Lacak lokasi pengepul dan bank sampah terdekat dengan teknologi GPS yang akurat.",
      color: "from-rose-500 to-pink-400",
    },
    {
      icon: Gift,
      title: "Sistem Poin Reward",
      description:
        "Tukarkan sampah menjadi poin yang bisa ditukar dengan sembako, pulsa, atau voucher UMKM.",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Bell,
      title: "Notifikasi Pengingat",
      description:
        "Dapatkan pengingat jadwal pengangkutan dan tips pengelolaan sampah setiap hari.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "Edukasi Harian",
      description:
        "Pelajari cara memilah sampah dengan benar melalui konten edukasi yang menarik.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Transaksi Aman",
      description:
        "Sistem transaksi yang aman dan transparan untuk setiap penukaran sampah.",
      color: "from-rose-500 to-pink-400",
    },
  ];

  return (
    <section id="fitur" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Smartphone size={16} />
            <span>Fitur Unggulan</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Fitur yang Memudahkan{" "}
            <span className="text-gradient">Pengelolaan Sampah</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nikmati berbagai fitur canggih yang memudahkan Anda dalam mengelola
            sampah rumah tangga dan mendapatkan keuntungan ekonomis.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-soft`}
              >
                <feature.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="gradient-cta shadow-medium" asChild>
            <a href="#kontak">
              Lihat Semua Fitur
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
