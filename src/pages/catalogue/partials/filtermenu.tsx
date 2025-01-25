import React, { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
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
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IconFilterFilled } from '@tabler/icons-react'
import { Separator } from "@/components/ui/separator"



interface FilterMenuProps {
    filter: string;
    setFilter: (newFilter: string) => void; // Define the prop type correctly
}


// const filters = [
//     {
//         id: 'categorie',
//         name: 'Categorie',
//         options: [
//             { value: 'accessoires', label: 'Accessoires', checked: false },
//             { value: 'braille', label: 'Braille', checked: false },
//             { value: 'loupeelectronique', label: 'Loupe Eléctronique', checked: false },
//             { value: 'lunettesloupe', label: 'Lunettes Loupe', checked: false },
//             { value: 'montres', label: 'Montres', checked: false },
//             { value: 'ordinateur', label: 'Ordinateur', checked: false },
//             { value: 'smartphones', label: 'Smartphones', checked: false },
//             { value: 'tablettes', label: 'Tablettes', checked: false },
//             { value: 'telephonesenior', label: 'Téléphones Senior', checked: false },
//         ]
//     },
//     {
//         id: 'color',
//         name: 'Couleur',
//         options: [
//             { value: 'white', label: 'White', checked: false },
//             { value: 'beige', label: 'Beige', checked: false },
//             { value: 'blue', label: 'Blue', checked: true },
//             { value: 'brown', label: 'Brown', checked: false },
//             { value: 'green', label: 'Green', checked: false },
//             { value: 'purple', label: 'Purple', checked: false },
//         ],
//     },
//     {
//         id: 'size',
//         name: 'Marques',
//         options: [
//             { value: '2l', label: '2L', checked: false },
//             { value: '6l', label: '6L', checked: false },
//             { value: '12l', label: '12L', checked: false },
//             { value: '18l', label: '18L', checked: false },
//             { value: '20l', label: '20L', checked: false },
//             { value: '40l', label: '40L', checked: true },
//         ],
//     },
// ]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}



// Influence sur le filtre - le menu et les boutons 
const categories = ["all", "accessoires", "braille", "loupe électronique", "lunettes loupes", "montres", "ordinateur", "smartphones", "tablettes", "téléphone pour senior"];

const values = ["all", "< 100", "100 - 500", "500 - 1000", "1000 - 5000"];

const types = ["all", "malvoyance", "cécité", "vision optimale"];



const FilterMenu = ({ filter, setFilter }: { filter: string; setFilter: (value: string) => void }) => {



    return (

        <div className='w-[30%]'>
            {/* Responsive */}
            <div className='block p-6 lg:hidden xl:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="ghost">
                            <IconFilterFilled />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Catégorie ?</SheetTitle>
                            <SheetDescription>
                                <div>
                                    {categories.map((categorie) => (
                                        <Button
                                            key={categorie}
                                            onClick={() => setFilter(categorie)}
                                            style={{
                                                padding: "10px",
                                                margin: "5px",
                                                background: filter === categorie ? "dodgerblue" : "black",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {categorie.charAt(0).toUpperCase() + categorie.slice(1)}
                                        </Button>
                                    ))}
                                </div>
                            </SheetDescription>

                            <SheetTitle>Prix ?</SheetTitle>
                            <SheetDescription>
                                <div>
                                    {values.map((value) => (
                                        <Button
                                            key={value}
                                            onClick={() => setFilter(value)}
                                            style={{
                                                padding: "10px",
                                                margin: "5px",
                                                background: filter === value ? "dodgerblue" : "black",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {value.charAt(0).toUpperCase() + value.slice(1)}
                                        </Button>
                                    ))}
                                </div>
                            </SheetDescription>

                            <SheetTitle>Type de vision ?</SheetTitle>
                            <SheetDescription>

                                <div>
                                    {types.map((type) => (
                                        <Button
                                            key={type}
                                            onClick={() => setFilter(type)}
                                            style={{
                                                padding: "10px",
                                                margin: "5px",
                                                background: filter === type ? "dodgerblue" : "black",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </Button>
                                    ))}
                                </div>

                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>


            {/* Desktop */}
            <div className="hidden xl:block lg:block p-2">
                <Accordion type="single" className='pl-6' collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger >
                            Catégorie :
                        </AccordionTrigger>
                        <AccordionContent>
                            {categories.map((categorie) => (
                                <Button
                                    key={categorie}
                                    onClick={() => setFilter(categorie)}
                                    style={{
                                        padding: "10px",
                                        margin: "5px",
                                        background: filter === categorie ? "dodgerblue" : "black",
                                        cursor: "pointer",
                                    }}
                                >
                                    {categorie.charAt(0).toUpperCase() + categorie.slice(1)}
                                </Button>
                            ))}
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-2">
                        <AccordionTrigger >
                            Prix :
                        </AccordionTrigger>
                        <AccordionContent>
                            {values.map((value) => (
                                <Button
                                    key={value}
                                    onClick={() => setFilter(value)}
                                    style={{
                                        padding: "10px",
                                        margin: "5px",
                                        background: filter === value ? "dodgerblue" : "black",
                                        cursor: "pointer",
                                    }}
                                >
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Button>
                            ))}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger >
                            Type de vision :
                        </AccordionTrigger>
                        <AccordionContent>
                            {types.map((type) => (
                                <Button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    style={{
                                        padding: "10px",
                                        margin: "5px",
                                        background: filter === type ? "dodgerblue" : "black",
                                        cursor: "pointer",
                                    }}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </Button>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default FilterMenu;
