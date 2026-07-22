export type ProductCategory = "featured" | "signature";

export type Product = {
  slug: string;
  name: string;
  notes: string;
  price: number;
  category: ProductCategory;
  placeholder: string;
  image: string;
  imagePosition?: string;
};

export const products: Product[] = [
  {
    slug: "noir-absolu",
    name: "Noir Absolu",
    notes: "Oud, black pepper, amber",
    price: 285,
    category: "featured",
    placeholder: "Drop Noir Absolu bottle photo",
    image:
      "https://images.unsplash.com/photo-1598634222670-87c5f558119c?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "velvet-oud",
    name: "Velvet Oud",
    notes: "Rose, saffron, sandalwood",
    price: 310,
    category: "featured",
    placeholder: "Drop Velvet Oud bottle photo",
    image:
      "https://images.unsplash.com/photo-1508771400123-e194ad75c0e3?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "blanc-ambre",
    name: "Blanc Ambré",
    notes: "Vanilla, white musk, amber",
    price: 265,
    category: "featured",
    placeholder: "Drop Blanc Ambré bottle photo",
    image:
      "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=900&q=80&auto=format&fit=crop",
    imagePosition: "70% 45%",
  },
  {
    slug: "rose-eclat",
    name: "Rose Éclat",
    notes: "Bulgarian rose, iris, cedar",
    price: 295,
    category: "featured",
    placeholder: "Drop Rose Éclat bottle photo",
    image:
      "https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "santal-nuit",
    name: "Santal Nuit",
    notes: "Top: bergamot · Heart: sandalwood · Base: musk",
    price: 250,
    category: "signature",
    placeholder: "Drop Santal Nuit photo",
    image:
      "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?w=900&q=80&auto=format&fit=crop",
    imagePosition: "50% 45%",
  },
  {
    slug: "jasmin-dore",
    name: "Jasmin Doré",
    notes: "Top: mandarin · Heart: jasmine · Base: amber",
    price: 275,
    category: "signature",
    placeholder: "Drop Jasmin Doré photo",
    image:
      "https://images.unsplash.com/photo-1589493732575-11a963a7c415?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "cuir-royal",
    name: "Cuir Royal",
    notes: "Top: pink pepper · Heart: leather · Base: vetiver",
    price: 320,
    category: "signature",
    placeholder: "Drop Cuir Royal photo",
    image:
      "https://images.unsplash.com/photo-1749264361617-dbe17a223f54?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "fleur-de-sel",
    name: "Fleur de Sel",
    notes: "Top: bergamot · Heart: salt accord · Base: driftwood",
    price: 260,
    category: "signature",
    placeholder: "Drop Fleur de Sel photo",
    image:
      "https://images.unsplash.com/photo-1709662369877-187c3420cc7d?w=900&q=80&auto=format&fit=crop",
  },
];
