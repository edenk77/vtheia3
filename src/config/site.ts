export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Voytheia",
  description:
    "Le site e-commerce de l'accessibilité",
  mainNav: [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "Catalogue",
      href: "/",
    },
    {
      title: "Contact - FAQ",
      href: "/",
    },
    {
      title: "Panier",
      href: "/",
    },
    {
      title: "Wishlist",
      href: "/",
    },
    {
      title: "A Propos",
      href: "/",
    }
  ],
  links: {
    youtube: "https://youtube.com/@m6io",
    github: "https://github.com/m6io/shadcn-vite-template",
    docs: "https://ui.shadcn.com",
  },
}
