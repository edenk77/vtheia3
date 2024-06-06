import Layout from "@/components/layout"
import Banner from "./partials/banner"
import Categories from "./partials/categories"
import Stats from "./partials/stats"
import Testimonial from "./partials/testimonial"
import Featured from "./partials/featured"


function Home() {
    return (
        <Layout>
            <Banner />
            <Categories />
            <Stats />
            <Testimonial />
            <Featured />
        </Layout>
    )
}


export default Home
