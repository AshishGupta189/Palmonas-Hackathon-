import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => String(p.id) === id);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // On mount, check wishlist
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.includes(id));
  }, [id]);

  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter((itemId) => itemId !== id);
      setIsWishlisted(false);
    } else {
      wishlist.push(id);
      setIsWishlisted(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = existingCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.qty = (existingProduct.qty || 1) + 1;
    } else {
      existingCart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success("✅ Added to Cart");
  };

  const handleBuyNow = () => {
    toast.info("🛍️ Buy Now feature coming soon!");
  };

  if (!product)
    return <div className="p-6 text-center text-white">Product not found</div>;

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8 items-start">
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            {/* Wishlist Icon */}
            <button
              onClick={toggleWishlist}
              className="text-red-500 hover:scale-110 transition transform text-2xl"
            >
              {isWishlisted ? "❤️" : "🤍"}
            </button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-xl font-semibold text-green-400">₹{product.price}</p>
            <span className="text-yellow-500 font-medium text-sm">
              ⭐ {product.rating} / 5
            </span>
          </div>

          {product.availableSizes?.length > 0 && (
            <div className="mb-4">
              <p className="font-semibold mb-1">Available Sizes:</p>
              <div className="flex gap-2 flex-wrap">
                {product.availableSizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 border border-gray-400 rounded-md text-sm bg-gray-700"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <p className="text-gray-400 leading-relaxed mt-4">
            {product.description ||
              "This is a beautiful piece perfect for any occasion. Handcrafted with care and made from premium materials."}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              onClick={handleAddToCart}
            >
              Add to Cart 🛒
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-300 transition"
              onClick={handleBuyNow}
            >
              Buy Now ⚡
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
