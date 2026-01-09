import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dashcam Player
              <br />
              <span className="text-primary">& GPS Viewer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              The ultimate tool for viewing and analyzing your dashcam footage with integrated GPS data visualization.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToDownload}
              className="gap-2 text-base px-8 py-6"
            >
              <Download className="w-5 h-5" />
              Download Now
            </Button>
          </div>
          
          {/* Right side - Product screenshot */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="DashcamPlayer interface showing video playback with GPS route visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
