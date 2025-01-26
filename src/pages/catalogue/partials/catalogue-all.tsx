import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
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



// Declaration des Propriétés - un produit est un item et je vais l'ajouter
type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
};


// Ici je crée un lien entre les cartes de chaque produits +  leur type et ce qu'ils contiennent
export type CartItemType = {
    [x: string]: any
    id: number;
    name: string;
    description: string;
    htmlFor: string;
    category: string;
    marques: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    color: string;
    amount: number;
    data: string;
    value: string;
    type: string;
};

//Liste des produits  -  Influence sur le filtre (Const OPTIONS lié dans le filtermenu)
const products: CartItemType[] = [
    {
        id: 1,
        name: 'Braille Sense 6',
        description: 'Évalué par nos consommateurs, bloc-notes braille',
        htmlFor: '#',
        imageSrc: image1,
        imageAlt: "Braille Sense 6",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'braille',
        data: '',
        marques: '',
        value: '1000 - 5000',
        type: 'cécité'
    },
    {
        id: 2,
        name: 'Clover 2',
        description: 'Full HD, image crystal',
        htmlFor: '#',
        imageSrc: image2,
        imageAlt: "Clover 2",
        price: 1990.00,
        color: 'Black',
        amount: 0,
        category: 'loupe électronique',
        data: '',
        marques: '',
        value: '1000 - 5000',
        type: 'mavloyance'
    },
    {
        id: 3,
        name: 'Loupe de lecture',
        description: 'Loupe grossissante, x10, souple',
        htmlFor: '#',
        imageSrc: image3,
        imageAlt: "Loupe de lecture",
        price: 9.95,
        color: 'Black',
        amount: 0,
        category: 'lunettesloupe',
        data: '',
        marques: '',
        value: '< 100',
        type: 'malvoyance'
    }, {
        id: 4,
        name: 'Montre Parlante',
        description: 'Montre pour aveugle',
        htmlFor: '#',
        imageSrc: image4,
        imageAlt: "Montre Parlante",
        price: 35.52,
        color: 'Black',
        amount: 0,
        category: 'montres',
        data: '',
        marques: '',
        value: '< 100',
        type: 'vision optimale'
    }, {
        id: 5,
        name: 'Ordissimo 1',
        description: 'Ordinateur pour Seniors',
        htmlFor: '#',
        imageSrc: image5,
        imageAlt: "Ordissimo 1",
        price: 299.00,
        color: 'Black',
        amount: 0,
        category: 'ordinateur',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
    {
        id: 6,
        name: 'Galaxy Ultra S21',
        description: 'Recommandé WCAG, Accesibilité',
        htmlFor: '#',
        imageSrc: image6,
        imageAlt: "Galaxy Ultra S21.",
        price: 352.05,
        color: 'Black',
        amount: 0,
        category: 'smartphones',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
    {
        id: 7,
        name: 'Facilo Tab',
        description: 'Tablette pour Senior, Utilisation simplifiée',
        htmlFor: '#',
        imageSrc: image7,
        imageAlt: "Facilo Tab",
        price: 299.00,
        color: 'Black',
        amount: 0,
        category: 'tablettes',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
    {
        id: 8,
        name: 'Loupe Amelie',
        description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
        htmlFor: '#',
        imageSrc: image8,
        imageAlt: "Loupe Amelie",
        price: 188.00,
        color: 'Black',
        amount: 0,
        category: 'lunettes loupes',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'cécité'
    },
    {
        id: 9,
        name: 'Loupe Macrolux',
        description: 'LED SMD, 3.6x loupe éclairée',
        htmlFor: '#',
        imageSrc: image9,
        imageAlt: "Loupe Macrolux",
        price: 206.00,
        color: 'Black',
        amount: 0,
        category: 'loupe électronique',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'cécité'
    },
    {
        id: 10,
        name: 'Montre Bayard',
        description: 'Montre Quartz',
        htmlFor: '#',
        imageSrc: image10,
        imageAlt: "Montre Bayard",
        price: 115.00,
        color: 'Black',
        amount: 0,
        category: 'montres',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
    {
        id: 11,
        name: 'Iphone 11',
        description: 'Écran Liquid Retina, LCD, Accessibilité',
        htmlFor: '#',
        imageSrc: image11,
        imageAlt: "Iphone 11",
        price: 217.00,
        color: 'Black',
        amount: 0,
        category: 'smartphones',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
    {
        id: 12,
        name: 'Tablette Ordissimo',
        description: 'Tablette simplifiée, Senior',
        htmlFor: '#',
        imageSrc: image12,
        imageAlt: "Tablette Ordissimo",
        price: 299.00,
        color: 'Black',
        amount: 0,
        category: 'tablettes',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
    {
        id: 13,
        name: 'Cl8000',
        description: 'Téléphone fixe, Bouton SOS',
        htmlFor: '#',
        imageSrc: image13,
        imageAlt: "Cl8000",
        price: 159.99,
        color: 'Black',
        amount: 0,
        category: 'téléphone pour senior',
        data: '',
        marques: '',
        value: '100 - 500',
        type: 'vision optimale'
    },
];



//Const attribué pour le menu de droite - le panier - SHADCN
const SHEET_SIDES = ["left"] as const
type SheetSide = (typeof SHEET_SIDES)[number]




const CatalogueAll = ({ filter }: { filter: string }) => {


    //Declaration pour l'ajout des produits dans le panier 
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);


    //Je crée la fonction pour l'ajout, avec le calcul 
    const handleAddToCart = (item: CartItemType) => {
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

    //Je crée la fonction pour enlever un produit, avec le calcul 
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




    //Je declare le composant dans la card et je lui donne une forme. Je fais un mapping pour qu'il m'affiche tout les produits qui sont dans la base de données
    const Item: React.FC<{ item: CartItemType }> = ({ item }) => (
        <div>
            <Card className='h-full'>
                <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                    <CardDescription className=''>
                        {item.value}{item.type}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <img src={item.imageSrc} alt={item.name} style={{ maxWidth: '100%' }} />
                    <p>{item.price} €</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => handleAddToCart(item)}>Ajouter au panier</Button>
                </CardFooter>
            </Card>
        </div>
    );







    //J'applique un filtre sur les produits affichés en fonction de ce que je selctionne
    const filteredProducts = filter === "all"
        ? products
        : products.filter((product) =>
            product.category === filter ||
            product.value === filter ||
            product.type === filter
        );




    return (
        <div className='xl:w-[70%] p-6 pt-0 md:pt-6'>
            <div className='w-full'>
                {/* Catalogue */}
                <Panier
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />


                {/* Affichage du produits */}
                <CartProvider>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 '>
                        {filteredProducts.map((item) => (
                            <div className='flex flex-row max-w-full' key={item.id}>
                                <div key={item.id} className=''>
                                    <Card className='h-full w-full mr-6 md:w-72'>
                                        <CardHeader>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                            <CardDescription className='hidden'>
                                                {item.value}{item.type}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <img src={item.imageSrc} alt={item.name} style={{ maxWidth: '100%' }} />
                                            <p>{item.price} €</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button onClick={() => handleAddToCart(item)}>Ajouter au panier</Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </CartProvider>
            </div>
        </div>
    )
}

export default CatalogueAll



