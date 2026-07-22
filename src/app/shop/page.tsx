import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ShopContent } from "@/components/ShopContent";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shop All Fragrances | Aurélia Parfums",
  description:
    "Eight compositions, one atelier. Shop the full Aurélia Parfums collection, handcrafted in small batches in Grasse, France.",
};

export default function ShopPage() {
  return (
    <div className="relative">
      <Navbar />
      <ShopContent />
      <Footer />
    </div>
  );
}
