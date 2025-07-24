import { motion } from "framer-motion";
import {Example} from "../external/MouseImageTrail"

const About = () => {
  return (
    <div className="w-full h-full">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[80vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1518370265276-f22b706aeac8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Palmonas"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold tracking-wide text-center">
            About <span className="text-[#C69749]">Palmonas</span>
          </h1>
        </div>
      </motion.div>
      <Example />
      {/* Mission Section */}
      <div className="px-6 sm:px-12 py-12 justify-around flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#C69749] mb-4">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Palmonas, we believe in redefining everyday elegance. Our goal is
            to bring <span className="font-semibold text-[#C69749]">accessible luxury</span> to every woman —
            jewellery that is timeless, versatile, and crafted with precision.
            From casual brunches to big celebrations, our pieces tell stories of
            strength, style, and individuality.
          </p>
        </motion.div>

        <motion.div
            className="md:w-[25%]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <img className="w-full object-cover rounded shadow-lg" src="https://palmonas.com/cdn/shop/files/ER104_472a73be-0755-48b5-b60c-08a85a6e4970.jpg?v=1744527737&width=900" alt="Shraddha Kapoor" />
          </motion.div>
      </div>

      {/* Why Palmonas */}
      <motion.div
        className="px-6 sm:px-12 py-10 bg-[#fdf8f3]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#C69749] mb-6">
          Why Choose Palmonas?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Waterproof & Skin-safe",
            "Lab-grown Diamonds",
            "Crafted in 18K Gold Vermeil",
            "Loved by 4L+ Customers",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-[#C69749] font-semibold text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Brand Quote / Vision */}
      <motion.div
        className="px-6 sm:px-12 py-12 text-center bg-[#1f1f1f]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <p className="text-xl sm:text-2xl italic max-w-3xl mx-auto">
          "Jewellery should feel like a second skin — confident, luxurious, and
          always authentic." <br />
          <span className="text-[#C69749] font-semibold block mt-2">– Shraddha Kapoor</span>
        </p>
      </motion.div>

      {/* Call to Action / Footer Banner */}
      <motion.div
        className="relative w-full h-[60vh] my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h2 className="text-white text-3xl sm:text-4xl text-center font-semibold">
            Explore our signature collections &<br />
            <span className="text-[#C69749]">feel the difference</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
