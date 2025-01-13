import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Img1 from '@/img/persona/leslie.jpg'
import Img2 from '@/img/persona/carlos.jpg'
import Img3 from '@/img/persona/rahul.jpg'
import Img4 from '@/img/persona/aisha.jpg'
import Img5 from '@/img/persona/ines.jpg'
import Img6 from '@/img/persona/eden.jpg'

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            Img1,
    },
    {
        name: 'Carlos Rivera ',
        role: 'Développeur back-end',
        imageUrl:
            Img2,
    },
    {
        name: 'Eden Konde Tedika',
        role: 'Designer UX/UI',
        imageUrl:
            Img6,
    },
    {
        name: 'Rahul Gupta',
        role: 'DevOps',
        imageUrl:
            Img3,
    },
    {
        name: 'Aisha Nwosu',
        role: 'Développeuse front-end',
        imageUrl:
            Img4,
    },
    {
        name: 'Ines Belize',
        role: 'Testeur QA (Assurance qualité)',
        imageUrl:
            Img5,
    },
]


const Teamwork = () => {
    return (
        <div>
            <Card className="p-12 border-none">
                <CardHeader className='text-center'>
                    <CardTitle className='text-5xl'>Rencontrez nos dirigeants</CardTitle>
                    <CardDescription>Une équipe d'or pour vous aider à vivre une expérience au mieux.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">

                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {people.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Teamwork