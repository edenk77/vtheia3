import { Card } from '@/components/ui/card'
import React from 'react'
import Img1 from '@/img/Business_Card_Voytheia.jpg'
import Img2 from '@/img/SmallCargoTruck_Voytheia.jpg'


const Section = () => {
    return (
        <Card className='border-none shadow-none'>
            <div className="gap-16 items-center py-8 px-16 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-16 md:px-16">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">L'importance de la vue ;)</h2>
                    <p className="mb-4">Nous avons compris qu'il y a différent type de vue. Le monde ne le comprend pas encore et l'importance d'un produit peut tout changer chez l'utilisateur.</p>
                    <p>Grâce à nos blogs, vous pourrez d´autant plus apprécier un produit selon n'importe quel type de vue.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={Img1} alt="office content 1" />
                    <img className="mt-4 w- lg:mt-10 rounded-lg h-auto" src={Img2} alt="office content 2" />
                </div>
            </div>
        </Card>
    )
}
export default Section