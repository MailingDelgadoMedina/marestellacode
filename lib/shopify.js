const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN;

async function shopifyData(query) {
  const URL = `https://${domain}/api/2021-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((res) => res.json());

    return data;
  } catch (err) {
    throw new Error("Error fetching data from Shopify", err);
  }
}

export async function getProducts() {
  const query = `{
  collection(handle: "frontpage"){

    title
    products(first:25){
      edges{
        node{
          id
          title
          handle
          images(first: 5){
            edges{
              node{
              	url
                altText
              }
            }
          }
        }
      }
    }
  }
}`;

  const response = await shopifyData(query);
  const allProducts = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : [];

  return allProducts;
}
