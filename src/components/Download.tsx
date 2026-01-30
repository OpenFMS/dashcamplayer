import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Apple, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

interface DownloadInfo {
  url: string;
  label: string;
  fileName: string;
  size: string;
}

interface DownloadsData {
  version: string;
  releaseDate: string;
  releaseNotes: string;
  downloads: {
    macos_arm64: DownloadInfo;
    macos_x64: DownloadInfo;
    windows: DownloadInfo;
  };
}

const DownloadSection = () => {
  const [data, setData] = useState<DownloadsData | null>(null);

  useEffect(() => {
    fetch("/downloads.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load downloads.json:", err));
  }, []);

  if (!data) {
    return (
      <section id="download" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading download information...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="download" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Download DashcamPlayer
          </h2>
          <p className="text-lg text-muted-foreground">
            Available for macOS and Windows
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto gap-3 px-8 py-6 text-base"
          >
            <a href={data.downloads.macos_arm64.url} download>
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">macOS (Apple Silicon)</div>
                <div className="text-xs opacity-80">{data.downloads.macos_arm64.size}</div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto gap-3 px-8 py-6 text-base"
          >
            <a href={data.downloads.macos_x64.url} download>
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">macOS (Intel)</div>
                <div className="text-xs opacity-80">{data.downloads.macos_x64.size}</div>
              </div>
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto gap-3 px-8 py-6 text-base"
          >
            <a href={data.downloads.windows.url} download>
              <Monitor className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">Windows</div>
                <div className="text-xs opacity-60">{data.downloads.windows.size}</div>
              </div>
            </a>
          </Button>
        </div>

        {/* Version info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Version {data.version} · Released {data.releaseDate}
            {" · "}
            <Link to="/release" className="text-primary hover:underline">
              More Info
            </Link>
          </p>
          <p className="mt-1">{data.releaseNotes}</p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
