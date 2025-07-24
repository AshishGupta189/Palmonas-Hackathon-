import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="bg-black text-white h-screen w-screen overflow-x-hidden relative ">
      <AnimatePresence mode="wait">
        {!loadingComplete ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Loader onComplete={() => setLoadingComplete(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar/>
            <Mainroutes/>
            <Footer></Footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

