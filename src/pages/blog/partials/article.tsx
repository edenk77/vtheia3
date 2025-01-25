import Img1 from '@/img/desktoplinus.jpg'
import Img2 from '@/img/destoplinus2.jpg'
import Img3 from '@/img/destoplinus3.jpg'
import Img4 from '@/img/persona/jakes.jpg'
import Img5 from '@/img/persona/anne.jpg'

const articles = [
    {
        id: 1,
        time: ' Mar 16, 2020',
        badge: 'Marketing',
        imageSrc: Img1,
        title: "Augmentez votre expérience dans l'accessibilité",
        description: "C'est bel et bien une expérience et vous allez devenri meilleur grâce à notre article",
        imagePersona: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        personaName: 'Michael Foster',
        personaRole: 'Co-Founder / CTO',
    },
    {
        id: 2,
        time: 'Mar 16, 2020',
        badge: 'Marketing',
        imageSrc: Img2,
        title: 'Les suggestions web',
        description: "il est vrai qu'il est difficile de trouver tout ce que vous souhaitez à proximité: nous sommes là pour cela.",
        imagePersona: Img4,
        personaName: 'Jakes Alphonse',
        personaRole: 'Blogger',
    },
    {
        id: 3,
        time: 'Mar 16, 2020',
        badge: 'Marketing ',
        imageSrc: Img3,
        title: 'Les normes WCAG',
        description: 'Tout le monde veut faire du web mais personne ne connait réellement ses règles?',
        imagePersona: Img5,
        personaName: 'Anne Swoden',
        personaRole: 'Co-Founder / CTO',
    }
]


const Article = () => {
    return (
        <div>
            <div className=" py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Titre de la scetion  */}
                    <div className="mx-auto lg:mx-0">
                        <h2 className="text-3xl text-center font-bold tracking-tight  sm:text-4xl">De notre blog</h2>
                        <p className="mt-2 text-lg leading-8  text-center">
                            Apprenez à utiliser vos produits grâce à nos conseils d'experts.
                        </p>
                    </div>

                    {/* Debut de la card */}
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {articles.map((article) => (
                            <article key={article.id} className="flex max-w-xl flex-col items-start justify-between" >
                                <div className="flex items-center gap-x-4 text-xs" >
                                    <time className="">
                                        {article.time}
                                    </time>
                                    <a
                                        href='#'
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {article.badge}
                                    </a>
                                </div>
                                <div className='mt-4 rounded-'>
                                    <img
                                        src={article.imageSrc}
                                        alt="Front of men's Basic Tee in black."
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
                                    />
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:text-gray-600">
                                        <a href='#'>
                                            <span className="absolute inset-0" />
                                            <h1>{article.title}</h1>
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 ">{article.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={article.imagePersona} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold ">
                                            <a href={article.imagePersona}>
                                                <span className="absolute inset-0" />
                                                {article.personaName}
                                            </a>
                                        </p>
                                        <p className="">{article.personaRole}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article