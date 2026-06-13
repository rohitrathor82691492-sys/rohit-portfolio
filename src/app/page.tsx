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
  // Map folder names to category keys used by the frontend
  const folderToCategoryMap: Record<string, string> = {
    "logo-design": "logo-design",
    "visual-identity": "visual-identity",
    "social-media": "social-media",
    "print-design": "print-design",
    "posters": "print-design", // map posters folder to print-design category
    "banners": "print-design",  // map banners folder to print-design category
    "ai-creatives": "ai-creatives",
  };

  const scannedImages: ScannedImage[] = [];
  const publicPath = path.join(process.cwd(), "public");

  Object.entries(folderToCategoryMap).forEach(([folder, category]) => {
    const dirPath = path.join(publicPath, "images", folder);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      files.forEach((file, index) => {
        // Match standard web image formats
        if (/\.(png|jpe?g|webp|svg|gif)$/i.test(file)) {
          // Clean file names as readable titles, handling double extensions
          const titleWithoutExt = file.replace(/\.[^/.]+$/, "");
          const title = (titleWithoutExt.includes(".") ? titleWithoutExt.replace(/\.[^/.]+$/, "") : titleWithoutExt)
            .replace(/[_-]/g, " ") // Remove dashes/underscores
            .trim();

          scannedImages.push({
            id: `img-${folder}-${index}`,
            src: `/images/${folder}/${file}`,
            category: category,
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
