import { useEffect, useState } from "react";
import fetchProducts from "../data/products.js";

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    texture: string;
    image: string;
    price?: number;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setLoading(false);
        };
        loadProducts();
    }, []);

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );

    return (
        <div className="flex justify-center items-center py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {products.map((product) => (
                    <div key={product.id} className="card bg-white w-80 shadow-l hover:shadow-md transition">
                        <figure>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-56 w-full object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl text-black flex justify-center">{product.name}</h2>
                            <p className="text-black">{product.description}</p>
                            <div className="card-actions justify-between items-center mt-3">
                                {product.price ? (
                                    <span className="text-lg font-semibold text-black">
                                        €{product.price.toFixed(2)}
                                    </span>
                                ) : (
                                    <span className="text-lg font-semibold text-black">€--</span>
                                )}
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-pink-100 text-black font-semibold">{product.texture}</div>
                                    <div className="badge badge-outline bg-mint-green text-black font-semibold">{product.category}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
