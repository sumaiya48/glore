
export async function getUniqueCategories() {
  const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
  const data = await res.json();

  const allCategories = data.data.map((product) => product.category.name);
  const uniqueCategories = [...new Set(allCategories)]; // remove duplicates

  return uniqueCategories;
}