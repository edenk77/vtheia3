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



const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

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




const data = [
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 400,
    },
    {
        goal: 500,
    },
    {
        goal: 600,
    },
    {
        goal: 700,
    },
    {
        goal: 800,
    },
    {
        goal: 900,
    },
    {
        goal: 1000,
    },
    {
        goal: 1100,
    },
    {
        goal: 1200,
    },
    {
        goal: 1300,
    },
    {
        goal: 1400,
    },
]

const marques = [
    {
        id: 1,
        name: 'braillesense',
        title: 'Braille Sense',
        htmlFor: 'braillesense',
    },
    {
        id: 2,
        name: 'clover3',
        title: 'Clover 3',
        htmlFor: 'clover3',
    },
    {
        id: 3,
        name: 'amelie',
        title: 'Amelie Loupe',
        htmlFor: 'amelie',
    },
    {
        id: 4,
        name: 'moni',
        title: 'Moni Loupe',
        htmlFor: 'moni',
    },
    {
        id: 5,
        name: 'reveal16',
        title: 'Reveal 16',
        htmlFor: 'reveal16',
    },
    {
        id: 6,
        name: 'explor',
        title: 'ExploR',
        htmlFor: 'explor',
    },
    {
        id: 7,
        name: 'ordissimo',
        title: 'Ordissimo',
        htmlFor: 'ordissimo',
    },
    {
        id: 8,
        name: 'apple',
        title: 'Apple',
        htmlFor: 'apple',
    },
    {
        id: 9,
        name: 'android',
        title: 'Android',
        htmlFor: 'android',
    },
    {
        id: 10,
        name: 'android',
        title: 'Android',
        htmlFor: 'android',
    },
    {
        id: 11,
        name: 'facitalab',
        title: 'FacitaLab',
        htmlFor: 'facitalab',
    },
    {
        id: 12,
        name: 'pixstar',
        title: 'PixStar',
        htmlFor: 'pixstar',
    },
    {
        id: 13,
        name: 'cl8000',
        title: 'CL8000',
        htmlFor: 'cl8000',
    },
    {
        id: 14,
        name: 'cl7000',
        title: 'CL8700',
        htmlFor: 'cl8700',
    },
    {
        id: 15,
        name: 'cl7000',
        title: 'CL8700',
        htmlFor: 'cl8700',
    },
    {
        id: 16,
        name: 'geemarc',
        title: 'GeeMarc',
        htmlFor: 'geemarc',
    },
    {
        id: 17,
        name: 'konrow',
        title: 'KonRow',
        htmlFor: 'konrow',
    },
    {
        id: 18,
        name: 'smartvision',
        title: 'Smartvision',
        htmlFor: 'smartvision',
    },

]

const couleurs = [
    {
        id: 1,
        name: 'rouge',
        title: 'Rouge',
        htmlFor: 'rouge',
    },
    {
        id: 2,
        name: 'bleu',
        title: 'Bleu',
        htmlFor: 'bleu',
    },
    {
        id: 3,
        name: 'noir',
        title: 'Noir',
        htmlFor: 'noir',
    },
    {
        id: 4,
        name: 'jaune',
        title: 'Jaune',
        htmlFor: 'jaune',
    },
    {
        id: 5,
        name: 'vert',
        title: 'Vert',
        htmlFor: 'vert',
    },
    {
        id: 6,
        name: 'orange',
        title: 'Orange',
        htmlFor: 'orange',
    },
    {
        id: 7,
        name: 'rose',
        title: 'Rose',
        htmlFor: 'rose',
    },
    {
        id: 8,
        name: 'blanc',
        title: 'Blanc',
        htmlFor: 'blanc',
    }
]





export const FilterMenu = () => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className='w-[30%]'>
            <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                        <div className="fixed inset-0 z-40 flex">
                            <DialogPanel
                                transition
                                className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                            >
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href} className="block px-2 py-3">
                                                    {category.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                                        <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-6">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex gap-3">
                                                            <div className="flex h-5 shrink-0 items-center">
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        defaultValue={option.value}
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <label
                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                className="min-w-0 flex-1 text-gray-500"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                </form>
                            </DialogPanel>
                        </div>
                    </Dialog>

                    <main className="mx-auto px-4 sm:px-6 lg:px-8">
                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <div className="w-full">
                                {/* Filtres */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href}>{category.name}</a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                            <h3 className="-my-3 flow-root">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                                        <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex gap-3">
                                                            <div className="flex h-5 shrink-0 items-center">
                                                                <div className="group grid size-4 grid-cols-1">
                                                                    <input
                                                                        defaultValue={option.value}
                                                                        defaultChecked={option.checked}
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        type="checkbox"
                                                                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                    />
                                                                    <svg
                                                                        fill="none"
                                                                        viewBox="0 0 14 14"
                                                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-[:checked]:opacity-100"
                                                                        />
                                                                        <path
                                                                            d="M3 7H11"
                                                                            strokeWidth={2}
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                </form>

                                {/*  */}
                                <div className="lg:col-span-3">{/* Your content */}</div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </div>
    )
}
