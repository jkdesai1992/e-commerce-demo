import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCart } from '../../components/contexts/CartContext';
import { useState, useEffect } from 'react';
import StarRating from '../../components/RatingStars';
import { Product } from '../../models/Product';
import Spinner from '../../components/Spinner';

const ProductDetail = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string>('')
  const { productId } = router.query;
  const { dispatch } = useCart();
  const [productDetails, setProductDetails] = useState<Product | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    if (productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json())
        .then(data => {
          setProductDetails(data);
          setSelectedImage(data?.images[0])
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [productId]);

  // this function will be called on click of addToCart button & store product in context
  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: productDetails });
  };

  // show loading indicator during get api response
  if (loading) {
    return <Spinner />
  }

  // if api return error, then show Error indicator
  if (error || !productDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">Something went wrong.</span>
        </div>
      </div>
    )
  }

  const { images, title, description, price, rating } = productDetails
  return (
    <div className="container mx-auto p-8 container mx-auto flex-grow flex flex-col min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 md:flex">
        <div className="md:w-1/2">
          <div className="zoom-container relative overflow-hidden pb-[75%] ">
            <Image
              className="zoom-image rounded-md cursor-zoom-in object-contain absolute top-0 left-0 w-full h-full object-cover"
              height={700}
              width={700}
              src={selectedImage}
              alt={title} />
          </div>
          {
            images.length > 0 &&
            <div className="flex">
              {
                images.slice(0, 3).map((image: string, index: number) => {
                  return <Image
                    key={index}
                    src={image}
                    alt={`Product ${index}`}
                    height={130}
                    onClick={() => setSelectedImage(image)}
                    width={130}
                    className={`w-1/3 ${index > 0 ? 'ml-2' : ''} ${selectedImage === image ? 'border-double border-4 border-indigo-600' : ''} mt-3 rounded-md cursor-pointer border hover:border-indigo-600`}
                  />
                })
              }
            </div>
          }
        </div>
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="text-2xl font-bold mb-4">${price}</div>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">
              <StarRating rating={rating} />
            </span>
            <span className="text-gray-600">({rating})</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
