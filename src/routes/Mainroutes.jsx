import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Login from "../components/Login";
import Products from "../pages/Products";
import Signup from "../components/Signup";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Wrapper for animated pages
const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const Mainroutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/profile" element={<AnimatedPage><Profile /></AnimatedPage>} />
        <Route path="/signup" element={<AnimatedPage><Signup /></AnimatedPage>} />
        <Route path="/login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="/products" element={<AnimatedPage><Products /></AnimatedPage>} />
        <Route path="/wishlist" element={<AnimatedPage><Wishlist /></AnimatedPage>} />
        <Route path="/cart" element={<AnimatedPage><Cart /></AnimatedPage>} />
        <Route path="/product/details/:id" element={<AnimatedPage><ProductDetails /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><PageNotFound /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

export default Mainroutes;
