import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

// interface MainNavProps {
//   items?: NavItem[]
// }

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10 ">
      <Link to="/home" className="flex items-center space-x-2">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
        <span className="inline-block font-bold text-white">{siteConfig.name}</span>
      </Link>

      <nav className="flex gap-6">
        <Link
          to="/"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground hover:text-white",
            " =opacity-80",
          )}
        >
          Accueil
        </Link>

        <Link
          to="/"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground hover:text-white",
            " opacity-80",
          )}
        >
          Catalogue
        </Link>

        <Link
          to="/"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground hover:text-white",
            " opacity-80",
          )}
        >
          Contact - FAQ
        </Link>

        <Link
          to="/"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground hover:text-white",
            " opacity-80",
          )}
        >
          A Propos
        </Link>

        <Link
          to="blog"
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground hover:text-white",
            " opacity-80",
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}
