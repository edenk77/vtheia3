import { ArrowPathIcon, BuildingStorefrontIcon, CheckBadgeIcon, FingerPrintIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Un magasin accesible',
        description:
            'Nous sommes présent en ligne, sur place et sur internet, de quoi ne pas vous laisser tomber.',
        icon: BuildingStorefrontIcon,
    },
    {
        name: 'Certifier et approuver',
        description:
            'Notre équipe de designer et de développeur a pris le temps de tester chaque produit et chaque expérience.',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Queues simples',
        description:
            "Pas de fil d'attente et de cas mis de côté. Nous gérons chaque difficulté pour vous aider. ",
        icon: ArrowPathIcon,
    },
    {
        name: 'Sécurité avancée',
        description:
            'Tout est sous contrôle pour votre utilisation quotidien. Chaque danger a été mesuré.',
        icon: FingerPrintIcon,
    },
]

const Featured = () => {
    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Un soutien indispensable</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Tout ce dont vous avez besoin pour acheter votre produit
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Comparer à d'autres catalogues pour personnes malvoyantes, nous vous assurons un soutien téléphonique et en chat pour toute vos questions.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured