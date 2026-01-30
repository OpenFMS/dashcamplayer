import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleDownloadClick = () => {
    if (isHomePage) {
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="DashcamPlayer" className="w-8 h-8 rounded-lg" />
          <span className="font-semibold text-lg text-foreground">DashcamPlayer</span>
        </Link>
        
        <nav>
          <Button variant="ghost" onClick={handleDownloadClick}>
            Download
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
