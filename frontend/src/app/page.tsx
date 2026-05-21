import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import QRDecodeUploader from "@/components/qr/QRDecodeUploader";
import QRGeneratorForm from "@/components/qr/QRGeneratorForm";
import WebcamScanner from "@/components/qr/WebcamScanner";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-(--background) text-(--foreground) transition-colors">
      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-5">
        <Navbar />

        <HeroSection />

        <div className="grid min-w-0 gap-6 lg:grid-cols-2">
          <div className="min-w-0">
            <QRGeneratorForm />
          </div>

          <div className="min-w-0">
            <QRDecodeUploader />
          </div>
        </div>

        <div className="mt-6 min-w-0">
          <WebcamScanner />
        </div>

        <Footer />
      </section>
    </main>
  );
}