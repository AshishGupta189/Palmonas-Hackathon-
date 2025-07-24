import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateLocalStorage(updated);
  };

  const handleClear = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  const handleQtyChange = (id, delta) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, qty: Math.max((item.qty || 1) + delta, 1) }
        : item
    );
    updateLocalStorage(updated);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price * (item.qty || 1)),
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto text-white ">
      <h1 className="text-4xl font-bold mb-6 text-center mt-15">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-4 rounded-xl shadow hover:scale-[1.01] transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-green-400">₹{item.price}</p>
                    <p className="text-yellow-400 text-sm">⭐ {item.rating}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => handleQtyChange(item.id, -1)}
                    className="px-3 py-1 bg-gray-700 rounded text-white text-xl hover:bg-gray-600"
                  >
                    −
                  </button>
                  <span className="text-lg">{item.qty || 1}</span>
                  <button
                    onClick={() => handleQtyChange(item.id, 1)}
                    className="px-3 py-1 bg-gray-700 rounded text-white text-xl hover:bg-gray-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-400 hover:text-red-600 text-xl"
                    title="Remove"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center border-t border-gray-600 pt-4">
            <h2 className="text-2xl font-semibold">Total: ₹{totalAmount}</h2>
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart 🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
