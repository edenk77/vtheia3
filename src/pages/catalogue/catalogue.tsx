import Layout from "@/components/layout"
import CatalogueAll from "./partials/catalogue-all"
import Banner from "./partials/banner"
import FilterMenu from "./partials/filtermenu"
import { useState } from "react";



function Catalogue() {

    const [filter, setFilter] = useState('all');
    const handleFilterChange = (newFilter: any) => {
        setFilter(newFilter);
    };

    return (
        <Layout>
            <Banner />
            <div className="flex ">
                <FilterMenu filter={filter} setFilter={setFilter} />
                <CatalogueAll filter={filter} />
            </div>
        </Layout>
    )
}


export default Catalogue
