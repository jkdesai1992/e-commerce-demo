import Link from 'next/link';
import { useCart } from './contexts/CartContext';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { cart } = useCart();
  return (
    <header className="bg-blue-500 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" id="link">
              {/* Logo */}
            <p className="text-white text-xl font-bold">Your Logo</p>
          </Link>
        </div>
        <div className="flex items-center text-white">
          {/* Cart Icon */}
          <FaShoppingCart/>
          <Link href="/cart" id="link">
            <p className=" text-xl font-bold"> ({cart.length})</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
