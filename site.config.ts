import type { SiteConfig } from "@/lib/types";

const g = (n: number, width: number, height: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width, height, alt, caption, href });

export const site: SiteConfig = {
  name: "Signature by Fulya Catering",
  tagline: "Private Turkish catering and homemade desserts in Toronto and Mississauga, with halal, vegan and vegetarian options.",
  category: "Turkish private catering",
  schemaType: "FoodEstablishment",
  area: "Toronto and Mississauga, ON",
  siteUrl: "https://signature-by-fulya.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#8a5a3b" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Private catering, authentic flavours",
    headline: "Turkish flavours for your special moments",
    subhead: "Homemade Turkish dishes and desserts for birthdays, baby showers, gender reveals and family gatherings in Toronto and Mississauga. Send a DM for pricing and custom orders.",
    images: [
      { src: "/images/post-1.jpg", alt: "Kadayif Dolmasi with pistachio" },
      { src: "/images/post-2.jpg", alt: "Catered table set for a gender reveal party" },
      { src: "/images/post-8.jpg", alt: "Turkish vegetarian meze platter" },
    ],
    secondaryCta: { label: "See the food", href: "#gallery" },
  },

  highlights: ["Halal options", "Vegan and vegetarian options", "Toronto and Mississauga", "Custom orders by DM"],

  about: {
    title: "Made with love, served with care",
    body: [
      "Signature by Fulya Catering brings authentic Turkish home cooking to your table, from hand rolled borek and handmade manti to slow roasted lamb and classic desserts like Kadayif Dolmasi and Sutlac.",
      "Every detail matters when you are hosting. Beautiful food, thoughtful presentation, and a table prepared with love, with halal, vegan and vegetarian options for every guest.",
    ],
    image: { src: "/images/post-9.jpg", alt: "Slow roasted lamb leg" },
  },

  menu: {
    label: "Menu",
    title: "What we make",
    variant: "list",
    showPrices: false,
    priceNote: "Contact us for pricing and custom orders.",
    groups: [
      {
        title: "Savoury",
        items: [
          { name: "Homemade Turkish Durum wraps", description: "Soft homemade flatbread, fresh vegetables and flavourful sauces" },
          { name: "Manti", description: "Handmade dumplings with seasoned beef, garlic yogurt and butter sauce" },
          { name: "Hand rolled Borek", description: "Crispy, golden, with savoury fillings" },
          { name: "Vegetarian meze platter", description: "Saksuka, mucver, haydari and more", veg: true },
          { name: "Slow roasted lamb leg", description: "Herbs, garlic and aromatic seasonings" },
        ],
      },
      {
        title: "Sweets and bakes",
        items: [
          { name: "Kadayif Dolmasi", description: "Walnut filled shredded pastry in syrup" },
          { name: "Sutlac", description: "Creamy Turkish rice pudding" },
          { name: "Cheesecake" },
          { name: "Vanilla bean cupcakes" },
          { name: "Herb focaccia" },
        ],
      },
      {
        title: "Events",
        items: [
          { name: "Party and event catering", description: "Birthdays, baby showers, gender reveals and special gatherings" },
        ],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      g(1, 1080, 1436, "Kadayif Dolmasi", "Kadayif Dolmasi", "https://www.instagram.com/p/De-cjFhAPfi/"),
      g(2, 1080, 810, "Catered party table", "Ready for the party", "https://www.instagram.com/p/De5PHl-mfM7/"),
      g(10, 1080, 1435, "Cheesecake with berries", "Cheesecake", "https://www.instagram.com/p/Dao-5UJg6MS/"),
      g(8, 1080, 1435, "Vegetarian meze platter", "Vegetarian meze platter", "https://www.instagram.com/p/Da5y993xTWz/"),
      g(9, 1080, 1080, "Slow roasted lamb leg", "Slow roasted lamb leg", "https://www.instagram.com/p/Da3ErpjRILW/"),
      g(11, 640, 1136, "Hand rolled borek", "Hand rolled borek", "https://www.instagram.com/p/Dan2fo9RVfN/"),
      g(3, 640, 1136, "Homemade Turkish durum", "Homemade durum", "https://www.instagram.com/p/DcbcAgJxadp/"),
      g(6, 540, 960, "Sutlac rice pudding", "Sutlac", "https://www.instagram.com/p/Da_KnJDpwHu/"),
      g(12, 1080, 1435, "Herb focaccia", "Herb focaccia", "https://www.instagram.com/p/Dae7YtBpvmV/"),
    ],
  },

  instagram: { handle: "signaturebyfulya", embeds: [] },

  order: {
    label: "How to order",
    title: "Plan your menu in a quick DM",
    intro: "Orders and catering inquiries are taken by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Signature by Fulya! I would like to ask about an order.\nDate:\nNumber of guests or servings:\nDishes or desserts:\nOccasion and any dietary needs (halal, vegan, vegetarian):\nPickup or delivery area:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Do you have halal, vegan and vegetarian options?", a: "Yes. Halal, vegan and vegetarian options are available. Let us know your guests' needs when you message." },
    { q: "Which areas do you serve?", a: "We cater in Toronto and Mississauga." },
    { q: "How much does catering cost?", a: "Pricing depends on your menu and guest count. Send a DM for pricing and custom orders." },
  ],

  contact: {
    title: "Contact",
    area: "Toronto and Mississauga, Ontario",
    socials: [],
  },

  seo: {
    title: "Signature by Fulya Catering | Turkish catering in Toronto and Mississauga",
    description: "Private Turkish catering and homemade desserts in Toronto and Mississauga with halal, vegan and vegetarian options. Send a DM for pricing and custom orders.",
    keywords: ["Turkish catering Toronto", "Turkish catering Mississauga", "halal catering Mississauga", "private catering Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
