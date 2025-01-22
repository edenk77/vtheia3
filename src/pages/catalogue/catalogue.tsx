import Layout from "@/components/layout"
import CatalogueAll from "./partials/catalogue-all"
import Banner from "./partials/banner"
import { FilterMenu } from "./partials/filtermenu"



function Catalogue() {
    return (
        <Layout>
            <Banner />
            <div className="flex ">
                <FilterMenu />
                <CatalogueAll />
            </div>
        </Layout>
    )
}


export default Catalogue
