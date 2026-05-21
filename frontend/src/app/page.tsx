import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import QRDecodeUploader from "@/components/qr/QRDecodeUploader";
import QRGeneratorForm from "@/components/qr/QRGeneratorForm";
import WebcamScanner from "@/components/qr/WebcamScanner";
import AboutSection from "@/components/sections/AboutSection";
import ApiDocsSection from "@/components/sections/ApiDocsSection";
import TheorySection from "@/components/sections/TheorySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground) transition-colors">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-5">
        <section id="home" className="scroll-mt-24">
          <HeroSection />
        </section>

        <div className="space-y-6">
          <section id="generate" className="scroll-mt-24">
            <QRGeneratorForm />
          </section>

          <section id="decode" className="scroll-mt-24">
            <QRDecodeUploader />
          </section>

          <section id="webcam" className="scroll-mt-24">
            <WebcamScanner />
          </section>

          <section id="theory" className="scroll-mt-24">
            <TheorySection />
          </section>

          <section id="api" className="scroll-mt-24">
            <ApiDocsSection />
          </section>

          <section id="about" className="scroll-mt-24">
            <AboutSection />
          </section>
        </div>

        <Footer />
      </section>
    </main>
  );
}