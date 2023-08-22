import { SetStateAction, useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import { Product } from '../models/Product';
import Spinner from '../components/Spinner';

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm])

    if (loading) {
        return <Spinner/>
    }

    if (error && !loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">Something went wrong.</span>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 flex-grow flex flex-col min-h-screen">
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="w-full p-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <main className="container mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 &&
                        filteredProducts.map((product) => {
                            return (
                                <ProductCard key={product.id} {...product} />
                            )
                        })}
                    {!filteredProducts.length && <p className="text-gray-500">Opp!, Product not found</p>}
                </div>
            </main>
        </div>
    );
};

export default ProductList;