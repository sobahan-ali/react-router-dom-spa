import { useLoaderData } from "react-router-dom";
import ProductsCart from "./productsCart";

const Products = () => {
    const products = useLoaderData();
    // console.log(products.products);
    return (
        <div className="max-w-screen-xl p-10 mx-auto  grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products.products.map(product => <ProductsCart key={product.id} product={product}></ProductsCart>)
            }
        </div>
    );
};

export default Products;