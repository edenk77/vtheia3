import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CartProvider } from '@/pages/store/cart-context'
import Collection from '@/pages/collection/collection'
import Panier from '@/pages/panier/panier'



const categories = [
    {
        id: 1,
        name: 'accessoires',
        title: 'Accessoires',
        htmlFor: 'accesoires',
    },
    {
        id: 2,
        name: 'braille',
        title: 'Braille',
        htmlFor: 'braille',
    },
    {
        id: 3,
        name: 'loupeelectronique',
        title: 'Loupe Eléctronique',
        htmlFor: 'loupeelectronique',
    },
    {
        id: 4,
        name: 'lunettesloupes',
        title: 'Lunettes Loupe',
        htmlFor: 'lunettesloupes',
    },
    {
        id: 5,
        name: 'montres',
        title: 'Montres',
        htmlFor: 'montres',
    },
    {
        id: 6,
        name: 'ordinateur',
        title: 'Ordinateur',
        htmlFor: 'ordinateur',
    },
    {
        id: 7,
        name: 'smartphones',
        title: 'Smartphones',
        htmlFor: 'smartphones',
    },
    {
        id: 8,
        name: 'tablettes',
        title: 'Tablettes',
        htmlFor: 'tablettes',
    },
    {
        id: 9,
        name: 'telephonesenior',
        title: 'Téléphones Senior',
        htmlFor: 'telephonesenior',
    },
    {
        id: 10,
        name: 'tout',
        title: 'Tout',
        htmlFor: 'tout',
    },
]

const data = [
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 400,
    },
    {
        goal: 500,
    },
    {
        goal: 600,
    },
    {
        goal: 700,
    },
    {
        goal: 800,
    },
    {
        goal: 900,
    },
    {
        goal: 1000,
    },
    {
        goal: 1100,
    },
    {
        goal: 1200,
    },
    {
        goal: 1300,
    },
    {
        goal: 1400,
    },
]

const marques = [
    {
        id: 1,
        name: 'braillesense',
        title: 'Braille Sense',
        htmlFor: 'braillesense',
    },
    {
        id: 2,
        name: 'clover3',
        title: 'Clover 3',
        htmlFor: 'clover3',
    },
    {
        id: 3,
        name: 'amelie',
        title: 'Amelie Loupe',
        htmlFor: 'amelie',
    },
    {
        id: 4,
        name: 'moni',
        title: 'Moni Loupe',
        htmlFor: 'moni',
    },
    {
        id: 5,
        name: 'reveal16',
        title: 'Reveal 16',
        htmlFor: 'reveal16',
    },
    {
        id: 6,
        name: 'explor',
        title: 'ExploR',
        htmlFor: 'explor',
    },
    {
        id: 7,
        name: 'ordissimo',
        title: 'Ordissimo',
        htmlFor: 'ordissimo',
    },
    {
        id: 8,
        name: 'apple',
        title: 'Apple',
        htmlFor: 'apple',
    },
    {
        id: 9,
        name: 'android',
        title: 'Android',
        htmlFor: 'android',
    },
    {
        id: 10,
        name: 'android',
        title: 'Android',
        htmlFor: 'android',
    },
    {
        id: 11,
        name: 'facitalab',
        title: 'FacitaLab',
        htmlFor: 'facitalab',
    },
    {
        id: 12,
        name: 'pixstar',
        title: 'PixStar',
        htmlFor: 'pixstar',
    },
    {
        id: 13,
        name: 'cl8000',
        title: 'CL8000',
        htmlFor: 'cl8000',
    },
    {
        id: 14,
        name: 'cl7000',
        title: 'CL8700',
        htmlFor: 'cl8700',
    },
    {
        id: 15,
        name: 'cl7000',
        title: 'CL8700',
        htmlFor: 'cl8700',
    },
    {
        id: 16,
        name: 'geemarc',
        title: 'GeeMarc',
        htmlFor: 'geemarc',
    },
    {
        id: 17,
        name: 'konrow',
        title: 'KonRow',
        htmlFor: 'konrow',
    },
    {
        id: 18,
        name: 'smartvision',
        title: 'Smartvision',
        htmlFor: 'smartvision',
    },

]

