import { Target, Lightbulb, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const missions = [
    {
      icon: Users,
      title: "Membangun Konektivitas Digital",
      description:
        "Menghubungkan secara efisien antara rumah tangga, pemulung/pengepul, dan bank sampah lokal menggunakan teknologi digital.",
    },
    {
      icon: Heart,
      title: "Memberikan Nilai Ekonomi",
      description:
        "Mengubah persepsi masyarakat terhadap sampah dengan memberikan insentif berupa poin yang bernilai ekonomis.",
    },
    {
      icon: Lightbulb,
      title: "Edukasi Berkelanjutan",
      description:
        "Membangun kebiasaan memilah sampah melalui edukasi harian dan program loyalitas poin.",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <Target size={16} />
            <span>Tentang Kami</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Menciptakan Sistem Pengelolaan Sampah yang{" "}
            <span className="text-gradient">Mudah & Berkelanjutan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Visi utama Sampahin Apps adalah menciptakan sistem pengelolaan sampah
            yang mudah, bernilai ekonomi, dan berkelanjutan melalui teknologi
            digital berbasis komunitas.
          </p>
        </div>

        {/* Vision Card */}
        <div className="gradient-soft rounded-3xl p-8 md:p-12 mb-12 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Target size={14} />
                <span>Visi Kami</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Memulai Dampak Besar dari Langkah Kecil
              </h3>
              <p className="text-muted-foreground">
                Perubahan ini bertujuan untuk memulai dampak besar bagi
                lingkungan yang diawali dari langkah-langkah kecil di tingkat
                rumah tangga. Kami percaya bahwa setiap keluarga Indonesia dapat
                berkontribusi pada kelestarian lingkungan.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  70Jt
                </div>
                <div className="text-sm text-muted-foreground">
                  Rumah Tangga Indonesia
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  Rp20rb
                </div>
                <div className="text-sm text-muted-foreground">
                  Potensi/bulan per keluarga
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center col-span-2">
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  Rp16.8 Triliun
                </div>
                <div className="text-sm text-muted-foreground">
                  Nilai pasar nasional per tahun
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <mission.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {mission.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
