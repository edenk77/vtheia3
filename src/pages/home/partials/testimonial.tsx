// import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Img1 from '@/img/persona/lea.jpg'
import Img2 from '@/img/persona/marc.jpg'
import Img3 from '@/img/persona/sophie.jpg'
import Img4 from '@/img/persona/paul.jpg'



const Testimonial = () => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl">Témoignages</CardTitle>
                <CardDescription className="mx-auto">
                    Ces témoignages montrent comment les produits high-tech de Voytheia peuvent transformer la vie des personnes malvoyantes, en leur offrant autonomie et efficacité dans leurs activités quotidiennes.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center w-full mx-auto">
                <Card className="w-full h-full border-none shadow-none">
                    <CardContent className=" justify-center items-center w-full pt-6 h-full mx-auto">
                        <Tabs defaultValue="account" className="w-auto h-auto flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6">
                            <TabsList className="flex flex-col h-full w-full p-6">

                                <TabsTrigger value="lea" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img1} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">Léa Martin</p>
                                        <p className="text-slate-400">Étudiante en informatique</p>
                                        <p className="text-slate-400">25 ans</p>
                                    </div>
                                </TabsTrigger>

                                <TabsTrigger value="paul" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img3} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">Sophie Durand</p>
                                        <p className="text-slate-400">Retraitée, ancienne enseignante</p>
                                        <p className="text-slate-400">42 ans</p>
                                    </div>
                                </TabsTrigger>

                                <TabsTrigger value="sophie" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img2} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">
                                            Marc Dubois</p>
                                        <p className="text-slate-400">Musicien</p>
                                        <p className="text-slate-400">60 ans</p>
                                    </div>
                                </TabsTrigger>

                                <TabsTrigger value="marc" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img4} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">
                                            Paul Lefebvre</p>
                                        <p>Consultant en ressources humaines</p>
                                        <p className="text-slate-400">35 ans</p>
                                    </div>
                                </TabsTrigger>

                            </TabsList>
                            <div className="flex items-center">

                                <TabsContent value="lea">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Très intuitif</p>
                                    <p className="mb-6 italic">
                                        En tant qu’étudiante en informatique malvoyante, les technologies assistives proposées par Voytheia ont révolutionné mon quotidien. Les lunettes intelligentes me permettent de lire les écrans et les documents avec une clarté impressionnante. Grâce à ces produits, je peux suivre mes cours et réaliser mes projets sans aucune difficulté. Je recommande vivement Voytheia à tous ceux qui recherchent des solutions d'accessibilité fiables et efficaces.
                                    </p>

                                </TabsContent>

                                <TabsContent value="paul">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Une aide supplémentaire</p>
                                    <p className="mb-6 italic">
                                        Depuis que j'ai pris ma retraite, je passe beaucoup de temps à lire et à écrire des lettres à mes amis et à ma famille. Les dispositifs de lecture et d’agrandissement de Voytheia ont transformé mon expérience. Je peux maintenant lire des livres et écrire des lettres sans aucun effort. Ces produits ont vraiment amélioré ma qualité de vie et je ne pourrais plus m’en passer.
                                    </p>

                                </TabsContent>

                                <TabsContent value="sophie">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Viva Voytheia !</p>
                                    <p className="mb-6 italic">
                                        En tant que musicien malvoyant, il est crucial pour moi de pouvoir lire les partitions et de naviguer sur mes appareils pour composer et enregistrer. Les innovations de Voytheia, comme les lecteurs de partitions intelligents et les applications de transcription audio, m’ont permis de continuer à créer de la musique sans contraintes. Ces technologies sont essentielles pour mon métier et je suis extrêmement reconnaissant envers Voytheia pour leur soutien.
                                    </p>

                                </TabsContent>

                                <TabsContent value="marc">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Un avenir assuré</p>
                                    <p className="mb-6 italic">
                                        En tant que consultant en ressources humaines, je dois traiter une grande quantité de documents chaque jour. Les produits de Voytheia, comme les logiciels de reconnaissance vocale et les appareils de lecture d’écran, m’aident à rester productif et indépendant dans mon travail. Ces technologies m’ont permis de maintenir un haut niveau de performance et de ne pas laisser ma malvoyance être un obstacle. Merci, Voytheia, pour ces outils incroyables !
                                    </p>
                                </TabsContent>
                            </div>

                        </Tabs>

                        {/* <Tabs defaultValue="account" className="w-auto h-auto gap-6">
                            <TabsList className="flex flex-col h-full w-full p-6">

                                <TabsTrigger value="lea" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img1} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">Léa Martin</p>
                                        <p className="text-slate-400">Étudiante en informatique</p>
                                        <p className="text-slate-400">25 ans</p>
                                    </div>
                                </TabsTrigger>

                                <TabsTrigger value="paul" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img3} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">Sophie Durand</p>
                                        <p className="text-slate-400">Retraitée, ancienne enseignante</p>
                                        <p className="text-slate-400">42 ans</p>
                                    </div>
                                </TabsTrigger>

                                <TabsTrigger value="sophie" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img2} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">
                                            Marc Dubois</p>
                                        <p className="text-slate-400">Musicien</p>
                                        <p className="text-slate-400">60 ans</p>
                                    </div>
                                </TabsTrigger>

                                <TabsTrigger value="marc" className="w-full p-6 text-left">
                                    <div className="text-left w-full">
                                        <Avatar>
                                            <AvatarImage src={Img4} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p className="text-xl">
                                            Paul Lefebvre</p>
                                        <p>Consultant en ressources humaines</p>
                                        <p className="text-slate-400">35 ans</p>
                                    </div>
                                </TabsTrigger>

                            </TabsList>
                            <div className="flex items-center">

                                <TabsContent value="lea">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Très intuitif</p>
                                    <p className="mb-6 italic">
                                        En tant qu’étudiante en informatique malvoyante, les technologies assistives proposées par Voytheia ont révolutionné mon quotidien. Les lunettes intelligentes me permettent de lire les écrans et les documents avec une clarté impressionnante. Grâce à ces produits, je peux suivre mes cours et réaliser mes projets sans aucune difficulté. Je recommande vivement Voytheia à tous ceux qui recherchent des solutions d'accessibilité fiables et efficaces.
                                    </p>

                                </TabsContent>

                                <TabsContent value="paul">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Une aide supplémentaire</p>
                                    <p className="mb-6 italic">
                                        Depuis que j'ai pris ma retraite, je passe beaucoup de temps à lire et à écrire des lettres à mes amis et à ma famille. Les dispositifs de lecture et d’agrandissement de Voytheia ont transformé mon expérience. Je peux maintenant lire des livres et écrire des lettres sans aucun effort. Ces produits ont vraiment amélioré ma qualité de vie et je ne pourrais plus m’en passer.
                                    </p>

                                </TabsContent>

                                <TabsContent value="sophie">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Viva Voytheia !</p>
                                    <p className="mb-6 italic">
                                        En tant que musicien malvoyant, il est crucial pour moi de pouvoir lire les partitions et de naviguer sur mes appareils pour composer et enregistrer. Les innovations de Voytheia, comme les lecteurs de partitions intelligents et les applications de transcription audio, m’ont permis de continuer à créer de la musique sans contraintes. Ces technologies sont essentielles pour mon métier et je suis extrêmement reconnaissant envers Voytheia pour leur soutien.
                                    </p>

                                </TabsContent>

                                <TabsContent value="marc">
                                    <div className="items-left font-bold mb-6">
                                        <svg className="h-12  mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl mb-6">Un avenir assuré</p>
                                    <p className="mb-6 italic">
                                        En tant que consultant en ressources humaines, je dois traiter une grande quantité de documents chaque jour. Les produits de Voytheia, comme les logiciels de reconnaissance vocale et les appareils de lecture d’écran, m’aident à rester productif et indépendant dans mon travail. Ces technologies m’ont permis de maintenir un haut niveau de performance et de ne pas laisser ma malvoyance être un obstacle. Merci, Voytheia, pour ces outils incroyables !
                                    </p>
                                </TabsContent>
                            </div>

                        </Tabs> */}
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}

export default Testimonial