import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="DashcamPlayer" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold text-lg text-foreground">DashcamPlayer</span>
        </div>
        
        <nav>
          <Button variant="ghost" onClick={scrollToDownload}>
            Download
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
