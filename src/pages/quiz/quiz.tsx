import CardQuestion from "./partials/card-question"
import TextToVoice from "./partials/text-to-voice"

function Quiz() {
    return (
        <>
            <section className="container grid justify-center items-center gap-6 pb-8 pt-6 md:py-10">
                <div className="flex text-center max-w-[980px] flex-col items-start gap-2">
                    <h1 className="text-3xl w-full justify-center font-extrabold leading-tight tracking-tighter md:text-4xl">
                        Test de quizz pour Voytheia<br className="hidden sm:inline" />
                    </h1>
                    <p className=" text-center text-lg text-muted-foreground">
                        Introduction VOX, this is the vocal assitant to choose the right product for you. Feel free to test on this playground.
                    </p>
                </div>
                <div>
                    {/* <CardQuestionSimple questions={undefined} /> */}
                    <CardQuestion />
                    <TextToVoice />
                </div>
            </section>
        </>

    )
}

export default Quiz