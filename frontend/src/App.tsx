import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AHIIntro from "./ahi/AHIIntro";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AHIIntro />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/browse" element={<Browse />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
