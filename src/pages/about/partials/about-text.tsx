import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const AboutText = () => {
    return (
        <div className='xl:flex md:flex xl:h-full'>
            <div className='w-full'>
                <Card className='py-8 ml-24 border-none shadow-none'>
                    <CardHeader>
                        <CardTitle className='text-3xl'>Notre mission</CardTitle>
                        <CardDescription className='w-4/5'>Notre mission est simple: créer une ouverture sur le monde de l'alternative.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='mb-8 w-4/5'>Voytheia est une plateforme dédiée à l'amélioration de la qualité de vie des personnes malvoyantes grâce à un vaste catalogue de produits électroniques adaptés. Notre site web se distingue par son engagement à offrir des solutions technologiques innovantes et accessibles, permettant à nos utilisateurs de surmonter les défis quotidiens liés à la malvoyance. </p>
                        <p className='mb-8 w-4/5'>Que vous cherchiez des outils pour faciliter la lecture, la communication ou la navigation, Voytheia propose des produits de haute qualité soigneusement sélectionnés pour répondre aux besoins spécifiques de chacun.</p>
                    </CardContent>
                </Card>
            </div>
            <div className='w-full py-8 sm:ml-24'>
                <div className='mb-4'>
                    <Card className='border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-5xl'>7,951 milliards</CardTitle>
                            <CardDescription className="w-4/5">Nous sommes nombreux sur la terre. Nous proposons des descriptions détaillées, des avis utilisateurs et des démonstrations en vidéo pour aider nos clients à faire des choix éclairés. </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <div className='mb-4'>
                    <Card className='border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-5xl'>119k €</CardTitle>
                            <CardDescription className="w-4/5">Ce que peut rapporter les produts et alternatives, mais aussi l'aide mis en place pour aider nos utilisateurs. </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <div>
                    <Card className='border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-5xl'>46,000</CardTitle>
                            <CardDescription className="w-4/5">C'est le nombre de personnes travaillant dans le monde en collaboration avec notre marque pour aider au mieux l'accessibilité. </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>


    )
}

export default AboutText