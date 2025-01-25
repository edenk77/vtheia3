import Layout from "@/components/layout"
import Article from "./partials/article"
import Banner from "./partials/banner"
import Section from "./partials/section"


function Blog() {
    return (
        <Layout>
            <Banner />
            <Section />
            <Article />
        </Layout>
    )
}


export default Blog
