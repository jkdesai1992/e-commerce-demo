import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RatingStars from '../RatingStars';
import { Product } from '../../models/Product';

const ProductCard = ({ id, thumbnail, title, images, rating, price, description, discountPercentage }: Product) => {
    return (
        <Link href={`/product/${id}`} key={id}>
            <div
                className="border p-4 shadow-md rounded-md flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            >
                <div className="group relative">
                    <Image
                        src={thumbnail}
                        alt={title}
                        height={150}
                        width={150}
                        className="w-40 h-40 transform origin-center transition-transform duration-300 group-hover:scale-x-[-1]"
                    />
                    {
                        images[0] &&
                        <Image
                            src={images[0]}
                            alt={title}
                            height={150}
                            loading="lazy"
                            width={150}
                            className="w-40 h-40 absolute top-0 left-0 transform origin-center transition-transform duration-300 hidden group-hover:block scale-x-[-1]"
                        />
                    }
                </div>
                <div className="p-4 w-full">
                    <h2 className="text-lg font-semibold mb-2">{title}</h2>
                    <div className="flex items-center mb-2">
                        <span className="text-yellow-500 mr-1">
                            <RatingStars rating={rating}/>
                        </span>
                        <span className="text-gray-600">({rating})</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2 line-clamp-1">{description}</p>
                    <div className="flex justify-between mb-2">
                        <div className="text-gray-800 font-semibold">${price.toFixed(2)}</div>
                        {discountPercentage && <div className="text-green-600 font-semibold">{discountPercentage}% off</div>}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
