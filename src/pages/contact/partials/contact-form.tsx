
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ImageLoader from "@/components/ui/image-loader"
import Img1 from '@/img/desktoplinus.jpg'
import { Field } from '@headlessui/react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"




const ContactForm = () => {
    return (
        <div className="flex flex-col xl:flex-row">
            <div className='xl:w-2/5'>
                <Card className="border-none shadow-none ml-12">
                    <CardHeader >
                        <CardTitle className="mt-16">Contactez-nous!</CardTitle>
                        <CardDescription>Remplissez le formulaire pour nous contacer.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-6">Vous avez une idée ou des questions vos achats, vos utilisations quotidiens, le WCAG? Veuillez remplir le formulaire et nous vous réponderons dans les brefs délais.</p>
                        <p className="mb-6">Notre équipe travaille d'arrache pied pour vous mettre en contact avec nos professionnels.</p>

                    </CardContent>
                    <CardFooter>
                        <div className="w-full">
                            <ImageLoader src={Img1} alt="Two each of gray, white, and black shirts laying flat." imageStyleClass="h-32 w-full rounded-lg object-cover object-center" preview={''} />
                        </div>
                    </CardFooter>
                </Card>

            </div>
            <div className='xl:w-3/5'>
                <Card className="border-none shadow-none">
                    <CardContent >
                        <form action="/contact" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Nom
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Prénom
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Enteprise
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Numéro de téléphone
                                    </label>
                                    <div className="relative mt-2.5">
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <label htmlFor="country" className="sr-only">
                                                Pays
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-3 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                            >
                                                <option>US</option>
                                                <option>FR</option>
                                                <option>BE</option>
                                            </select>

                                        </div>
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <Field as="div" className="flex gap-x-4 sm:col-span-2">
                                    <div className="flex h-6 items-center">
                                        <Switch id="airplane-mode">
                                            <Label htmlFor="airplane-mode">Airplane Mode</Label>
                                        </Switch>
                                    </div>
                                    <Label className="text-sm leading-6 text-gray-600">
                                        En sélectionnant cette option, vous acceptez notre{' '}
                                        <a href="#" className="font-semibold text-indigo-600">
                                            politique de confidentialité
                                        </a>
                                        .
                                    </Label>
                                </Field>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>


            </div >
        </div >
    )
}

export default ContactForm