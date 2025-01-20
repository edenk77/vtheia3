import React, { useState } from 'react'
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
import Panier from '@/pages/panier/panier'
import image1 from "@/img/data/braille/braillesense6/braillesense_6_vue.jpg"
import image2 from "@/img/data/LoupeElectronique/loupeclover3/clover2.jpeg"
import image3 from "@/img/data/lunettesloupes/loupeled/loupe-de-lecture-mains-libres-led-1.jpeg"
import image4 from "@/img/data/montres/montrefemme/montre-parlante-femme-malvoyante-1.jpeg"
import image5 from "@/img/data/ordinateur/ordissimo/ordissimo1.jpeg"
import image6 from "@/img/data/smartphones/android/samsunggalaxys21ultra/galaxy1.jpeg"
import image7 from "@/img/data/tablettes/facitolab/samsung-facilotab-l-galaxy-2.jpeg"
import image8 from "@/img/data/LoupeElectronique/loupelectureamlie/amelie.jpeg"
import image9 from "@/img/data/lunettesloupes/anti-distortion/loupe-makrolux-anti-distorsion-1.jpeg"
import image10 from "@/img/data/montres/montrehomme/montre-parlante-homme-bayard.jpeg"
import image11 from "@/img/data/smartphones/apple/iphone11promax/iphone11promax.jpeg"
import image12 from "@/img/data/tablettes/ordissimo/tablette-simplifiee-ordissimo1.jpeg"
import image13 from "@/img/data/telephonepoursenior/cl8000/cl8000-face-1.jpeg"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;

};

export type CartItemType = {
    [x: string]: any
    id: number;
    name: string;
    description: string;
    href: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    color: string;
    amount: number;
};




