import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'




export const Privacy = () => {
    return (
        <div className='p-12 text-justify xl:mx-24 '>

            <Button>
                <Link to={"/"} className="">
                    Retour page d'accueil
                </Link>
            </Button>



            <h1 className='text-2xl font-bold text-center my-12'>Politique de Confidentialité</h1>

            <p>Bienvenue chez Voytheia nous. Nous attachons une grande importance à votre vie privée et nous engageons à protéger vos informations personnelles. Cette Politique de Confidentialité décrit comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web, www.voytheia.netlify.app .</p>

            <p className='mb-6'>En utilisant le Site, vous acceptez les pratiques décrites dans cette Politique de Confidentialité. Si vous n’êtes pas d’accord avec ces termes, veuillez ne pas utiliser le Site.</p>

            <h1 className='font-bold'>1. Informations que nous collectons</h1>

            <p>Nous pouvons collecter les types d’informations suivants :
            </p>
            <ul className='mb-6'>
                <li>Informations Personnelles : Nom, adresse e-mail, adresses de livraison et de facturation, numéro de téléphone, et détails de paiement lorsque vous effectuez un achat.</li>
                <li>Informations Techniques : Adresse IP, type de navigateur, système d’exploitation et informations sur votre appareil.</li>
                <li>Données d’Utilisation : Pages que vous visitez, temps passé sur le Site, et autres interactions.</li>
                <li>Cookies et Technologies de Suivi : Pour améliorer votre expérience et à des fins d’analyse.</li>
            </ul>


            <h1 className='font-bold'>2. Comment Nous Utilisons Vos Informations</h1>

            <p>Nous utilisons vos informations pour :
            </p>
            <ul className='mb-6'>
                <li>Traiter et exécuter les commandes, y compris les paiements et la livraison.</li>
                <li>Fournir un support client.</li>
                <li>Améliorer et personnaliser votre expérience d’achat.</li>
                <li>Communiquer des mises à jour, des promotions et des informations pertinentes.</li>
                <li>Respecter les obligations légales.</li>
            </ul>

            <h1 className='font-bold'>3.  Partage de Vos Informations</h1>

            <p>Nous ne vendons pas vos informations personnelles. Cependant, nous pouvons partager vos données avec des tiers de confiance, y compris :
            </p>
            <ul className='mb-6'>
                <li>Les processeurs de paiement.</li>
                <li>Les prestataires de services d’expédition.</li>
                <li>Les outils d’analyse et de marketing.</li>
                <li>Communiquer des mises à jour, des promotions et des informations pertinentes.</li>
                <li>Les autorités légales, si requis par la loi.</li>
            </ul>

            <h1 className='font-bold'>4. Sécurité des Données</h1>

            <p className='mb-6'>Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données. Cependant, aucune transmission sur Internet n’est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.</p>

            <h1 className='font-bold'>5. Vos Droits</h1>

            <p>En fonction de votre localisation, vous pouvez avoir le droit de :
            </p>
            <ul className='mb-6'>
                <li>Accéder et corriger vos données personnelles.</li>
                <li>Refuser les communications marketing.</li>
                <li>Demander la suppression de vos informations.</li>
            </ul>

            <h1 className='font-bold'>6. Liens de Tiers</h1>

            <p className='mb-6'>Notre Site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables de leurs pratiques en matière de confidentialité. Veuillez examiner leurs politiques de manière indépendante.</p>

            <h1 className='font-bold'>7. Modifications de Cette Politique de Confidentialité</h1>

            <p>Nous pouvons mettre à jour cette politique périodiquement. Tout changement sera publié sur cette page avec la date de "Dernière Mise à Jour".</p>

            <p>Pour toute question ou préoccupation, veuillez nous contacter à privacy@voytheia.com.</p>
        </div>
    )
}
