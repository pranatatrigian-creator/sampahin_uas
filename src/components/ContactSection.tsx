import { MessageCircle, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sampahin-logo.jpeg";

const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* CTA Card */}
          <div className="gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground text-center shadow-strong mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Siap Mengubah Sampah Menjadi Poin?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan keluarga Indonesia yang sudah merasakan
              manfaat pengelolaan sampah berkelanjutan bersama Sampahin Apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-card text-primary hover:bg-card/90 shadow-medium"
                asChild
              >
                <a
                  href="https://wa.me/62082171504401"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Hubungi via WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="https://instagram.com/sampahin.apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2" size={20} />
                  Follow Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt="Sampahin Apps"
                  className="w-14 h-14 rounded-xl object-cover shadow-soft"
                />
                <div>
                  <h3 className="font-display font-bold text-xl">
                    Sampahin Apps
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ubah Sampah Jadi Poin
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Kami siap membantu Anda memulai perjalanan pengelolaan sampah
                yang lebih baik. Hubungi kami kapan saja untuk pertanyaan atau
                kerja sama.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/62082171504401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span>082171504401</span>
                </a>

                <a
                  href="https://instagram.com/sampahin.apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Instagram size={18} className="text-primary" />
                  </div>
                  <span>@sampahin.apps</span>
                </a>

                <a
                  href="mailto:pranatatrigian@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span>pranatatrigian@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span>Lampung, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-card rounded-2xl p-6 shadow-soft">
              <h4 className="font-display font-semibold text-lg mb-4">
                Tim Kami
              </h4>
              <div className="space-y-4">
                {[
                  { name: "Ainy Dwi Mukhty", role: "Team Member" },
                  { name: "Nadara Fana Puspita", role: "Team Member" },
                  { name: "Trigian Pranata", role: "Team Member" },
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{member.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Mahasiswa S1 Informatika Universitas Bandar Lampung yang
                  memiliki ketertarikan pada bidang teknologi informasi dan
                  pengembangan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
