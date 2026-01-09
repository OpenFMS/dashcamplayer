import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="DashcamPlayer" className="w-6 h-6 rounded" />
            <span className="font-medium text-foreground">DashcamPlayer</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} DashcamPlayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
