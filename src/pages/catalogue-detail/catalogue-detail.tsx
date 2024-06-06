import Layout from '@/components/layout'
import ImageLoader from '@/components/ui/image-loader'
import { Input } from '@/components/ui/input'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image1 from "@/img/data/LoupeElectronique/loupeclover3/clover5.jpeg"
import Image2 from "@/img/data/LoupeElectronique/loupeclover3/clover2.jpeg"
import Image3 from "@/img/data/LoupeElectronique/loupeclover3/clover3.jpeg"
import Image4 from "@/img/data/LoupeElectronique/loupeclover3/clover4.jpeg"
import { Button } from '@/components/ui/button'


const CatalogueDetail = () => {
    return (
        <Layout>
            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">Catalogue</a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">Loupe</a>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li className="text-sm">
                                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">Clover 3</a>
                            </li>
                        </ol>
                    </nav>

                    {/* <!-- Gallerie --> */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <ImageLoader src={Image1} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-full w-full object-cover object-center" preview={''} />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <ImageLoader src={Image2} alt="Model wearing plain black basic tee." imageStyleClass="h-full w-full object-cover object-center" preview={''} />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <ImageLoader src={Image3} alt="Model wearing plain gray basic tee." imageStyleClass="h-full w-full object-cover object-center" preview={''} />
                            </div>
                        </div>
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <ImageLoader src={Image4} alt="Model wearing plain white basic tee." imageStyleClass="h-full w-full object-cover object-center" preview={''} />
                        </div>
                    </div>

                    {/* <!-- Info du produit --> */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Clover 3</h1>
                        </div>

                        {/* <!-- Options --> */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Information du produit</h2>
                            <p className="text-3xl tracking-tight text-gray-900">295,00€</p>

                            {/* <!-- Commentaires --> */}
                            <div className="mt-6">
                                <h3 className="sr-only">Commentaires</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="sr-only">4 sur 5 étoiles</p>
                                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 commentaires</a>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* <!-- Couleurs --> */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <fieldset aria-label="Choose a color" className="mt-4">
                                        <div className="flex items-center space-x-3">
                                            {/* <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                --> */}
                                            <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                                <Input type="radio" name="color-choice" value="White" className="sr-only" />
                                                <span aria-hidden="true" className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                                            </label>
                                            {/* <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                --> */}
                                            <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                                <Input type="radio" name="color-choice" value="Gray" className="sr-only" />
                                                <span aria-hidden="true" className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                                            </label>
                                            {/* <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                --> */}
                                            <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                                                <Input type="radio" name="color-choice" value="Black" className="sr-only" />
                                                <span aria-hidden="true" className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>

                                <Dialog>
                                    <DialogTrigger className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Ajouter</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Êtes-vous absolument sûr ?</DialogTitle>
                                            <DialogDescription>
                                                Vous allez ajouter ce produit à votre panier. Vous pourrez le supprimer à tout moment.
                                                <Button>oui</Button>
                                                <Button>non</Button>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>


                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">La loupe électronique Clover 3 est parfaite pour la vision de près et l'écriture (grâce au support d'écriture intégré) partout ou vous le souhaitez : son format compact est idéal pour la transporter dans une poche, très discrètement. Elle s'utilise en position horizontale sur une table.</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Points forts</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        <li className="text-gray-400"><span className="text-gray-600">Format compact, idéal pour le transport dans une poche, très discrète.</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Optimisation du confort de lecture avec ses 10 combinaisons de couleurs.</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Possibilité de geler l'image pour naviguer ensuite dedans.</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Grossissement allant de x 3,8 à x16.</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Écran TFT 3,5pouces.</span></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default CatalogueDetail