//Liste des produits 
const products: CartItemType[] = [
    {
        id: 1,
        name: 'Braille Sense 6',
        description: 'Évalué par nos consommateurs, bloc-notes braille',
        href: '#',
        imageSrc: image1,
        imageAlt: "Braille Sense 6",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 2,
        name: 'Clover 2',
        description: 'Full HD, image crystal',
        href: '#',
        imageSrc: image2,
        imageAlt: "Clover 2",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 3,
        name: 'Loupe de lecture',
        description: 'Loupe grossissante, x10, souple',
        href: '#',
        imageSrc: image3,
        imageAlt: "Loupe de lecture",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    }, {
        id: 4,
        name: 'Montre Parlante',
        description: 'Montre pour aveugle',
        href: '#',
        imageSrc: image4,
        imageAlt: "Montre Parlante",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    }, {
        id: 5,
        name: 'Ordissimo 1',
        description: 'Ordinateur pour Seniors',
        href: '#',
        imageSrc: image5,
        imageAlt: "Ordissimo 1",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 6,
        name: 'Galaxy Ultra S21',
        description: 'Recommandé WCAG, Accesibilité',
        href: '#',
        imageSrc: image6,
        imageAlt: "Galaxy Ultra S21.",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 7,
        name: 'Facilo Tab',
        description: 'Tablette pour Senior, Utilisation simplifiée',
        href: '#',
        imageSrc: image7,
        imageAlt: "Facilo Tab",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 8,
        name: 'Loupe Amelie',
        description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
        href: '#',
        imageSrc: image8,
        imageAlt: "Loupe Amelie",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 9,
        name: 'Loupe Macrolux',
        description: 'LED SMD, 3.6x loupe éclairée',
        href: '#',
        imageSrc: image9,
        imageAlt: "Loupe Macrolux",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 10,
        name: 'Montre Bayard',
        description: 'Montre Quartz',
        href: '#',
        imageSrc: image10,
        imageAlt: "Montre Bayard",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 11,
        name: 'Iphone 11',
        description: 'Écran Liquid Retina, LCD, Accessibilité',
        href: '#',
        imageSrc: image11,
        imageAlt: "Iphone 11",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 12,
        name: 'Tablette Ordissimo',
        description: 'Tablette simplifiée, Senior',
        href: '#',
        imageSrc: image12,
        imageAlt: "Tablette Ordissimo",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
    {
        id: 13,
        name: 'Cl8000',
        description: 'Téléphone fixe, Bouton SOS',
        href: '#',
        imageSrc: image13,
        imageAlt: "Cl8000",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: ''
    },
];


//Liste des catégories, data, marques et couleurs pour le filtres
const categories = [
    {
        id: 1,
        name: 'accessoires',
        title: 'Accessoires',
        ref: 'accesoires',
    },
    {
        id: 2,
        name: 'braille',
        title: 'Braille',
        ref: 'braille',
    },
    {
        id: 3,
        name: 'loupeelectronique',
        title: 'Loupe Eléctronique',
        ref: 'loupeelectronique',
    },
    {
        id: 4,
        name: 'lunettesloupes',
        title: 'Lunettes Loupe',
        ref: 'lunettesloupes',
    },
    {
        id: 5,
        name: 'montres',
        title: 'Montres',
        ref: 'montres',
    },
    {
        id: 6,
        name: 'ordinateur',
        title: 'Ordinateur',
        ref: 'ordinateur',
    },
    {
        id: 7,
        name: 'smartphones',
        title: 'Smartphones',
        ref: 'smartphones',
    },
    {
        id: 8,
        name: 'tablettes',
        title: 'Tablettes',
        ref: 'tablettes',
    },
    {
        id: 9,
        name: 'telephonesenior',
        title: 'Téléphones Senior',
        ref: 'telephonesenior',
    },
    {
        id: 10,
        name: 'tout',
        title: 'Tout',
        ref: 'tout',
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
        ref: 'braillesense',
    },
    {
        id: 2,
        name: 'clover3',
        title: 'Clover 3',
        ref: 'clover3',
    },
    {
        id: 3,
        name: 'amelie',
        title: 'Amelie Loupe',
        ref: 'amelie',
    },
    {
        id: 4,
        name: 'moni',
        title: 'Moni Loupe',
        ref: 'moni',
    },
    {
        id: 5,
        name: 'reveal16',
        title: 'Reveal 16',
        ref: 'reveal16',
    },
    {
        id: 6,
        name: 'explor',
        title: 'ExploR',
        ref: 'explor',
    },
    {
        id: 7,
        name: 'ordissimo',
        title: 'Ordissimo',
        ref: 'ordissimo',
    },
    {
        id: 8,
        name: 'apple',
        title: 'Apple',
        ref: 'apple',
    },
    {
        id: 9,
        name: 'android',
        title: 'Android',
        ref: 'android',
    },
    {
        id: 10,
        name: 'android',
        title: 'Android',
        ref: 'android',
    },
    {
        id: 11,
        name: 'facitalab',
        title: 'FacitaLab',
        ref: 'facitalab',
    },
    {
        id: 12,
        name: 'pixstar',
        title: 'PixStar',
        ref: 'pixstar',
    },
    {
        id: 13,
        name: 'cl8000',
        title: 'CL8000',
        ref: 'cl8000',
    },
    {
        id: 14,
        name: 'cl7000',
        title: 'CL8700',
        ref: 'cl8700',
    },
    {
        id: 15,
        name: 'cl7000',
        title: 'CL8700',
        ref: 'cl8700',
    },
    {
        id: 16,
        name: 'geemarc',
        title: 'GeeMarc',
        ref: 'geemarc',
    },
    {
        id: 17,
        name: 'konrow',
        title: 'KonRow',
        ref: 'konrow',
    },
    {
        id: 18,
        name: 'smartvision',
        title: 'Smartvision',
        ref: 'smartvision',
    },

]

const couleurs = [
    {
        id: 1,
        name: 'rouge',
        title: 'Rouge',
        ref: 'rouge',
    },
    {
        id: 2,
        name: 'bleu',
        title: 'Bleu',
        ref: 'bleu',
    },
    {
        id: 3,
        name: 'noir',
        title: 'Noir',
        ref: 'noir',
    },
    {
        id: 4,
        name: 'jaune',
        title: 'Jaune',
        ref: 'jaune',
    },
    {
        id: 5,
        name: 'vert',
        title: 'Vert',
        ref: 'vert',
    },
    {
        id: 6,
        name: 'orange',
        title: 'Orange',
        ref: 'orange',
    },
    {
        id: 7,
        name: 'rose',
        title: 'Rose',
        ref: 'rose',
    },
    {
        id: 8,
        name: 'blanc',
        title: 'Blanc',
        ref: 'blanc',
    }
]


//Const attribué pour le menu de droite
const SHEET_SIDES = ["left"] as const
type SheetSide = (typeof SHEET_SIDES)[number]





const CatalogueAll = () => {

    //Declaration des filtres
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }


    const getProducts = async (): Promise<CartItemType[]> => {
        return [
            {
                id: 1,
                name: 'Braille Sense 6',
                description: 'Évalué par nos consommateurs, bloc-notes braille',
                href: '#',
                imageSrc: image1,
                imageAlt: "Braille Sense 6",
                price: 47.00,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 2,
                name: 'Clover 2',
                description: 'Full HD, image crystal',
                href: '#',
                imageSrc: image2,
                imageAlt: "Clover 2",
                price: 94.00,
                color: 'Black',
                amount: 0,
                category: ''
            },
            {
                id: 3,
                name: 'Loupe de lecture',
                description: 'Loupe grossissante, x10, souple',
                href: '#',
                imageSrc: image3,
                imageAlt: "Loupe de lecture",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            }, {
                id: 4,
                name: 'Montre Parlante',
                description: 'Montre pour aveugle',
                href: '#',
                imageSrc: image4,
                imageAlt: "Montre Parlante",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            }, {
                id: 5,
                name: 'Ordissimo 1',
                description: 'Ordinateur pour Seniors',
                href: '#',
                imageSrc: image5,
                imageAlt: "Ordissimo 1",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 6,
                name: 'Galaxy Ultra S21',
                description: 'Recommandé WCAG, Accesibilité',
                href: '#',
                imageSrc: image6,
                imageAlt: "Galaxy Ultra S21.",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 7,
                name: 'Facilo Tab',
                description: 'Tablette pour Senior, Utilisation simplifiée',
                href: '#',
                imageSrc: image7,
                imageAlt: "Facilo Tab",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 8,
                name: 'Loupe Amelie',
                description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
                href: '#',
                imageSrc: image8,
                imageAlt: "Loupe Amelie",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 9,
                name: 'Loupe Macrolux',
                description: 'LED SMD, 3.6x loupe éclairée',
                href: '#',
                imageSrc: image9,
                imageAlt: "Loupe Macrolux",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 10,
                name: 'Montre Bayard',
                description: 'Montre Quartz',
                href: '#',
                imageSrc: image10,
                imageAlt: "Montre Bayard",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 11,
                name: 'Iphone 11',
                description: 'Écran Liquid Retina, LCD, Accessibilité',
                href: '#',
                imageSrc: image11,
                imageAlt: "Iphone 11",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 12,
                name: 'Tablette Ordissimo',
                description: 'Tablette simplifiée, Senior',
                href: '#',
                imageSrc: image12,
                imageAlt: "Tablette Ordissimo",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            },
            {
                id: 13,
                name: 'Cl8000',
                description: 'Téléphone fixe, Bouton SOS',
                href: '#',
                imageSrc: image13,
                imageAlt: "Cl8000",
                price: 24.99,
                color: 'Black',
                category: '',
                amount: 0
            }
        ];
    }

    //Declaration pour l'ajout des produits dans le panier 
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);


    const getTotalItems = (items: CartItemType[]) =>
        items.reduce((acc, item) => acc + item.amount, 0);


    //Handle
    const handleAddToCart = (item: CartItemType) => {
        //console.log(clickedItem);
        setCartItems((prev) => {
            const isItemInCart = prev.find((cartItem) => cartItem.id === item.id);

            if (isItemInCart) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, amount: cartItem.amount + 1 }
                        : cartItem
                );
            }
            return [...prev, { ...item, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems((prev) =>
            prev.reduce((acc, cartItem) => {
                if (cartItem.id === id) {
                    if (cartItem.amount === 1) return acc;
                    return [...acc, { ...cartItem, amount: cartItem.amount - 1 }];
                } else {
                    return [...acc, cartItem];
                }
            }, [] as CartItemType[])
        );
    };


    //Je declare le composant Item
    const Item: React.FC<{ item: CartItemType }> = ({ item }) => (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img src={item.imageSrc} alt={item.name} style={{ maxWidth: '100%' }} />
                    <p>{item.price} €</p>
                </CardContent>
                <CardFooter>
                    <button onClick={() => handleAddToCart(item)}>Ajouter au panier</button>
                </CardFooter>
            </Card>
        </div>
    );



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
                                                            ref={categorie.href}
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
                                                            ref={marque.href}
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
                                                            ref={couleur.href}
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
                <aside id="sidebar-multi-level-sidebar" className="top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 md:hidden sm:hidden hidden lg:block xl:block overflow-y-scroll" aria-label="Sidebar">
                    <div className="h-full px-3 mb-5 overflow-y-auto bg-gray-50 dark:bg-gray-800">
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
                                                            ref={categorie.href}
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
                                                            ref={marque.href}
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
                                                            ref={couleur.href}
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
                <CartProvider>
                    <div className='flex flex-col h-auto overflow-y-scroll'>
                        <Panier
                            cartItems={cartItems}
                            addToCart={handleAddToCart}
                            removeFromCart={handleRemoveFromCart}
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                            {products.map((item) => (
                                <Item key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </CartProvider>
            </div>
        </div>
    )
}

export default CatalogueAll



