// components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="px-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">About Us</h3>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod purus sed...
                    </p>
                </div>
                <div className="px-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Contact Us</h3>
                    <p className="text-gray-300">Surat, Gujarat, India</p>
                    <p className="text-gray-300">Phone: +918000528429</p>
                </div>
                <div className="px-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Subscribe</h3>
                    <p className="text-gray-300">Subscribe to our newsletter for updates</p>
                    <form className="mt-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-600 px-3 py-2 rounded w-full text-gray-300 focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <button
                            type="submit"
                            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
