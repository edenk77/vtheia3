import { useCart } from '../store/cart-context'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import CatalogueDetail from '@/pages/catalogue-detail/catalogue-detail'
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

interface Product {
    id: number;
    name: string;
    description: string;
    href: string;
    price: string;
    imageSrc: string;
}

const Quickview: React.FC = () => {

    //Etat pour ajouter des produits
    const { addToCart } = useCart();


    //Liste des produits 
    const products: Product[] = [
        {
            id: 1,
            name: 'Braille Sense 6',
            description: 'Évalué par nos consommateurs, bloc-notes braille',
            href: <CatalogueDetail />,
            imageSrc: image1,
            imageAlt: "Braille Sense 6",
            price: '4790,00 €',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Clover 2',
            description: 'Full HD, image crystal',
            href: <CatalogueDetail />,
            imageSrc: image2,
            imageAlt: "Clover 2",
            price: '945,00 €',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Loupe de lecture',
            description: 'Loupe grossissante, x10, souple',
            href: <CatalogueDetail />,
            imageSrc: image3,
            imageAlt: "Loupe de lecture",
            price: '24,99 €',
            color: 'Black',
        }, {
            id: 4,
            name: 'Montre Parlante',
            description: 'Montre pour aveugle',
            href: <CatalogueDetail />,
            imageSrc: image4,
            imageAlt: "Montre Parlante",
            price: '25,86 €',
            color: 'Black',
        }, {
            id: 5,
            name: 'Ordissimo 1',
            description: 'Ordinateur pour Seniors',
            htmlFor: <CatalogueDetail />,
            imageSrc: image5,
            imageAlt: "Ordissimo 1",
            price: '189,00 €',
            color: 'Black',
        },
        {
            id: 6,
            name: 'Galaxy Ultra S21',
            description: 'Recommandé WCAG, Accesibilité',
            htmlFor: <CatalogueDetail />,
            imageSrc: image6,
            imageAlt: "Galaxy Ultra S21.",
            price: '354,59 €',
            color: 'Black',
        },
        {
            id: 7,
            name: 'Facilo Tab',
            description: 'Tablette pour Senior, Utilisation simplifiée',
            htmlFor: <CatalogueDetail />,
            imageSrc: image7,
            imageAlt: "Facilo Tab",
            price: '299,00 €',
            color: 'Black',
        },
        {
            id: 8,
            name: 'Loupe Amelie',
            description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
            htmlFor: <CatalogueDetail />,
            imageSrc: image8,
            imageAlt: "Loupe Amelie",
            price: '188,00 €',
            color: 'Black',
        },
        {
            id: 9,
            name: 'Loupe Macrolux',
            description: 'LED SMD, 3.6x loupe éclairée',
            htmlFor: <CatalogueDetail />,
            imageSrc: image9,
            imageAlt: "Loupe Macrolux",
            price: '170,00 €',
            color: 'Black',
        },
        {
            id: 10,
            name: 'Montre Bayard',
            description: 'Montre Quartz',
            htmlFor: <CatalogueDetail />,
            imageSrc: image10,
            imageAlt: "Montre Bayard",
            price: '65,00 €',
            color: 'Black',
        },
        {
            id: 11,
            name: 'Iphone 11',
            description: 'Écran Liquid Retina, LCD, Accessibilité',
            htmlFor: <CatalogueDetail />,
            imageSrc: image11,
            imageAlt: "Iphone 11",
            price: '268,96 €',
            color: 'Black',
        },
        {
            id: 12,
            name: 'Tablette Ordissimo',
            description: 'Tablette simplifiée, Senior',
            htmlFor: <CatalogueDetail />,
            imageSrc: image12,
            imageAlt: "Tablette Ordissimo",
            price: '259,00 €',
            color: 'Black',
        },
        {
            id: 13,
            name: 'Cl8000',
            description: 'Téléphone fixe, Bouton SOS',
            htmlFor: <CatalogueDetail />,
            imageSrc: image13,
            imageAlt: "Cl8000",
            price: '149,99 €',
            color: 'Black',
        },
    ];

    //Etat pour stocker les produits 
    const [selectedProduct, setSelectedProduct] = useState(null);

    //Ici je gere la selection de chaque produit
    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
    };

    //Je reviens sur la liste des produits
    const handleBackToList = () => {
        setSelectedProduct(null)
    };

    return (
        <>
            {selectedProduct ? (
                <div>
                    <Button onClick={handleBackToList}>Retour à la liste</Button>
                    <Card>
                        <img
                            src={selectedProduct.imageSrc}
                            alt={selectedProduct.name}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                        <CardHeader>
                            <CardTitle>{selectedProduct.name}</CardTitle>
                            <CardDescription>{selectedProduct.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Prix : {selectedProduct.price}</p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => addToCart(selectedProduct)}>
                                Ajouter au panier
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            ) : (
                // Vue de la liste des produits
                <div className='w-full h-full'>
                    <div className="flex ">
                        {products.map(product => (
                            <Card
                                key={product.id}
                                className="border-none shadow-none cursor-pointer"
                                onClick={() => handleProductClick(product)}
                            >
                                a
                                <img
                                    src={product.imageSrc}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                                <CardHeader>
                                    <CardTitle>{product.name}</CardTitle>

                                </CardHeader>
                                <CardContent>
                                    <p>Prix : {product.price}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Quickview;