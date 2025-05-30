import ProductCard from "@/app/components/ProductCard";
import getAllProducts from "@/getAllProducts";

export default async function CategoryPage({ params }) {
  const { category } = params;

  const formattedCategoryName = decodeURIComponent(category)
    .replace(/-/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2');

  const allProducts = await getAllProducts();

  const filteredProducts = allProducts.filter(
    (product) =>
      product.category?.name?.toLowerCase() === formattedCategoryName.toLowerCase()
  );

 

  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-xl font-bold mb-4">{formattedCategoryName}</h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Sorry, no products found in this category.</p>
      )}
    </div>
  );
}
