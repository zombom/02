"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-150 h-150 rounded-full z-0 mix-blend-multiply"
      style={{
        background: "radial-gradient(circle, rgba(155, 107, 158, 0.08) 0%, rgba(249, 247, 242, 0) 70%)",
      }}
      animate={{ x: mousePosition.x - 300, y: mousePosition.y - 300 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
}