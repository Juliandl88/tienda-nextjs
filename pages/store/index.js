import Link from "next/link";
import Layout from "../../components/layouts";
import { getItems } from "../../services/itemService";
import Image from "next/image";
import Product from "../../components/products";
import style from "../../styles/product.module.css"

export default function index({ items }) {
  return (
    <Layout>
      <h1>Store</h1>
      <div className={style.items}>
        {items &&
          items.map((item) => (
            <Product item={item} showAs="Default" key={item.id} />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
