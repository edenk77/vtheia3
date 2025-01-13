import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ApplicationLogo from "./application-logo"
import { IconReceipt2 } from '@tabler/icons-react';
import { IconBasketCheck } from '@tabler/icons-react';
import { Badge } from "@/components/ui/badge"
import { Link, NavLink } from "react-router-dom"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { ModeToggle } from "./mode-toggle"




export function SiteHeader() {
  return (
    // Commentaires : Ici c'est la conception du menu de manière frontend avec le css additionnel.

    <nav className="bg-black border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className=" w-full flex justify-between justify-items-center content-center  p-4">
        {/* Logo */}
        <NavLink className="flex items-center space-x-3 rtl:space-x-reverse" to={"/"}>
          <ApplicationLogo className="h-2" />
        </NavLink>
        {/* UL MENU */}
        <div className="flex gap-6 items-center">
          <div id="mega-menu-full-cta" className="items-center justify-between xl:flex lg:flex hidden w-full  md:w-auto">
            <ul className="flex text-white flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <NavLink to={"/"}>
                Accueil
              </NavLink>
              <NavLink to={"/catalogue"}>
                Catalogue
              </NavLink>
              <NavLink to={"/about"}>
                Qui sommes-nous
              </NavLink>
              <NavLink to={"/blog"}>
                Le blog
              </NavLink>
              <NavLink to={"/contact"}>
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
        {/* MENU RESPONSIVE */}
        <div className="flex gap-6 items-center">
          {/* <Input /> */}
          <div className="flex items-center gap-6">
            <Link to={"/wishlist"} className="text-white">
              <IconReceipt2 />
            </Link>
            <Link to={"/panier"} className="text-white">
              <IconBasketCheck />
            </Link>
            <ModeToggle />
            {/* AVATAR */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link to={"/login"}>Connexion</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to={"/register"}>S'inscrire</Link></DropdownMenuItem>
                <DropdownMenuItem><Link to={"/Contact"}>Paramètres</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* RESPONSIVE */}
          <Sheet>
            <SheetTrigger className="xl:hidden lg:hidden">
              <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetHeader className="pt-10">
                <div className="">
                  <NavLink to={"/"} className="text-2xl uppercase font-black">
                    Accueil
                  </NavLink>
                </div>
                <Separator className="my-4" />
                <div className="">
                  <NavLink to={"/Catalogue"} className="text-2xl uppercase font-black">
                    Catalogue
                  </NavLink>
                </div>
                <Separator className="my-4" />
                <div>
                  <NavLink to={"/About"} className="text-2xl uppercase font-black">
                    Qui sommes-nous
                  </NavLink>
                </div>
                <Separator className="my-4" />
                <div>
                  <NavLink to={"/Blog"} className="text-2xl uppercase font-black">
                    Le blog
                  </NavLink>
                </div>
                <Separator className="my-4" />

                <Separator className="my-4" />
                <div>
                  <NavLink to={"/Contact"} className="text-2xl uppercase font-black">
                    Contact
                  </NavLink>
                </div>

              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* BANNER PRODUITS ACCESSIBILTE */}
      <div className="relative isolate h-auto flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          {/* <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          /> */}
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          {/* <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          /> */}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>SMARTPHONES</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Ordinateurs</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Lecteurs d'écran</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Montres</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Tablettes</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Loupes</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Claviers</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Braille</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Lunettes</Link>
          </Badge>
          <Badge className="uppercase" variant={"outline"}>
            <Link to={"/Contact"}>Téléphones seniors</Link>
          </Badge>
        </div>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Fermer</span>
          </button>
        </div>
      </div>
    </nav >
  )
}
