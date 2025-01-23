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




interface FilterMenuProps {
    filter: string;
    setFilter: (newFilter: string) => void; // Define the prop type correctly
}


const filters = [
    {
        id: 'categorie',
        name: 'Categorie',
        options: [
            { value: 'accessoires', label: 'Accessoires', checked: false },
            { value: 'braille', label: 'Braille', checked: false },
            { value: 'loupeelectronique', label: 'Loupe Eléctronique', checked: false },
            { value: 'lunettesloupe', label: 'Lunettes Loupe', checked: false },
            { value: 'montres', label: 'Montres', checked: false },
            { value: 'ordinateur', label: 'Ordinateur', checked: false },
            { value: 'smartphones', label: 'Smartphones', checked: false },
            { value: 'tablettes', label: 'Tablettes', checked: false },
            { value: 'telephonesenior', label: 'Téléphones Senior', checked: false },
        ]
    },
    {
        id: 'color',
        name: 'Couleur',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Marques',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}



// Influence sur le filtre - le menu et les boutons 
const options = ["all", "dog", "cat", "lizard", "accessoires", "braille", "loupe électronique", "lunettes loupes", "montres", "ordinateur", "smartphones", "tablettes", "téléphone pour senior"];



const FilterMenu = ({ filter, setFilter }: { filter: string; setFilter: (value: string) => void }) => {

    // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    // const [selectedFilters, setSelectedFilters] = useState({
    //     categorie: [],
    //     color: [],
    //     size: [],
    // });



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



    // const handleFilterChange = (newFilter: React.SetStateAction<string>) => {
    //     setFilter(newFilter);
    // };
    // function filterTags(val: React.SetStateAction<string>) {
    //     setFilter(val);
    // }

    return (
        // <div className='w-[30%]'>
        //     <div className="bg-white">
        //         <div style={{ margin: "10px" }}>
        //             <h1>
        //                 Current filter <u>{filter}</u>
        //             </h1>
        //             {options.map((option) => (
        //                 <button
        //                     key={option}
        //                     onClick={() => setFilter(option)}
        //                     style={{
        //                         padding: "10px",
        //                         margin: "5px",
        //                         background: filter === option ? "gold" : "lightgray",
        //                         border: "none",
        //                         borderRadius: "5px",
        //                         cursor: "pointer",
        //                     }}
        //                 >
        //                     {option.charAt(0).toUpperCase() + option.slice(1)}
        //                 </button>
        //             ))}
        //         </div>
        //     </div>

        // </div>

        // <div className="w-[30%]">
        //     <h2 className="text-lg font-bold mb-4">Filtres</h2>
        //     <div className="space-y-6">
        //         {filters.map((section) => (
        //             <div key={section.id} className="border-b border-gray-200 pb-4">
        //                 <h3 className="font-medium text-gray-900">{section.name}</h3>
        //                 <div className="mt-4 space-y-2">
        //                     {section.options.map((option) => (
        //                         <div key={option.value} className="flex items-center">
        //                             <input
        //                                 id={`filter-${section.id}-${option.value}`}
        //                                 type="checkbox"
        //                                 value={option.value}
        //                                 checked={selectedFilters[section.id].includes(option.value)}
        //                                 onChange={() => handleFilterChange(section.id, option.value)}
        //                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        //                             />
        //                             <label
        //                                 htmlFor={`filter-${section.id}-${option.value}`}
        //                                 className="ml-3 text-sm text-gray-700"
        //                             >
        //                                 {option.label}
        //                             </label>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        //     <h2 className="text-lg font-bold mt-8 mb-4">Produits</h2>
        //     <ul className="space-y-4">
        //         {filteredProducts.map((product) => (
        //             <li key={product.id} className="border p-4 rounded">
        //                 {product.name}
        //             </li>
        //         ))}
        //     </ul>
        // </div>



        <div className='w-[30%]'>
            {/* Responsive */}
            <div className='block p-6 lg:hidden xl:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline">Open</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Catégorie ?</SheetTitle>
                            <SheetDescription>
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setFilter(option)}
                                        style={{
                                            padding: "10px",
                                            margin: "5px",
                                            background: filter === option ? "gold" : "lightgray",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {option.charAt(0).toUpperCase() + option.slice(1)}
                                    </button>
                                ))}
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>


            {/* Desktop */}
            <div className="bg-white hidden xl:block lg:block p-2">

                <Accordion type="single" className='pl-6' collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger >
                            Catégorie :
                        </AccordionTrigger>
                        <AccordionContent>
                            {options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setFilter(option)}
                                    style={{
                                        padding: "10px",
                                        margin: "5px",
                                        background: filter === option ? "gold" : "lightgray",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </button>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>



    )
}

export default FilterMenu;
