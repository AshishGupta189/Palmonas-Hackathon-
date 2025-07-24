import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, type: "spring", stiffness: 60 },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("No user found. Please signup first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      const token = Math.random().toString(36).substr(2) + Date.now().toString(36);
      localStorage.setItem("token", token);
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#F9F5F0] overflow-hidden px-4">
      {/* Gradient blobs */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-0 -left-16"></div>
      <div className="absolute w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 bottom-0 right-0"></div>
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>

      {/* Login Card */}
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate="visible"
        className="relative z-10 bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <motion.h2
          variants={fadeIn(0.1)}
          className="text-3xl font-semibold text-center text-[#C69749] mb-4"
        >
          Welcome Back
        </motion.h2>

        <motion.p
          variants={fadeIn(0.2)}
          className="text-center text-gray-700 text-sm mb-6"
        >
          Please login to your account
        </motion.p>

        <motion.form variants={fadeIn(0.3)} className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69749] focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C69749] focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 bg-[#C69749] text-white rounded-lg font-medium shadow-md hover:bg-[#b68430] transition"
          >
            Login
          </motion.button>
        </motion.form>

        <motion.p
          variants={fadeIn(0.4)}
          className="mt-6 text-center text-sm text-gray-600"
        >
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-[#C69749] font-medium cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
