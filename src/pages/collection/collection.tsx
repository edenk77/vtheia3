import CatalogueDetail from '@/pages/catalogue-detail/catalogue-detail'
import image1 from "@/img/data/braille/braillesense6/braillesense_6_vue.jpg"
import image2 from "@/img/data/LoupeElectronique/loupeclover3/clover2.jpeg"
import image3 from "@/img/data/lunettesloupes/loupeled/loupe-de-lecture-mains-libres-led-1.jpeg"
import image4 from "@/img/data/montres/montrefemme/montre-parlante-femme-malvoyante-1.jpeg"
import image5 from "@/img/data/ordinateur/ordissimo/ordissimo1.jpeg"
import image6 from "@/img/data/smartphones/android/samsunggalaxys21ultra/galaxy1.jpeg"
import image7 from "@/img/data/tablettes/facitolab/samsung-facilotab-l-galaxy-2.jpeg"
import image8 from "@/img/data/telephonepoursenior/cl8700/telephone-clapet-CL8700-3.jpeg"
import { useCart } from '../store/cart-context'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Collection: React.FC = () => {
    const { addToCart } = useCart();

    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: <CatalogueDetail />,
            imageSrc: image1,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: <CatalogueDetail />,
            imageSrc: image2,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: <CatalogueDetail />,
            imageSrc: image3,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        }, {
            id: 4,
            name: 'Basic Tee',
            href: <CatalogueDetail />,
            imageSrc: image4,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        }, {
            id: 5,
            name: 'Basic Tee',
            htmlFor: <CatalogueDetail />,
            imageSrc: image5,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 6,
            name: 'Basic Tee',
            htmlFor: <CatalogueDetail />,
            imageSrc: image6,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 7,
            name: 'Basic Tee',
            htmlFor: <CatalogueDetail />,
            imageSrc: image7,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 8,
            name: 'Basic Tee',
            htmlFor: <CatalogueDetail />,
            imageSrc: image8,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
    ];

    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8'>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {products.map(product => (
                    <Card key={product.id}>
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => addToCart(product)}>Ajouter</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Collection;


