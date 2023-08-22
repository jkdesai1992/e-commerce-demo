import React, { useMemo } from 'react';
import { useCart } from '../components/contexts/CartContext';
import { Product } from '../models/Product';
import Image from 'next/image';

const TAX_RATE = 0.10; // Example tax rate (10%)

const CartPage = () => {
    const { cart } = useCart();

    const getSubtotal = useMemo(() => {
        return cart.reduce((total: number, product: { price: number; }) => total + product.price, 0);
    }, [cart])

    const getTax = () => getSubtotal * TAX_RATE;

    const getTotal = () => getSubtotal + getTax();

    return (
        <div className="container mx-auto mt-8 min-h-screen">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item: Product) => (
                            <li key={item.id} className="flex items-center border-b py-4">
                                <Image
                                    className="w-20 h-20 object-contain mr-4"
                                    height={50}
                                    width={50}
                                    src={item.thumbnail}
                                    alt={item.title} />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p className="font-semibold">Subtotal: ${getSubtotal}</p>
                        <p className="font-semibold">Tax: ${getTax()} [Tax rate (10%)]</p>
                        <p className="font-semibold text-green-600">Total: ${getTotal()}</p>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
                </>
            )}
        </div>
    );
};

export default CartPage;
