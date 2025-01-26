
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
import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
    name_validation,
    desc_validation,
    email_validation,
    num_validation,
    // password_validation,
} from '../../../utils/inputValidations'
import { IconMailFilled } from "@tabler/icons-react"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"






const ContactForm = () => {

    // Ici je declare le rendu et la réponse lors de l'envoie 
    const methods = useForm()
    const [success, setSuccess] = useState(false)


    // JE fais une déclaration sur le bouton SUBMIT - il va me montrer dans le DOM les données que je parse et si il en voit, il affiche SUCCESS
    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
        methods.reset()
        setSuccess(true)
    })


    // J'ai crée un fichier JS ou j'ai regroupé les données principaux que je dois avoir dans mon form - INPUT VALIDATIONS
    return (
        <div className="flex flex-col xl:flex-row lg:flex-row my-12">
            <div className='xl:w-2/5 lg:w-3/6'>
                <Card className="border-none shadow-none xl:ml-12 md:mx-24">
                    <CardHeader >
                        <CardTitle className="">Contactez-nous!</CardTitle>
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
                        {/* <form action="" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
                                        Nom
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 ">
                                        Prénom
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 ">
                                        Enteprise
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            autoComplete="organization"
                                            className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 ">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 ">
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
                                            className="block w-full rounded-md border-0 px-3.5 py-2 pl-24  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 ">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                <Link to={"/Reset"} className="flex items-center">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Envoyer
                                    </button>
                                </Link>
                            </div>
                        </form> */}

                        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                            <FormProvider {...methods}>
                                <form
                                    onSubmit={e => e.preventDefault()}
                                    noValidate
                                    autoComplete="off"
                                    className="container"
                                >
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <Input {...name_validation} />
                                        <Input {...email_validation} />
                                        <Input {...num_validation} />
                                        {/* <Input {...password_validation} /> */}
                                        <Input {...desc_validation} className="md:col-span-2" />
                                    </div>
                                    <div className="mt-5">
                                        {success && (
                                            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                                                <CheckBadgeIcon className="w-5" /> Merci ! Votre message nous a été envoyé.
                                            </p>
                                        )}
                                        <button
                                            onClick={onSubmit}
                                            className="p-4 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800 w-full justify-center"
                                        >
                                            <IconMailFilled />
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </FormProvider>
                        </div>

                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>


            </div >
        </div >
    )
}

export default ContactForm