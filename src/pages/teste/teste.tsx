import Layout from "@/components/layout"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"



function Teste(props:
    { message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }
) {
    return (
        <Layout>
            <div>{props.message}</div>
        </Layout>
    )
}


export default Teste
