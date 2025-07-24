import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, type: "spring", stiffness: 80 },
  },
});

const Signup = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null); // image preview

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onSubmit = async (data) => {
    let base64Image = "";

    if (data.image && data.image.length > 0) {
      base64Image = await convertToBase64(data.image[0]);
    }

    const userData = {
      name: data.name,
      email: data.email,
      password:data.password,
      image: base64Image,
      createdAt: new Date().toISOString()
    };

    
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/login");
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F5F0] flex items-center justify-center px-6">
      <motion.div
        variants={fadeIn(0)}
        initial="hidden"
        animate="visible"
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-bold text-center text-[#C69749] mb-6">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Image Upload */}
          <motion.div variants={fadeIn(0.1)} initial="hidden" animate="visible">
            <label className="block text-sm text-gray-600 mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImagePreview}
              className="w-full px-2 py-1 text-sm border rounded-lg bg-red-100 text-black"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 w-24 h-24 object-cover rounded-full border"
              />
            )}
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeIn(0.2)} initial="hidden" animate="visible">
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              placeholder="Ashish Gupta"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeIn(0.3)} initial="hidden" animate="visible">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              placeholder="ashish@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </motion.div>

          {/* Password */}
          <motion.div variants={fadeIn(0.4)} initial="hidden" animate="visible">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </motion.div>

          {/* Submit */}
          <motion.button
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="visible"
            type="submit"
            className="w-full bg-[#C69749] text-white py-2 rounded-lg font-semibold hover:bg-[#b9842f] transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#C69749] font-medium cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
