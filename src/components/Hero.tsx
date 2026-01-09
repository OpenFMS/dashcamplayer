import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
          
          {/* Right side - Product screenshot placeholder */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-video bg-muted rounded-xl border border-border overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <p className="text-sm">Product Screenshot</p>
                  <p className="text-xs mt-1">Upload your image to replace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
