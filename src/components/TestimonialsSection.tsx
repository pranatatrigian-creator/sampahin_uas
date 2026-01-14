import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Layanan ini sangat membantu efisiensi kerja tim kami! Pengelolaan sampah jadi lebih terorganisir dan memberikan nilai tambah bagi lingkungan.",
      name: "Andi",
      role: "CEO Startup X",
      rating: 5,
    },
    {
      quote:
        "User interface-nya sangat mudah dipahami bahkan untuk pemula. Saya bisa langsung mulai memilah sampah dan mengumpulkan poin dalam hitungan menit!",
      name: "Siti",
      role: "Freelancer",
      rating: 5,
    },
    {
      quote:
        "Sampahin Apps memberikan solusi nyata untuk masalah sampah di lingkungan kami. Warga RT jadi lebih peduli dengan pengelolaan sampah.",
      name: "Pak Budi",
      role: "Ketua RT 05",
      rating: 5,
    },
    {
      quote:
        "Sebagai ibu rumah tangga, saya senang bisa mendapatkan penghasilan tambahan dari sampah rumah tangga. Poin yang terkumpul bisa ditukar sembako!",
      name: "Bu Dewi",
      role: "Ibu Rumah Tangga",
      rating: 5,
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            <Quote size={16} />
            <span>Testimoni</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Apa Kata <span className="text-gradient">Pengguna Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dengarkan pengalaman langsung dari pengguna yang telah merasakan
            manfaat Sampahin Apps dalam kehidupan sehari-hari.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote
                  size={40}
                  className="absolute -top-2 -left-2 text-primary/10"
                />
                <p className="text-muted-foreground relative z-10 pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
