import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#1F1F1F] text-white px-6 sm:px-10 lg:px-20 py-12 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold text-[#C69749] mb-4">Palmonas</h2>
          <p className="text-sm text-gray-300">
            Explore timeless elegance with Palmonas. Handcrafted jewellery for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#C69749] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-[#C69749]">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#C69749]">Products</Link></li>
            <li><Link to="/wishlist" className="hover:text-[#C69749]">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-[#C69749]">Cart</Link></li>
            <li><Link to="/about" className="hover:text-[#C69749]">About Us</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold text-[#C69749] mb-4">Follow Us</h3>
          <div className="flex space-x-5 text-xl text-white">
            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: "#C69749" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Palmonas. All rights reserved. Crafted with ❤️ by Ashish
      </div>
    </motion.footer>
  );
};

export default Footer;
