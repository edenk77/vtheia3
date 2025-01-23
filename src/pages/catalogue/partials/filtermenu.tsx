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



interface FilterMenuProps {
    filter: string;
    setFilter: (newFilter: string) => void; // Define the prop type correctly
}


const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

// const data = [
//     {
//         goal: 200,
//     },
//     {
//         goal: 300,
//     },
//     {
//         goal: 400,
//     },
//     {
//         goal: 500,
//     },
//     {
//         goal: 600,
//     },
//     {
//         goal: 700,
//     },
//     {
//         goal: 800,
//     },
//     {
//         goal: 900,
//     },
//     {
//         goal: 1000,
//     },
//     {
//         goal: 1100,
//     },
//     {
//         goal: 1200,
//     },
//     {
//         goal: 1300,
//     },
//     {
//         goal: 1400,
//     },
// ]

// const marques = [
//     {
//         id: 1,
//         name: 'braillesense',
//         title: 'Braille Sense',
//         htmlFor: 'braillesense',
//     },
//     {
//         id: 2,
//         name: 'clover3',
//         title: 'Clover 3',
//         htmlFor: 'clover3',
//     },
//     {
//         id: 3,
//         name: 'amelie',
//         title: 'Amelie Loupe',
//         htmlFor: 'amelie',
//     },
//     {
//         id: 4,
//         name: 'moni',
//         title: 'Moni Loupe',
//         htmlFor: 'moni',
//     },
//     {
//         id: 5,
//         name: 'reveal16',
//         title: 'Reveal 16',
//         htmlFor: 'reveal16',
//     },
//     {
//         id: 6,
//         name: 'explor',
//         title: 'ExploR',
//         htmlFor: 'explor',
//     },
//     {
//         id: 7,
//         name: 'ordissimo',
//         title: 'Ordissimo',
//         htmlFor: 'ordissimo',
//     },
//     {
//         id: 8,
//         name: 'apple',
//         title: 'Apple',
//         htmlFor: 'apple',
//     },
//     {
//         id: 9,
//         name: 'android',
//         title: 'Android',
//         htmlFor: 'android',
//     },
//     {
//         id: 10,
//         name: 'android',
//         title: 'Android',
//         htmlFor: 'android',
//     },
//     {
//         id: 11,
//         name: 'facitalab',
//         title: 'FacitaLab',
//         htmlFor: 'facitalab',
//     },
//     {
//         id: 12,
//         name: 'pixstar',
//         title: 'PixStar',
//         htmlFor: 'pixstar',
//     },
//     {
//         id: 13,
//         name: 'cl8000',
//         title: 'CL8000',
//         htmlFor: 'cl8000',
//     },
//     {
//         id: 14,
//         name: 'cl7000',
//         title: 'CL8700',
//         htmlFor: 'cl8700',
//     },
//     {
//         id: 15,
//         name: 'cl7000',
//         title: 'CL8700',
//         htmlFor: 'cl8700',
//     },
//     {
//         id: 16,
//         name: 'geemarc',
//         title: 'GeeMarc',
//         htmlFor: 'geemarc',
//     },
//     {
//         id: 17,
//         name: 'konrow',
//         title: 'KonRow',
//         htmlFor: 'konrow',
//     },
//     {
//         id: 18,
//         name: 'smartvision',
//         title: 'Smartvision',
//         htmlFor: 'smartvision',
//     },

// ]

// const couleurs = [
//     {
//         id: 1,
//         name: 'rouge',
//         title: 'Rouge',
//         htmlFor: 'rouge',
//     },
//     {
//         id: 2,
//         name: 'bleu',
//         title: 'Bleu',
//         htmlFor: 'bleu',
//     },
//     {
//         id: 3,
//         name: 'noir',
//         title: 'Noir',
//         htmlFor: 'noir',
//     },
//     {
//         id: 4,
//         name: 'jaune',
//         title: 'Jaune',
//         htmlFor: 'jaune',
//     },
//     {
//         id: 5,
//         name: 'vert',
//         title: 'Vert',
//         htmlFor: 'vert',
//     },
//     {
//         id: 6,
//         name: 'orange',
//         title: 'Orange',
//         htmlFor: 'orange',
//     },
//     {
//         id: 7,
//         name: 'rose',
//         title: 'Rose',
//         htmlFor: 'rose',
//     },
//     {
//         id: 8,
//         name: 'blanc',
//         title: 'Blanc',
//         htmlFor: 'blanc',
//     }
// ]