const couleurs = [
    {
        id: 1,
        name: 'rouge',
        title: 'Rouge',
        htmlFor: 'rouge',
    },
    {
        id: 2,
        name: 'bleu',
        title: 'Bleu',
        htmlFor: 'bleu',
    },
    {
        id: 3,
        name: 'noir',
        title: 'Noir',
        htmlFor: 'noir',
    },
    {
        id: 4,
        name: 'jaune',
        title: 'Jaune',
        htmlFor: 'jaune',
    },
    {
        id: 5,
        name: 'vert',
        title: 'Vert',
        htmlFor: 'vert',
    },
    {
        id: 6,
        name: 'orange',
        title: 'Orange',
        htmlFor: 'orange',
    },
    {
        id: 7,
        name: 'rose',
        title: 'Rose',
        htmlFor: 'rose',
    },
    {
        id: 8,
        name: 'blanc',
        title: 'Blanc',
        htmlFor: 'blanc',
    },
    // {
    //     id: 9,
    //     name: 'android',
    //     title: 'Android',
    //     htmlFor: 'android',
    // },
    // {
    //     id: 10,
    //     name: 'android',
    //     title: 'Android',
    //     htmlFor: 'android',
    // },
    // {
    //     id: 11,
    //     name: 'facitalab',
    //     title: 'FacitaLab',
    //     htmlFor: 'facitalab',
    // },
    // {
    //     id: 12,
    //     name: 'pixstar',
    //     title: 'PixStar',
    //     htmlFor: 'pixstar',
    // },
    // {
    //     id: 13,
    //     name: 'cl8000',
    //     title: 'CL8000',
    //     htmlFor: 'cl8000',
    // },
    // {
    //     id: 14,
    //     name: 'cl7000',
    //     title: 'CL8700',
    //     htmlFor: 'cl8700',
    // },
    // {
    //     id: 15,
    //     name: 'cl7000',
    //     title: 'CL8700',
    //     htmlFor: 'cl8700',
    // },
    // {
    //     id: 16,
    //     name: 'geemarc',
    //     title: 'GeeMarc',
    //     htmlFor: 'geemarc',
    // },
    // {
    //     id: 17,
    //     name: 'konrow',
    //     title: 'KonRow',
    //     htmlFor: 'konrow',
    // },
    // {
    //     id: 18,
    //     name: 'smartvision',
    //     title: 'Smartvision',
    //     htmlFor: 'smartvision',
    // },

]

const SHEET_SIDES = ["left"] as const
type SheetSide = (typeof SHEET_SIDES)[number]


