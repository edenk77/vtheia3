import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Img1 from "@/img/cataracte/cataracte-1.webp"
import Img2 from "@/img/cataracte/cataracte-2.webp"
import Img3 from "@/img/pertevision/NC000871-948x1024-1.webp"
import Img4 from "@/img/pertevision/NC000871_2-948x1024-1.webp"
import Img5 from "@/img/pertevisioncentrale/Tournage-ca-nous-regarde-2022_3-1024x1024-1.webp"
import Img6 from "@/img/pertevisioncentrale/Tournage-ca-nous-regarde-2022_dmla-1024x1024-1.webp"
import Img7 from "@/img/retinopathie/retinoptathie-pigmerntaire-1.webp"
import Img8 from "@/img/retinopathie/retinoptathie-pigmerntaire-2.webp"



const Deficience = () => {

    // const state = {
    //     img: "https://i.vimeocdn.com/portrait/58832_300x300"
    // };

    return (
        <div>
            <Card className='border-none shadow-none my-6'>
                <CardHeader>
                    <CardTitle className='text-center my-6 text-3xl'>Les 4 grands types de malvoyances</CardTitle>
                    <CardDescription className='text-center mx-6 lg:mx-24 xl:mx-48'>La malvoyance est complexe car il n’y a pas deux visions identiques : certaines personnes parviennent à lire mais utilisent une canne blanche pour se déplacer. D’autres utilisent une aide optique pour avoir accès à l’information mais se déplacent de manière autonome.</CardDescription>
                </CardHeader>
                <CardContent className='xl:flex xl:justify-center xl:flex-row lg:grid lg:justify-items-center lg:grid-cols-2 md:grid md:justify-items-center md:grid-cols-2 sm:flex
                xs:gap-0 flex flex-col mx-24 justify-center text-center gap-6'>
                    <Card className='w-80 border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-center'>Vision floue avec un champ visuel encore intact</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="absolute flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                            <div>
                                <img src={Img2} className='h-full rounded w-64'
                                    style={{
                                        transition: "opacity 0.3s ease-in-out",
                                    }}
                                    onMouseOver={(e) => (
                                        e.currentTarget.src = Img2
                                    )}
                                    onMouseLeave={(e) => (
                                        e.currentTarget.src = Img1
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='w-80 border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-center mb-6'>Perte de vision périphérique</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <img src={Img3} className='h-64 rounded w-64'
                                    onMouseOver={(e) => (
                                        e.currentTarget.src = Img3
                                    )}
                                    onMouseLeave={(e) => (
                                        e.currentTarget.src = Img4
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='w-80 border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-center mb-12'>Perte vision centrale</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <img src={Img6} className='h-full rounded w-64'
                                    onMouseOver={(e) => (
                                        e.currentTarget.src = Img6
                                    )}
                                    onMouseLeave={(e) => (
                                        e.currentTarget.src = Img5
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className='w-80 border-none shadow-none'>
                        <CardHeader>
                            <CardTitle className='text-center mb-12'>Vision avec taches</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <img src={Img8} className='h-full rounded w-64'
                                    onMouseOver={(e) => (
                                        e.currentTarget.src = Img8
                                    )}
                                    onMouseLeave={(e) => (
                                        e.currentTarget.src = Img7
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}

export default Deficience