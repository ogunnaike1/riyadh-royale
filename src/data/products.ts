export type ProductCategory = "featured" | "signature";

export type Product = {
  slug: string;
  name: string;
  notes: string;
  price: number;
  category: ProductCategory;
  placeholder: string;
};

export const products: Product[] = [
  {
    slug: "noir-absolu",
    name: "Noir Absolu",
    notes: "Oud, black pepper, amber",
    price: 285,
    category: "featured",
    placeholder: "Drop Noir Absolu bottle photo",
  },
  {
    slug: "velvet-oud",
    name: "Velvet Oud",
    notes: "Rose, saffron, sandalwood",
    price: 310,
    category: "featured",
    placeholder: "Drop Velvet Oud bottle photo",
  },
  {
    slug: "blanc-ambre",
    name: "Blanc Ambré",
    notes: "Vanilla, white musk, amber",
    price: 265,
    category: "featured",
    placeholder: "Drop Blanc Ambré bottle photo",
  },
  {
    slug: "rose-eclat",
    name: "Rose Éclat",
    notes: "Bulgarian rose, iris, cedar",
    price: 295,
    category: "featured",
    placeholder: "Drop Rose Éclat bottle photo",
  },
  {
    slug: "santal-nuit",
    name: "Santal Nuit",
    notes: "Top: bergamot · Heart: sandalwood · Base: musk",
    price: 250,
    category: "signature",
    placeholder: "Drop Santal Nuit photo",
  },
  {
    slug: "jasmin-dore",
    name: "Jasmin Doré",
    notes: "Top: mandarin · Heart: jasmine · Base: amber",
    price: 275,
    category: "signature",
    placeholder: "Drop Jasmin Doré photo",
  },
  {
    slug: "cuir-royal",
    name: "Cuir Royal",
    notes: "Top: pink pepper · Heart: leather · Base: vetiver",
    price: 320,
    category: "signature",
    placeholder: "Drop Cuir Royal photo",
  },
  {
    slug: "fleur-de-sel",
    name: "Fleur de Sel",
    notes: "Top: bergamot · Heart: salt accord · Base: driftwood",
    price: 260,
    category: "signature",
    placeholder: "Drop Fleur de Sel photo",
  },
];
