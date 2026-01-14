import { Home, Truck, Building2, Coins, ArrowRight, ArrowDown } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Home,
      title: "Rumah Tangga",
      subtitle: "Pilah Sampah",
      description:
        "Pengguna memilah sampah di rumah sesuai kategori (plastik, kertas, organik, dll) menggunakan panduan edukasi dari aplikasi.",
      color: "bg-pink-500",
    },
    {
      icon: Truck,
      title: "Pemulung/Pengepul",
      subtitle: "Jemput Sampah",
      description:
        "Pemulung atau pengepul mitra akan menjemput sampah terpilah sesuai jadwal yang telah ditentukan melalui aplikasi.",
      color: "bg-rose-500",
    },
    {
      icon: Building2,
      title: "Bank Sampah",
      subtitle: "Proses & Nilai",
      description:
        "Bank sampah lokal menerima, menimbang, dan memberikan nilai poin berdasarkan jenis dan berat sampah yang dikumpulkan.",
      color: "bg-pink-600",
    },
    {
      icon: Coins,
      title: "Tukar Poin",
      subtitle: "Dapatkan Reward",
      description:
        "Poin yang terkumpul dapat ditukar dengan sembako, pulsa, voucher UMKM, atau kebutuhan sehari-hari lainnya.",
      color: "bg-rose-600",
    },
  ];

  return (
    <section id="cara-kerja" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <ArrowRight size={16} />
            <span>Cara Kerja</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Alur <span className="text-gradient">Sampahin Apps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ikuti langkah mudah berikut untuk mulai mengubah sampah rumah tangga
            Anda menjadi poin yang bernilai ekonomis.
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-medium z-10`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4 shadow-soft`}
                  >
                    <step.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {step.title}
                  </h3>
                  <div className="text-primary font-medium text-sm mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-24 -right-3 z-20">
                    <ArrowRight className="text-primary" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-4">
                {/* Step Number & Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center text-primary-foreground font-bold shadow-medium z-10`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 my-2" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-card rounded-2xl p-5 shadow-soft mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-soft`}
                    >
                      <step.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold">{step.title}</h3>
                      <div className="text-primary font-medium text-sm">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BMC Section */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Business Model Canvas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Customer Segments",
                items: [
                  "Rumah tangga (urban & sub-urban)",
                  "Bank sampah lokal",
                  "Pengepul/pemulung",
                  "UMKM/warung mitra",
                ],
              },
              {
                title: "Value Propositions",
                items: [
                  "Pengelolaan sampah praktis & menguntungkan",
                  "Akses sampah terpilah",
                  "Edukasi daur ulang",
                ],
              },
              {
                title: "Channels",
                items: [
                  "Aplikasi Android/iOS",
                  "Media sosial",
                  "Kerja sama RT/RW & kelurahan",
                ],
              },
              {
                title: "Revenue Streams",
                items: [
                  "Komisi transaksi poin",
                  "Iklan ramah lingkungan",
                  "Langganan premium komunitas",
                ],
              },
              {
                title: "Key Activities",
                items: [
                  "Pengembangan aplikasi",
                  "Edukasi pengguna",
                  "Koordinasi logistik",
                ],
              },
              {
                title: "Key Partnerships",
                items: [
                  "Pemerintah daerah (DLH)",
                  "Komunitas lingkungan",
                  "Startup logistik",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-5 shadow-soft border border-border"
              >
                <h4 className="font-display font-semibold text-primary mb-3">
                  {item.title}
                </h4>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
