import Layout from "@/components/layout"
import Banner from "./partials/banner"
import AboutText from "./partials/about-text"
import ImageBanner from "./partials/image-banner"
import BrandSponsor from "./partials/brand-sponsor"
import Teamwork from "./partials/teamwork"



function About() {
    return (
        <Layout>
            <Banner />
            <AboutText />
            <ImageBanner />
            <BrandSponsor />
            <Teamwork />
        </Layout>
    )
}


export default About
