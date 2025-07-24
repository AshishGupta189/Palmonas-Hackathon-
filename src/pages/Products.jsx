import React, { useState, useEffect, useRef } from 'react';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Products = () => {
  const { products } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortOption, setSortOption] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

  const observerRef = useRef();

  const categories = [...new Set(products.map((p) => p.category))];
  const sizes = [...new Set(products.flatMap((p) => p.availableSizes))];

  const handleSort = (filtered) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return filtered.sort((a, b) => a.price - b.price);
      case 'priceHighLow':
        return filtered.sort((a, b) => b.price - a.price);
      case 'ratingHighLow':
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  };

  const filteredProducts = handleSort(
    products.filter((product) => {
      const inCategory = selectedCategory ? product.category === selectedCategory : true;
      const inSize = selectedSize ? product.availableSizes.includes(selectedSize) : true;
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return inCategory && inSize && inPriceRange;
    })
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredProducts.length) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [visibleCount, filteredProducts]);

  // ✅ ADD TO CART FUNCTION
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      existingCart[existingIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="p-6 text-black">
      <h1 className="text-5xl font-bold mt-15 mb-5 text-white text-center">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap text-white gap-4 mb-6 items-center justify-center">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded bg-black">
          <option value="">All Categories</option>
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="p-2 border rounded bg-black">
          <option value="">All Sizes</option>
          {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <div className="flex items-center gap-2">
          <span>₹</span>
          <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])} className="w-20 border rounded p-1" />
          <span>- ₹</span>
          <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], +e.target.value])} className="w-20 border rounded p-1" />
        </div>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="p-2 border rounded bg-black">
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-red-100 shadow-md rounded-xl overflow-hidden hover:scale-[1.05] transition flex flex-col h-full"
              >
                <Link to={`/product/details/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                </Link>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">₹{product.price}</p>
                    <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm"
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white col-span-full">No products match your filters.</p>
          )}
        </div>


      {/* Observer Element for Infinite Scroll */}
      <div ref={observerRef} className="h-10 mt-6 text-center"></div>
    </div>
  );
};

export default Products;
