import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        // Commentaires : C'est ici que se tient la bannière et tout ce qui s'y tient. 
        <div className="mx-auto w-7xl px-0 py-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 pb-16 shadow-2xl rounded-none xl:max-w-full sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stopColor="#7775D6" />
                            <stop offset="1" stopColor="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
                {/* VOYTHEIA BANNER */}
                <div className="mx-auto max-w-md xl:py-52 xl:max-w-full xl:text-center text-center  lg:flex-auto lg:py-32 lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">Voytheia</h2>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Le site de l'accessibilité</h2>
                    <div>
                        <p className="mt-6 text-lg  text-gray-300">Trouver votre équipement pour assistance visuel dans un catalogue connu de tous.
                        </p>
                        <p className=" text-lg  text-gray-300">
                            Une aide qui ne tarde pas à vous venir en aide!
                        </p>
                    </div>
                    {/* BUTTON BANNER */}
                    <div className="mt-10 flex items-center justify-center gap-x-6 xl:max-w-full xl:justify-center lg:justify-center">
                        <Link to={"/Quiz"} className="flex items-center">
                            <Button variant='blue'>
                                Commencer le test
                            </Button>
                        </Link>
                        <Link to={"/"} className="flex items-center">
                            <Button variant='blueoutline'>
                                En savoir plus<span aria-hidden="true">→</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}




