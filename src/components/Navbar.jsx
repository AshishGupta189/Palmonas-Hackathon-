import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      className="fixed top-0 z-50 w-full bg-[#C69749] text-[#000000] shadow-lg"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 w-[150px] sm:w-[180px]" >
            <motion.img
              className="w-full h-auto object-contain"
              src="https://palmonas.com/cdn/shop/files/Palmonas_Logo_Open_File-02.webp?v=1738142795&width=400"
              alt="Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 text-lg">
            {["/", "/about", "/products"].map((route, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink to={route} className="hover:underline capitalize">
                  {route === "/" ? "Home" : route.replace("/", "")}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-xl">
            {[["/wishlist", <FaRegHeart />], ["/cart", <FaCartArrowDown />], ["/profile", <FaUser />]].map(
              ([to, icon], i) => (
                <motion.div key={i} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                  <NavLink to={to}>{icon}</NavLink>
                </motion.div>
              )
            )}
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-16 right-0 w-2/3 sm:w-1/2 h-screen bg-[#C69749] px-6 py-10 space-y-6 text-lg z-40 shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {["/", "/about", "/products"].map((route, i) => (
              <motion.div
                key={i}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                <NavLink to={route} className="block capitalize">
                  {route === "/" ? "Home" : route.replace("/", "")}
                </NavLink>
              </motion.div>
            ))}

            <div className="flex space-x-6 mt-4 text-xl">
              {[["/wishlist", <FaRegHeart />], ["/cart", <FaCartArrowDown />], ["/profile", <FaUser />]].map(
                ([to, icon], i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink to={to} onClick={() => setMenuOpen(false)}>
                      {icon}
                    </NavLink>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
