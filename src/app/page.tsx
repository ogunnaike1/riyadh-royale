import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { BrandStory } from "@/components/BrandStory";
import { SignatureScents } from "@/components/SignatureScents";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <SignatureScents />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}
