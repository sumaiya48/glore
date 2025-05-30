export default async function getAllProducts() {
  try {
    const result = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");

    if (!result.ok) {
      console.error("API response not OK:", result.status);
      return []; // fallback empty array
    }

    const data = await result.json();
    return data.data || []; // fallback if data.data is undefined
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // fallback empty array on error
  }
}
