import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CartItemType } from '../catalogue/partials/catalogue-all';
import CartItem from '../cartitem/cartitem';
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
import item from '../item/item';


type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

//Liste des produits 
const products = [
    {
        id: 1,
        name: 'Braille Sense 6',
        description: 'Évalué par nos consommateurs, bloc-notes braille',
        href: '#',
        imageSrc: image1,
        imageAlt: "Braille Sense 6",
        price: '4790,00',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Clover 2',
        description: 'Full HD, image crystal',
        href: '#',
        imageSrc: image2,
        imageAlt: "Clover 2",
        price: '945,00 ',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Loupe de lecture',
        description: 'Loupe grossissante, x10, souple',
        href: '#',
        imageSrc: image3,
        imageAlt: "Loupe de lecture",
        price: '24,99 ',
        color: 'Black',
    }, {
        id: 4,
        name: 'Montre Parlante',
        description: 'Montre pour aveugle',
        href: '#',
        imageSrc: image4,
        imageAlt: "Montre Parlante",
        price: '25,86 ',
        color: 'Black',
    }, {
        id: 5,
        name: 'Ordissimo 1',
        description: 'Ordinateur pour Seniors',
        href: '#',
        imageSrc: image5,
        imageAlt: "Ordissimo 1",
        price: '189,00 ',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Galaxy Ultra S21',
        description: 'Recommandé WCAG, Accesibilité',
        href: '#',
        imageSrc: image6,
        imageAlt: "Galaxy Ultra S21.",
        price: '354,59 ',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Facilo Tab',
        description: 'Tablette pour Senior, Utilisation simplifiée',
        href: '#',
        imageSrc: image7,
        imageAlt: "Facilo Tab",
        price: '299,00 ',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Loupe Amelie',
        description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
        href: '#',
        imageSrc: image8,
        imageAlt: "Loupe Amelie",
        price: '188,00 ',
        color: 'Black',
    },
    {
        id: 9,
        name: 'Loupe Macrolux',
        description: 'LED SMD, 3.6x loupe éclairée',
        href: '#',
        imageSrc: image9,
        imageAlt: "Loupe Macrolux",
        price: '170,00 ',
        color: 'Black',
    },
    {
        id: 10,
        name: 'Montre Bayard',
        description: 'Montre Quartz',
        href: '#',
        imageSrc: image10,
        imageAlt: "Montre Bayard",
        price: '65,00 ',
        color: 'Black',
    },
    {
        id: 11,
        name: 'Iphone 11',
        description: 'Écran Liquid Retina, LCD, Accessibilité',
        href: '#',
        imageSrc: image11,
        imageAlt: "Iphone 11",
        price: '268,96 ',
        color: 'Black',
    },
    {
        id: 12,
        name: 'Tablette Ordissimo',
        description: 'Tablette simplifiée, Senior',
        href: '#',
        imageSrc: image12,
        imageAlt: "Tablette Ordissimo",
        price: '259,00 ',
        color: 'Black',
    },
    {
        id: 13,
        name: 'Cl8000',
        description: 'Téléphone fixe, Bouton SOS',
        href: '#',
        imageSrc: image13,
        imageAlt: "Cl8000",
        price: '149,99 ',
        color: 'Black',
    },
];


const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

    return (
        <div>
            <h2>Your shopping cart</h2>
            {cartItems.length ? (
                <div>
                    {cartItems.map((item) => (

                        <CartItem
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}>
                        </CartItem>

                    ))}
                </div>
            ) : (
                <div>No items in cart</div>
            )}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    )
}

export default Cart;