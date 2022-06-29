import Link from "next/link"
import Layout from "../../components/layouts"
import { getItems } from "../../services/itemService";
import Image from "next/image"


export default function index({items}){
    return (
        <Layout>
            <h1>Store</h1>
            {
                items && items.map(item => <div key={item.id}>
                <Image src={item.image} width="200" height={200} alt={item.title} />
                {item.title}</div>)
            }
        </Layout>
    );
}

export async function getStaticProps(){
    const res = await getItems()

    return {
        props: {
            items: res,
        },
    };
}