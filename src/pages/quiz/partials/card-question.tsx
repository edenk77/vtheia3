import {
    useState
} from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// Appel du package installer 
import { useTextToVoice } from "react-speakup";
import { Play, Pause, StepForward } from "lucide-react";


// Creation de la mini base de donnée qui va contenir les questions
const Quiz = () => {
    // Chaque question a droit à une réponse
    const questionsData = [
        {
            question: "Bonjour, je suis VOX, l’assistant vocal de Voytheia, souhaitez-vous une aide pour un achat ?",
            options: ["Oui", "Non"],
            answer: "Oui"
        },
        {
            question: "Votre achat est à titre personnel ou professionnel?",
            options: ["Personnel", "Professionnel"],
            answer: "Personnel"
        },
        {
            question: "Dans quel catégorie se trouve votre produit recherché?",
            options: ["Loupe électronique", "Smartphones", "Lecteurs d'écran", "Claviers", "Montres intelligentes", "Tablettes", "Accessoires"],
            answer: "Smartphones"
        },
        {
            question: "Déterminez la tranche de prix pour votre achat :",
            options: ["0 - 200 €", "200 € - 500 €", "500 € - 1000 €", "1000 € - plus"],
            answer: "200 € - 500 €"
        },
        {
            question: "Sélectionnez un délai de livraison qui vous convient :",
            options: ["48h", "1 à 2 jours", "Dès que possible"],
            answer: "Washington D.C."
        }
    ];

    // Ici on crée la variable pour les questions affiché et le score
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    // Ici on crée une condition pour prendre la réponse et la verifier, pour ensuite influencer le score
    const handleAnswerOptionClick = (selectedAnswer: string) => {
        if (selectedAnswer === questionsData[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    // Variable pour definir des etats sur le pitch, la vitesse et le volume
    const { speak, isSpeaking, pause, ref, resume } =
        useTextToVoice<HTMLDivElement>({ pitch: 1, rate: 0.9, volume: 1 });




    // Une affiche le resultat dans une condition
    return (
        <div className="quiz">
            {/* Soit on affiche le resultat finla */}
            {showScore ? (
                <div className="score-section">
                    <Card>
                        <CardHeader>
                            <CardTitle>Merci !
                                Veuillez cliquer sur le bouton Continuer pour voir notre tableau comparatif pour vous aider à mieux choisir votre produit.
                                Revenez-nous vite !</CardTitle>
                        </CardHeader>
                        <CardFooter className="flex justify-center">
                            <Button>Continuer</Button>
                        </CardFooter>
                    </Card>
                    {/* <h1>
                        Merci !
                        Veuillez cliquer sur le bouton Continuer pour voir notre tableau comparatif pour vous aider à mieux choisir votre produit.
                        Revenez-nous vite !
                    </h1> */}
                    {/* Vous avez obtenu {score} sur {questionsData.length} réponses correctes ! */}
                </div>
            ) : (
                <>
                    <div ref={ref}>
                        {/* Soit on affiche les questions, avec mapping pour que chaque option puisse s'afficher */}
                        <Card className="w-full" >
                            <CardHeader className="text-center">
                                <CardTitle>{questionsData[currentQuestion].question}</CardTitle>
                            </CardHeader>
                            <CardFooter className="flex justify-center gap-6">
                                {questionsData[currentQuestion].options.map((option, index) => (
                                    <Button variant="outline" key={index} onClick={() => handleAnswerOptionClick(option)} className="mx-auto"> {option}</Button>
                                ))}
                                {/* <Button variant="outline">Cancel</Button>
                            <Button>Deploy</Button> */}
                            </CardFooter>
                        </Card>
                        {/* Ici c'est le lecteur  */}
                        <div className="flex gap-6">
                            <Play onClick={speak} role="button" />
                            <Pause onClick={pause} role="button" />
                            <StepForward onClick={resume} role="button" />
                        </div>
                        {isSpeaking && "est entrain de parler"}
                    </div>

                </>
            )}
        </div>
    );
};


export default Quiz;


