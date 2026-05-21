import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import QRDecodeUploader from "@/components/qr/QRDecodeUploader";
import QRGeneratorForm from "@/components/qr/QRGeneratorForm";
import WebcamScanner from "@/components/qr/WebcamScanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground) transition-colors">
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <Navbar />

        <HeroSection />

        <div className="grid gap-6 lg:grid-cols-2">
          <QRGeneratorForm />
          <QRDecodeUploader />
        </div>

        <div className="mt-6">
          <WebcamScanner />
        </div>

        <Footer />
      </section>
    </main>
  );
}