import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { PropsWithChildren } from 'react';
import { Footer } from "@/components/footer"


export function App({ children }: PropsWithChildren) {
    return (
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


