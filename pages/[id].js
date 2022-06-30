import Layout from "../components/layouts"
import Product from "../components/products"
import { getItemData, getPathsFromIds } from "../lib/util";

export default function ProductPage(productInfo){
    return <Layout>
        <Product item={productInfo} showAs="Page"/>
    </Layout>
}

export async function getStaticPaths(){ // genera las url
    const paths = await getPathsFromIds();

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }){
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            productInfo: product,
        }
    }
}