export type CartItemType = {
    [x: string]: any
    id: number;
    name: string;
    description: string;
    hhtmlFor: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
    price: number;
    color: string;
    amount: number;
    data: string;
};

//Liste des produits 
const products: CartItemType[] = [
    {
        id: 1,
        name: 'Braille Sense 6',
        description: 'Évalué par nos consommateurs, bloc-notes braille',
        hhtmlFor: '#',
        imageSrc: image1,
        imageAlt: "Braille Sense 6",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'dog',
        data: '',
    },
    {
        id: 2,
        name: 'Clover 2',
        description: 'Full HD, image crystal',
        hhtmlFor: '#',
        imageSrc: image2,
        imageAlt: "Clover 2",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'loupeelectronique',
        data: '',
    },
    {
        id: 3,
        name: 'Loupe de lecture',
        description: 'Loupe grossissante, x10, souple',
        hhtmlFor: '#',
        imageSrc: image3,
        imageAlt: "Loupe de lecture",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'lunettesloupe',
        data: '',
    }, {
        id: 4,
        name: 'Montre Parlante',
        description: 'Montre pour aveugle',
        hhtmlFor: '#',
        imageSrc: image4,
        imageAlt: "Montre Parlante",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'montres',
        data: '',
    }, {
        id: 5,
        name: 'Ordissimo 1',
        description: 'Ordinateur pour Seniors',
        hhtmlFor: '#',
        imageSrc: image5,
        imageAlt: "Ordissimo 1",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'ordinateur',
        data: '',
    },
    {
        id: 6,
        name: 'Galaxy Ultra S21',
        description: 'Recommandé WCAG, Accesibilité',
        hhtmlFor: '#',
        imageSrc: image6,
        imageAlt: "Galaxy Ultra S21.",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'telephones',
        data: '',
    },
    {
        id: 7,
        name: 'Facilo Tab',
        description: 'Tablette pour Senior, Utilisation simplifiée',
        hhtmlFor: '#',
        imageSrc: image7,
        imageAlt: "Facilo Tab",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'tablettes',
        data: '',
    },
    {
        id: 8,
        name: 'Loupe Amelie',
        description: 'DMLA ou cataracte, agrandissement, lecture simplifiée',
        hhtmlFor: '#',
        imageSrc: image8,
        imageAlt: "Loupe Amelie",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'lunettesloupe',
        data: '',
    },
    {
        id: 9,
        name: 'Loupe Macrolux',
        description: 'LED SMD, 3.6x loupe éclairée',
        hhtmlFor: '#',
        imageSrc: image9,
        imageAlt: "Loupe Macrolux",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'loupeelectronique',
        data: '',
    },
    {
        id: 10,
        name: 'Montre Bayard',
        description: 'Montre Quartz',
        hhtmlFor: '#',
        imageSrc: image10,
        imageAlt: "Montre Bayard",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'montre',
        data: '',
    },
    {
        id: 11,
        name: 'Iphone 11',
        description: 'Écran Liquid Retina, LCD, Accessibilité',
        hhtmlFor: '#',
        imageSrc: image11,
        imageAlt: "Iphone 11",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'smartphones',
        data: '',
    },
    {
        id: 12,
        name: 'Tablette Ordissimo',
        description: 'Tablette simplifiée, Senior',
        hhtmlFor: '#',
        imageSrc: image12,
        imageAlt: "Tablette Ordissimo",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'tablettes',
        data: '',
    },
    {
        id: 13,
        name: 'Cl8000',
        description: 'Téléphone fixe, Bouton SOS',
        hhtmlFor: '#',
        imageSrc: image13,
        imageAlt: "Cl8000",
        price: 4790.00,
        color: 'Black',
        amount: 0,
        category: 'telephonessenior',
        data: '',
    },
];


const options = ["all", "dog", "cat", "lizard"];



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

        <div className='w-[30%] p-2'>
            <div className="bg-white">
                <div style={{ margin: "10px" }}>
                    <h1>
                        Catégorie: <u>{filter}</u>
                    </h1>

                </div>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Catégorie : </AccordionTrigger>
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
