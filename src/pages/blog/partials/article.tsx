import Img1 from '@/img/desktoplinus.jpg'
import Img2 from '@/img/destoplinus2.jpg'
import Img3 from '@/img/destoplinus3.jpg'
import Img4 from '@/img/persona/jakes.jpg'
import Img5 from '@/img/persona/anne.jpg'


const Article = () => {
    return (
        <div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0">
                        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">De notre blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
                            Apprenez à utiliser vos produits grâce à nos conseils d'experts.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                    Mar 16, 2020
                                </time>
                                <a
                                    href='#'
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </a>
                            </div>
                            <div className='mt-4 rounded-'>
                                <img
                                    src={Img1}
                                    alt="Front of men's Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
                                />
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href='#'>
                                        <span className="absolute inset-0" />
                                        <h1>Augmentez votre expérience dans l'accessibilité</h1>
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">C'est bel et bien une expérience et vous allez devenri meilleur grâce à notre article.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                            <span className="absolute inset-0" />
                                            Michael Foster
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>

                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                    Mar 16, 2020
                                </time>
                                <a
                                    href='#'
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </a>
                            </div>
                            <div className='mt-4 rounded-sm'>
                                <img
                                    src={Img2}
                                    alt="Front of men's Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
                                />
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href='#'>
                                        <span className="absolute inset-0" />
                                        <h1>Les suggestions web</h1>
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">il est vrai qu'il est difficile de trouver tout ce que vous souhaitez à proximité: nous sommes là pour cela.</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={Img4} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                            <span className="absolute inset-0" />
                                            Jakes Alphonse
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Blogger</p>
                                </div>
                            </div>
                        </article>

                        <article className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                    Mar 16, 2020
                                </time>
                                <a
                                    href='#'
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    Marketing
                                </a>
                            </div>
                            <div className='mt-4 rounded-sm'>
                                <img
                                    src={Img3}
                                    alt="Front of men's Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
                                />
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href='#'>
                                        <span className="absolute inset-0" />
                                        <h1>Les normes WCAG</h1>
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Tout le monde veut faire du web mais personne ne connait réellement ses règles?</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={Img5} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                            <span className="absolute inset-0" />
                                            Anne Swoden
                                        </a>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article