import {
    Card
} from "@/components/ui/card"
import { IconArrowAutofitRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Img1 from '@/img/data/braille/braillesense6/braillesense_6_vue.jpg'
import Img2 from '@/img/data/LoupeElectronique/loupeclover3/clover1.jpeg'
import Img3 from '@/img/data/montres/montrefemme/montre-parlante-femme-malvoyante-1.jpeg'
import Img4 from '@/img/data/ordinateur/ordissimo/ordissimo1.jpeg'
import ImageLoader from "@/components/ui/image-loader"

export default function Categories() {
    return (
        <Card className="w-full">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Achats par catégories</h2>
                    <div className="flex justify-between">
                        <p>Voyez ici les produits les plus demandées sur Voytheia</p>
                        <Link to={""} className="flex italic text-blue-500">
                            Voir plus <IconArrowAutofitRight />
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {/* Image1 */}
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img1}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center lg:h-full lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Braille Sense 6
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">35€</p>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img2}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center  lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Loupe Clover 1
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">27.70€</p>
                            </div>
                        </div>

                        {/* Image3 */}
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img3}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center lg:h-full lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Montre Parlante
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">55€</p>
                            </div>
                        </div>

                        {/* Image4 */}
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                <ImageLoader
                                    src={Img4}
                                    alt="Equipement en braille"
                                    imageStyleClass="h-60 w-full object-cover object-center lg:h-full lg:w-full"
                                    preview={''}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href='#'>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            Ordissimo
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Noir</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">123.99€</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Card>
    )
}




