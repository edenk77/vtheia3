import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { PropsWithChildren } from 'react';
import { Footer } from "@/components/footer"


export function App({ children }: PropsWithChildren) {
    return (
        // Commentaires : C'est avec le layout que je gère la mise en page que je vais rappeler dans chaque component, si j'avais une page de connexion ou une page d'inscription spéciale, j'aurais pu créer d'autres layout.
        <>
            <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
            <TailwindIndicator />
        </>
    )
}


