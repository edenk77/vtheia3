
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function Stats() {
    return (
        <div className="p-6">
            <Card className="p-6 bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-none">
                <CardHeader className="">
                    <CardDescription className="text-white">Nos antécédents</CardDescription>
                    <CardTitle className="text-3xl">Augmenter votre vision de la technologie</CardTitle>
                    <CardDescription className="w-80 text-white">La clarté dans la vision et la technologie adaptive pour les personnes mnalvoyantes a été notre principale projet durant ses 5 dernières années.  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col xl:flex-row lg:flex-row gap-6">

                    <Card className="w-full xl:w-1/4 lg:w-1/4  bg-transparent shadow-none text-white">
                        <CardHeader>
                            <CardTitle>8,000+</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Le nombre de personnes malvoyantes que nous avons pu aider dans le cadre de notre vente et de nos produits.</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full xl:w-1/4 lg:w-1/4  bg-transparent shadow-none text-white">
                        <CardHeader>
                            <CardTitle>3%</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>La hausse de visibilité que nous avons eu en présence des réseaux sociaux et les sites de recherche.</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full xl:w-1/4 lg:w-1/4  bg-transparent shadow-none text-white">
                        <CardHeader>
                            <CardTitle>Plus que moins</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Une attention particulière envers les produits et alternatifs pour les personnes malvoyantes Un plus qui n'était pas assez présent autrefois.</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full xl:w-1/4 lg:w-1/4  bg-transparent shadow-none text-white">
                        <CardHeader>
                            <CardTitle>77%</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Le nombre de personnes qui utilise le net sans aide vocal ou lecteur de navigateur.</p>
                        </CardContent>
                    </Card>

                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button variant={"ghost"}>Voir plus</Button>
                </CardFooter>
            </Card>
        </div>

    )
}


export default Stats
