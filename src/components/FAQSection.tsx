import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa itu Sampahin Apps?",
      answer:
        "Sampahin Apps adalah aplikasi digital berbasis komunitas yang menghubungkan rumah tangga, pemulung/pengepul, dan bank sampah lokal. Melalui aplikasi ini, pengguna bisa menukar sampah terpilah menjadi poin yang bernilai ekonomis.",
    },
    {
      question: "Bagaimana cara mendaftar di Sampahin Apps?",
      answer:
        "Anda bisa mendaftar melalui aplikasi Android/iOS atau menghubungi tim kami via WhatsApp. Proses pendaftaran sangat mudah dan hanya membutuhkan data diri dasar serta lokasi tempat tinggal.",
    },
    {
      question: "Jenis sampah apa saja yang bisa ditukar?",
      answer:
        "Sampahin menerima berbagai jenis sampah terpilah seperti plastik, kertas, kardus, botol kaca, kaleng, dan sampah elektronik. Setiap jenis sampah memiliki nilai poin yang berbeda.",
    },
    {
      question: "Bagaimana cara menukar poin menjadi reward?",
      answer:
        "Poin yang terkumpul dapat ditukar langsung melalui aplikasi. Reward yang tersedia meliputi sembako, pulsa, voucher belanja UMKM, dan berbagai kebutuhan sehari-hari lainnya.",
    },
    {
      question: "Apakah ada minimal sampah untuk dijemput?",
      answer:
        "Untuk efisiensi penjemputan, kami menyarankan minimal 2kg sampah terpilah. Namun, Anda juga bisa mengantarkan langsung ke bank sampah mitra terdekat kapan saja.",
    },
    {
      question: "Berapa lama proses penjemputan sampah?",
      answer:
        "Setelah Anda melakukan request penjemputan, tim pengepul akan menjemput dalam waktu 1-3 hari kerja tergantung lokasi dan jadwal yang tersedia di wilayah Anda.",
    },
    {
      question: "Apakah Sampahin tersedia di seluruh Indonesia?",
      answer:
        "Saat ini Sampahin fokus di area Lampung dan sekitarnya. Kami terus melakukan ekspansi ke wilayah lain. Hubungi kami jika Anda tertarik membawa Sampahin ke kota Anda!",
    },
    {
      question: "Bagaimana jika saya ingin menjadi mitra bank sampah?",
      answer:
        "Kami sangat terbuka untuk kemitraan! Hubungi tim kami melalui WhatsApp atau email untuk mendiskusikan peluang kerja sama sebagai mitra bank sampah atau pengepul.",
    },
  ];

  return (
    <section id="faq" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <HelpCircle size={16} />
            <span>FAQ</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pertanyaan yang{" "}
            <span className="text-gradient">Sering Diajukan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban untuk pertanyaan umum tentang Sampahin Apps. Masih
            ada pertanyaan? Jangan ragu untuk menghubungi kami!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
