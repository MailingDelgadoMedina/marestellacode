import Head from "next/head";
import Image from "next/image";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";
export default function Home({ products }) {
  console.log(products);
  return (
    <div>
      <Head>
        <title>MarestellaCode</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}
