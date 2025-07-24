import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { products } = useProducts();
  const [wishlistIds, setWishlistIds] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistIds(stored);
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      wishlistIds.includes(String(product.id))
    );
    setWishlistProducts(filtered);
  }, [wishlistIds, products]);

  const removeFromWishlist = (id) => {
    const updated = wishlistIds.filter((itemId) => itemId !== String(id));
    setWishlistIds(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-400 text-lg mt-20"
        >
          Your wishlist is empty 💔
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md relative group"
            >
              <Link to={`/product/details/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-green-400 mt-1 font-medium">₹{product.price}</p>
                <p className="text-sm text-gray-400">⭐ {product.rating}/5</p>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/product/details/${product.id}`}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-red-500 hover:text-red-300 transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
