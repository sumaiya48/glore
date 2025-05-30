

import getAllProducts from "@/getAllProducts";
import CollectionsPage from "../components/collectionsPage";

export default async function Page() {
  const products = await getAllProducts(); 
  return <CollectionsPage products={products} />;
}
