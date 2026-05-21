import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import QRDecodeUploader from "@/components/qr/QRDecodeUploader";
import QRGeneratorForm from "@/components/qr/QRGeneratorForm";
import WebcamScanner from "@/components/qr/WebcamScanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground) transition-colors">
      

      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-5">
        <HeroSection />

        <div className="space-y-6">
          <QRGeneratorForm />

          <QRDecodeUploader />

          <WebcamScanner />
        </div>

        <Footer />
      </section>
    </main>
  );
}