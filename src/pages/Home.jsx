import ScrollVelocity from "../external/ScrollVelocity";
import { SwipeCarousel } from "../external/SwipeCarousel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-full scroll-smooth">
      <motion.img
        className="w-full object-cover object-bottom max-h-[90vh]"
        src="https://palmonas.com/cdn/shop/files/about_us_2.webp?v=1718257982&width=2000"
        alt="banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="w-full px-6 sm:px-10 lg:px-20 py-10">
        <motion.h2
          className="text-[2rem] sm:text-[2.5rem] text-center text-[#C69749] mb-12"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Everyday Demi Fine Luxury, Curated by <br className="block sm:hidden" />
          <span className="italic text-red-300">Shraddha Kapoor</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-[60%]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed tracking-wide">
              <span className="text-3xl sm:text-4xl font-semibold text-[#C69749]">Palmonas</span> is India’s most loved demi fine jewellery brand, creating pieces that transition effortlessly from boardrooms to barstools.
              <br /><br />
              Crafted in <span className="text-2xl sm:text-3xl font-bold text-[#C69749]">18k gold</span> vermeil, 9k gold jewellery, and lab grown diamonds, our jewellery is made to be worn daily—waterproof, skin-safe, and tarnish-resistant. This isn’t fast fashion. This is everyday luxury, built to last and made to wow.
            </p>
          </motion.div>

          <motion.div
            className="md:w-[35%] w-full"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <img
              className="w-full h-auto object-cover rounded-xl shadow-xl"
              src="https://palmonas.com/cdn/shop/files/shraddha_bleser_img_5.jpg?v=1752836157&width=2000"
              alt="Shraddha Kapoor"
            />
          </motion.div>
        </div>

        <div className="mt-10">
          <ScrollVelocity
            texts={["4L+ Happy Customers...", "Ships in 24 hours...", "Rakhi gifts @ 50% OFF..."]}
            velocity={100}
            className="custom-scroll-text text-[#333] font-medium"
          />
        </div>
      </div>

      <motion.div
        className="w-full px-4 sm:px-10 lg:px-20 my-12"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <video
          preload="auto"
          className="w-full h-[60vh] sm:h-[90vh] object-cover rounded-xl shadow-lg"
          autoPlay
          playsInline
          muted
          loop
          src="https://palmonas.com/cdn/shop/videos/c/vp/ce39c6f734e84e3daa5ac910005d7c67/ce39c6f734e84e3daa5ac910005d7c67.HD-720p-4.5Mbps-50074178.mp4?v=0"
        ></video>
      </motion.div>

      <motion.h2
        className="text-center mb-6 text-2xl sm:text-3xl font-semibold text-[#C69749]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        The Gifting Edit
      </motion.h2>

      <div className="gift-cards grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 sm:px-10 lg:px-20 mb-10">
        {["https://palmonas.com/cdn/shop/files/gifts_for_sis_df0a1eb8-5a7e-40a0-abf2-f99ea5acd9c2.png?v=1752845626&width=600",
          "https://palmonas.com/cdn/shop/files/gifts_for_mom_40fa62df-e213-468d-a8a5-80caefcf8306.png?v=1752845807&width=600",
          "https://palmonas.com/cdn/shop/files/gifts_for_girlfriend_381650b0-8623-4463-a373-baa85b658792.png?v=1752845972&width=600",
          "https://palmonas.com/cdn/shop/files/gifts_for_wife_ee361fb8-d165-4c65-a2ca-b09d51e37f98.png?v=1752846137&width=600",
        ].map((src, index) => (
          <motion.img
            key={index}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl shadow-md"
            src={src}
            alt={`gift-${index}`}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          />
        ))}
      </div>

      <SwipeCarousel />
    </div>
  );
};

export default Home;