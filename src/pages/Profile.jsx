import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, type: "spring", stiffness: 80 },
  },
});

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    joinDate: "",
    image: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ name: "", image: "" });
  const [imagePreview, setImagePreview] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    setUser({
      name: storedUser.name || "Guest User",
      email: storedUser.email || "guest@example.com",
      password:storedUser.password ||"",
      joinDate: storedUser.createdAt
        ? new Date(storedUser.createdAt).toLocaleDateString()
        : "Not Available",
      image:
        storedUser.image ||
        `https://api.dicebear.com/7.x/initials/svg?seed=${storedUser.name || "U"}`,
    });

    setEditData({
      name: storedUser.name || "",
      image: storedUser.image || "",
    });

    setImagePreview(
      storedUser.image ||
        `https://api.dicebear.com/7.x/initials/svg?seed=${storedUser.name || "U"}`
    );
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setEditData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: editData.name,
      image: editData.image,
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleToast = (msg) => {
    toast.info(msg);
  };

  const actionTiles = [
    {
      title: "My Orders",
      desc: "View past orders and track status",
      onClick: () => handleToast("Feature coming soon! 🚧"),
    },
    {
      title: "Wishlist",
      desc: "Items you’ve saved for later",
      onClick: () => navigate("/wishlist"),
    },
    {
      title: "Cart",
      desc: "Products you are ready to buy",
      onClick: () => navigate("/cart"),
    },
    {
      title: "Addresses",
      desc: "Manage your shipping locations",
      onClick: () => handleToast("Feature coming soon! 🚧"),
    },
    {
      title: "Settings",
      desc: "Account preferences and privacy",
      onClick: () => handleToast("Feature coming soon! 🚧"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F5F0] pt-24 px-6 sm:px-10 lg:px-32">
      <ToastContainer position="top-right" />

      {/* Profile Card */}
      <motion.div
        variants={fadeIn(0)}
        initial="hidden"
        animate="visible"
        className={`rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 ${
          isEditing ? "bg-red-100" : "bg-white"
        }`}
      >
        {/* Profile Picture */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#C69749]"
        >
          <img
            src={imagePreview}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          {isEditing ? (
            <>
              <input
                className="border px-3 py-2 rounded w-full mb-2 text-black"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                placeholder="Enter name"
              />
              <input
                type="file"
                accept="image/*"
                className="mb-2 text-black"
                onChange={handleImageChange}
              />
              <div className="mt-4 flex gap-3 justify-center md:justify-start">
                <button
                  onClick={handleSave}
                  className="px-5 py-2 bg-[#C69749] text-white rounded-lg font-medium hover:bg-[#b9842f]"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2 bg-gray-200 text-black rounded-lg font-medium hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{user.email}</p>
              <p className="text-gray-500 text-sm">Joined: {user.joinDate}</p>
              <motion.button
                onClick={() => setIsEditing(true)}
                whileHover={{ scale: 1.05 }}
                className="mt-4 px-5 py-2 bg-[#C69749] text-white rounded-lg font-medium shadow hover:bg-[#b9842f]"
              >
                Edit Profile
              </motion.button>
            </>
          )}
        </div>
      </motion.div>

      {/* Action Tiles */}
      <motion.div
        variants={fadeIn(0.3)}
        initial="hidden"
        animate="visible"
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {actionTiles.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            onClick={item.onClick}
            className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-[#C69749]">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </motion.div>
        ))}

        {/* Logout */}
        <motion.div
          onClick={handleLogout}
          whileHover={{ scale: 1.03 }}
          className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300 cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-red-600">Logout</h3>
          <p className="text-sm text-gray-600 mt-1">Sign out of your account</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
