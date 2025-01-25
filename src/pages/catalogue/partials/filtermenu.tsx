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
                    <SheetTrigger className='flex'>
                        <IconFilterFilled /> Filtre
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Catégorie ?</SheetTitle>
                            <SheetDescription>
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
                            </SheetDescription>

                            <SheetTitle>Prix ?</SheetTitle>
                            <SheetDescription>
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
                            </SheetDescription>

                            <SheetTitle>Type de vision ?</SheetTitle>
                            <SheetDescription>
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
