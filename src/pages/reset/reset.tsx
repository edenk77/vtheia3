import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';




const ResetFormAndRedirect: React.FC = () => {

    const navigate = useNavigate();

    const handleResetAndRedirect = () => {
        // Réinitialiser les données du formulaire
        const form = document.querySelector('form');
        if (form) {
            form.reset();
        }
        // Rediriger vers la page de contact
        navigate('contact');
    };

    return (
        <Button
            onClick={handleResetAndRedirect}
            style={{

            }}
        >
            Envoyer
        </Button>
    );
};

export default ResetFormAndRedirect;
