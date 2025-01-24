import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

export const Terms = () => {
    return (
        <div className='p-12 text-justify mx-24 '>
            <Button>
                <Link to={"/"} className="">
                    Retour page d'accueil
                </Link>
            </Button>




            <h1 className='text-2xl font-bold text-center mb-12'>Conditions Générales d’Utilisation</h1>
            <p className='mb-6'>Bienvenue chez Voytheia ! Ces Conditions Générales d’Utilisation ("Conditions") régissent votre accès et utilisation de notre site web, www.voytheia.netlify.app , ainsi que l’achat de produits via notre plateforme. En utilisant notre Site, vous acceptez ces Conditions. Si vous n’êtes pas d’accord, veuillez cesser d’utiliser le Site.</p>



            <h1 className='font-bold'>1. Utilisation du Site</h1>
            <p>Vous acceptez d’utiliser le Site en conformité avec toutes les lois et réglementations applicables. Vous ne pouvez pas :
            </p>
            <ul className='mb-6'>
                <li>Utiliser le Site à des fins frauduleuses ou illégales.</li>
                <li>Tenter d’obtenir un accès non autorisé à nos systèmes.</li>
                <li>Perturber le fonctionnement normal du Site.</li>
            </ul>


            <h1 className='font-bold'>2. Informations sur les Produits</h1>
            <p className='mb-6'>Nous nous efforçons de fournir des descriptions et des images de produits précises. Cependant, de légères variations peuvent survenir. Veuillez nous contacter pour toute question concernant les spécifications des produits.</p>



            <h1 className='font-bold'>3. Tarifs et Paiements</h1>
            <ul className='mb-6'>
                <li>Les prix sont affichés en EUR.</li>
                <li>Nous nous réservons le droit de modifier les prix sans préavis.</li>
                <li>Les paiements sont traités de manière sécurisée via des prestataires tiers de confiance.</li>
            </ul>


            <h1 className='font-bold'>4. Livraison et Expédition</h1>
            <ul className='mb-6'>
                <li>Les délais et coûts de livraison seront détaillés lors du passage à la caisse.</li>
                <li>Nous ne sommes pas responsables des retards causés par les transporteurs.</li>
            </ul>



            <h1 className='font-bold'>5. Retours et Remboursements</h1>
            <p className='mb-6'>Veuillez consulter notre Politique de Retour pour des informations détaillées. Les retours doivent respecter les directives qui y sont mentionnées.</p>



            <h1 className='font-bold'>6. Propriété Intellectuelle</h1>
            <p className='mb-6'>Tout le contenu du Site, y compris les textes, images et logos, est la propriété de Voytheia ou de ses concédants. Vous ne pouvez pas reproduire, distribuer ou modifier tout contenu sans autorisation écrite.</p>



            <h1 className='font-bold'>7. Limitation de Responsabilité</h1>
            <p className='mb-6'>Voytheia n’est pas responsable des dommages résultant de l’utilisation de notre Site ou de nos produits, sauf disposition légale contraire.</p>



            <h1 className='font-bold'>8. Loi Applicable</h1>
            <p className='mb-6'>Ces Conditions sont régies par les lois de [juridiction]. Tout litige sera réglé devant les tribunaux de [juridiction].</p>



            <h1 className='font-bold'>9. Modifications des Conditions</h1>
            <p className='mb-6'>Nous nous réservons le droit de modifier ces Conditions à tout moment. L’utilisation continue du Site après des modifications indique votre acceptation des Conditions mises à jour.</p>

            <p>Pour toute question, veuillez nous contacter à support@voytheia.com.</p>

        </div>
    )
}
