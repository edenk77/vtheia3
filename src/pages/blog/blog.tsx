import Layout from "@/components/layout"
import Article from "./partials/article"
import Banner from "./partials/banner"
import Section from "./partials/section"
import Deficience from "./partials/deficience"
// import DeficienceTxt from "./partials/deficience-txt"

//Ma page de blog

function Blog() {
    return (
        <Layout>
            <Banner />
            <Section />
            <Deficience />
            {/* <DeficienceTxt /> */}
            <Article />
        </Layout>
    )
}


export default Blog
