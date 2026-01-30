import { useEffect, useState } from "react";
import { marked } from "marked";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const Release = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/release.md")
      .then((res) => res.text())
      .then((text) => {
        const html = marked.parse(text) as string;
        setContent(html);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load release notes:", err);
        setContent("<p>Failed to load release notes</p>");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-foreground">Release Notes</h1>
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center text-muted-foreground">Loading...</div>
            ) : (
              <ScrollArea className="h-[calc(100vh-280px)]">
                <div
                  className="prose prose-slate dark:prose-invert max-w-none p-6 bg-card rounded-lg border border-border"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </ScrollArea>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Release;
