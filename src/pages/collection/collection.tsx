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
// import { useCart } from '../store/cart-context'
// import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import Quickview from './quickview'


const Collection: React.FC = () => {
    // const { addToCart } = useCart();

    const products = [
        {
            id: 1,
            name: 'Braille Sense 6',
            description: 'Évalué par nos consommateurs, bloc-notes braille',
            href: <CatalogueDetail />,
            imageSrc: image1,
            imageAlt: "Braille Sense 6",
            price: '4790,00',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Clover 2',
            description: 'Full HD, image crystal',
            href: <CatalogueDetail />,
            imageSrc: image2,
            imageAlt: "Clover 2",
            price: '945,00 ',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Loupe de lecture',
            description: 'Loupe grossissante, x10, souple',
            href: <CatalogueDetail />,
            imageSrc: image3,
            imageAlt: "Loupe de lecture",
            price: '24,99 ',
            color: 'Black',
        }, {
            id: 4,
            name: 'Montre Parlante',
            description: 'Montre pour aveugle',
            href: <CatalogueDetail />,
            imageSrc: image4,
            imageAlt: "Montre Parlante",
            price: '25,86 ',
            color: 'Black',
        }, {
            id: 5,
            name: 'Ordissimo 1',
            description: 'Ordinateur pour Seniors',
            htmlFor: <CatalogueDetail />,
            imageSrc: image5,
            imageAlt: "Ordissimo 1",
            price: '189,00 ',
            color: 'Black',
        },
        {
            id: 6,
            name: 'Galaxy Ultra S21',
            description: 'Recommandé WCAG, Accesibilité',
            htmlFor: <CatalogueDetail />,
            imageSrc: image6,
            imageAlt: "Galaxy Ultra S21.",
            price: '354,59 ',
            color: 'Black',
        },
        {
            id: 7,
            name: 'Facilo Tab',
            description: 'Tablette pour Senior, Utilisation simplifiée',
            htmlFor: <CatalogueDetail />,
            imageSrc: image7,
            imageAlt: "Facilo Tab",
            price: '299,00 ',
            color: 'Black',
        },
        {
            id: 8,
            name: 'Loupe Amelie',
            description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
            htmlFor: <CatalogueDetail />,
            imageSrc: image8,
            imageAlt: "Loupe Amelie",
            price: '188,00 ',
            color: 'Black',
        },
        {
            id: 9,
            name: 'Loupe Macrolux',
            description: 'LED SMD, 3.6x loupe éclairée',
            htmlFor: <CatalogueDetail />,
            imageSrc: image9,
            imageAlt: "Loupe Macrolux",
            price: '170,00 ',
            color: 'Black',
        },
        {
            id: 10,
            name: 'Montre Bayard',
            description: 'Montre Quartz',
            htmlFor: <CatalogueDetail />,
            imageSrc: image10,
            imageAlt: "Montre Bayard",
            price: '65,00 ',
            color: 'Black',
        },
        {
            id: 11,
            name: 'Iphone 11',
            description: 'Écran Liquid Retina, LCD, Accessibilité',
            htmlFor: <CatalogueDetail />,
            imageSrc: image11,
            imageAlt: "Iphone 11",
            price: '268,96 ',
            color: 'Black',
        },
        {
            id: 12,
            name: 'Tablette Ordissimo',
            description: 'Tablette simplifiée, Senior',
            htmlFor: <CatalogueDetail />,
            imageSrc: image12,
            imageAlt: "Tablette Ordissimo",
            price: '259,00 ',
            color: 'Black',
        },
        {
            id: 13,
            name: 'Cl8000',
            description: 'Téléphone fixe, Bouton SOS',
            htmlFor: <CatalogueDetail />,
            imageSrc: image13,
            imageAlt: "Cl8000",
            price: '149,99 ',
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
                            <CardDescription className='underline decoration-dotted hover:text-blue-400'>{product.description}</CardDescription>
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
                            {/* <Button onClick={() => addToCart(product)}>Ajouter</Button> */}
                            <Dialog>
                                <DialogTrigger className='border-2 py-2 px-2 rounded'>Ajouter</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>

                                        <DialogDescription>
                                            <Quickview />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Collection;