const CatalogueAll = () => {

    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    //     const [product, setProduct] = useState(collectionData);
    //     const handleBtns = (e) => {
    //     let word=e.target.value;

    //     if(word === "All"){
    //       setCategory(collectionData)
    //     }
    //     else if(word === "Cars") {
    //       const filtered = collectionData.filter(item=>item.kind === "Cars");
    //       setCategory(filtered)
    //     }
    //     else if(word === "Views") {
    //       const filtered = collectionData.filter(item=>item.kind === "Views");
    //       setCategory(filtered)
    //     }
    //   }


    return (
        <div>
            <div className='flex'>
                {/* SIDEBAR - responsive */}
                {SHEET_SIDES.map((side) => (
                    <Sheet key={side}>
                        <SheetTrigger asChild className="xl:hidden lg:hidden">
                            <div className='p-6'>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    {side}
                                </svg>
                            </div>
                        </SheetTrigger>
                        <SheetContent side={side} className="w-full">
                            <SheetHeader className="pt-10">
                                {/* CATEGORIES */}
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Catégories</AccordionTrigger>
                                            <AccordionContent className=''>
                                                {categories.map((categorie) => (
                                                    <div key={categorie.id} className='flex items-center space-x-2 mb-2'>
                                                        <Checkbox id={categorie.name} />
                                                        <label
                                                            htmlFor={categorie.htmlFor}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {categorie.title}
                                                        </label>
                                                    </div>

                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Prix</AccordionTrigger>
                                            <AccordionContent className='text-center'>
                                                <div className='flex items-center space-x-2'>
                                                    <div className="flex items-center justify-center space-x-2 mx-auto">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 shrink-0 rounded-full"
                                                            onClick={() => onClick(-10)}
                                                            disabled={goal <= 200}
                                                        >
                                                            <MinusIcon className="h-4 w-4" />
                                                            <span className="sr-only">Decrease</span>
                                                        </Button>
                                                        <div className="flex-1 text-center">
                                                            <div className="text-xl font-bold tracking-tighter">
                                                                {goal}
                                                            </div>
                                                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Prix
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 shrink-0 rounded-full"
                                                            onClick={() => onClick(10)}
                                                            disabled={goal >= 400}
                                                        >
                                                            <PlusIcon className="h-4 w-4" />
                                                            <span className="sr-only">Increase</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Marques</AccordionTrigger>
                                            <AccordionContent>
                                                {marques.map((marque) => (
                                                    <div key={marque.id} className='flex items-center space-x-2 mb-2'>
                                                        <Checkbox id={marque.name} />
                                                        <label
                                                            htmlFor={marque.htmlFor}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {marque.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Couleurs</AccordionTrigger>
                                            <AccordionContent>
                                                {couleurs.map((couleur) => (
                                                    <div key={couleur.id} className='flex items-center space-x-2 mb-2'>
                                                        <Checkbox id={couleur.name} />
                                                        <label
                                                            htmlFor={couleur.htmlFor}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {couleur.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className='mt-2'>
                                    <Button variant={"blue"}>Ok</Button>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ))}

                {/* Menu sur le coté non responsive */}
                <aside id="sidebar-multi-level-sidebar" className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 md:hidden sm:hidden hidden  lg:block xl:block" aria-label="Sidebar">
                    <div className="h-full px-3  overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul className=" font-medium">
                            {/* CATEGORIES */}
                            <li>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Catégories</AccordionTrigger>
                                            <AccordionContent className=''>
                                                {categories.map((categorie) => (
                                                    <div key={categorie.id} className='flex items-center space-x-2 mb-2'>
                                                        <Checkbox id={categorie.name} />
                                                        <label
                                                            htmlFor={categorie.htmlFor}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {categorie.title}
                                                        </label>
                                                    </div>

                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </li>
                            {/* PRIX */}
                            <li>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Prix</AccordionTrigger>
                                            <AccordionContent className='text-center'>
                                                <div className='flex items-center space-x-2'>
                                                    <div className="flex items-center justify-center space-x-2 mx-auto">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 shrink-0 rounded-full"
                                                            onClick={() => onClick(-10)}
                                                            disabled={goal <= 200}
                                                        >
                                                            <MinusIcon className="h-4 w-4" />
                                                            <span className="sr-only">Decrease</span>
                                                        </Button>
                                                        <div className="flex-1 text-center">
                                                            <div className="text-xl font-bold tracking-tighter">
                                                                {goal}
                                                            </div>
                                                            <div className="text-[0.70rem] uppercase text-muted-foreground">
                                                                Prix
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 shrink-0 rounded-full"
                                                            onClick={() => onClick(10)}
                                                            disabled={goal >= 400}
                                                        >
                                                            <PlusIcon className="h-4 w-4" />
                                                            <span className="sr-only">Increase</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </li>
                            {/* MARQUES */}
                            <li>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Marques</AccordionTrigger>
                                            <AccordionContent>
                                                {marques.map((marque) => (
                                                    <div key={marque.id} className='flex items-center space-x-2 mb-2'>
                                                        <Checkbox id={marque.name} />
                                                        <label
                                                            htmlFor={marque.htmlFor}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {marque.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </li>
                            {/* COULEURS */}
                            <li>
                                <div className=''>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Couleurs</AccordionTrigger>
                                            <AccordionContent>
                                                {couleurs.map((couleur) => (
                                                    <div key={couleur.id} className='flex items-center space-x-2 mb-2'>
                                                        <Checkbox id={couleur.name} />
                                                        <label
                                                            htmlFor={couleur.htmlFor}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {couleur.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </li>
                        </ul>
                        <div className='mt-2'>
                            <Button variant={"blue"}>Ok</Button>
                        </div>
                    </div>
                </aside>


                {/* Catalogue */}
                {/* <div>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {products.map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <Link to={"/catalogue-detail"}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.name}
                                                    </Link>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                            <Button variant="outline" onClick={() => addToCart(product)}>Add</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
                <CartProvider>
                    <div className='flex flex-col'>
                        <Panier />
                        <Collection />
                    </div>
                </CartProvider>
            </div>
        </div>
    )
}

export default CatalogueAll