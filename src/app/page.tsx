import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Gallery, { ScannedImage } from "@/components/Gallery";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Server-side directory scanner function
function scanGalleryFolders(): ScannedImage[] {
  const folders = ["logo-design", "social-media", "posters", "banners", "ai-creatives"];
  const scannedImages: ScannedImage[] = [];

  const publicPath = path.join(process.cwd(), "public");

  folders.forEach((folder) => {
    const dirPath = path.join(publicPath, "images", folder);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      files.forEach((file, index) => {
        // Match standard web image formats
        if (/\.(png|jpe?g|webp|svg|gif)$/i.test(file)) {
          // Clean file names as readable titles
          const title = file
            .replace(/\.[^/.]+$/, "") // Remove extension
            .replace(/[_-]/g, " ") // Remove dashes/underscores
            .trim();

          scannedImages.push({
            id: `img-${folder}-${index}`,
            src: `/images/${folder}/${file}`,
            category: folder,
            title: title || "Design Work",
          });
        }
      });
    }
  });

  return scannedImages;
}

export default function Home() {
  const scannedImages = scanGalleryFolders();

  return (
    <div className="relative min-h-screen bg-[#070707] text-white">
      {/* Floating Header Navigation */}
      <Navbar />

      <main className="relative w-full">
        {/* Sticky Canvas & Parallax Overlay Section */}
        <ScrollyCanvas>
          <Overlay />
        </ScrollyCanvas>

        {/* About Section (Editorial Layout - About, Education, Languages) */}
        <About />

        {/* Skills Section (Adobe & AI Progress Bars) */}
        <Skills />

        {/* Masonry Case Study Gallery with Lightbox (Scanned Dynamically) */}
        <Gallery images={scannedImages} />

        {/* Professional Experience Section */}
        <Experience />

        {/* Interactive Luxury Contact Form & Details */}
        <ContactForm />
      </main>

      {/* Boutique Agency Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
