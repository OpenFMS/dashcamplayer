import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DownloadSection from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
