import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Paket Basic",
      price: "Rp 50.000",
      period: "/bulan",
      description: "Cocok untuk pengguna rumah tangga pemula",
      features: [
        "Akses aplikasi dasar",
        "Penjemputan sampah 2x/bulan",
        "Tukar poin standar",
        "Edukasi dasar",
        "Notifikasi pengingat",
      ],
      popular: false,
    },
    {
      name: "Paket Pro",
      price: "Rp 150.000",
      period: "/bulan",
      description: "Untuk pengguna aktif dengan kebutuhan lebih",
      features: [
        "Semua fitur Basic",
        "Penjemputan sampah 4x/bulan",
        "Bonus poin 20%",
        "Akses konten premium",
        "Priority support",
        "Laporan bulanan detail",
        "Voucher eksklusif",
      ],
      popular: true,
    },
  ];

  return (
    <section id="harga" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Star size={16} />
            <span>Pilih Paket</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Harga yang <span className="text-gradient">Terjangkau</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket sudah
            termasuk akses ke fitur-fitur unggulan Sampahin Apps.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "gradient-hero text-primary-foreground shadow-strong scale-105"
                  : "bg-card shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-card text-primary rounded-full text-sm font-semibold shadow-medium">
                  Paling Populer
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`font-display text-xl font-bold mb-2 ${
                    plan.popular ? "" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? "opacity-90" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span
                    className={`${
                      plan.popular ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-card/20" : "bg-primary/10"
                      }`}
                    >
                      <Check
                        size={12}
                        className={plan.popular ? "" : "text-primary"}
                      />
                    </div>
                    <span
                      className={
                        plan.popular ? "" : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-card text-primary hover:bg-card/90"
                    : "gradient-cta"
                }`}
                size="lg"
                asChild
              >
                <a href="#kontak">Pilih Paket</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk penawaran
          khusus komunitas.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
