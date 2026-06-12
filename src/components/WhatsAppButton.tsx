"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // WhatsApp link for +91 8269149288
  const whatsappUrl = "https://wa.me/918269149288";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] border border-[#25D366]/40 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact on WhatsApp"
    >
      {/* Pulse background element */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none pointer-events-none" />

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 text-white fill-current relative z-10 transition-transform duration-300"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.48 2.052 14.004.992 11.997.992 6.566.992 2.14 5.362 2.137 10.79c-.001 1.703.452 3.361 1.31 4.8l-.859 3.136 3.169-.832zM17.57 14.398c-.287-.144-1.697-.838-1.959-.933-.262-.096-.452-.144-.642.144-.19.287-.736.933-.903 1.124-.167.19-.334.215-.621.072-.287-.144-1.21-.447-2.306-1.427-.852-.76-1.427-1.7-1.594-1.987-.167-.287-.018-.442.126-.584.13-.127.287-.334.43-.502.144-.167.192-.287.287-.478.096-.19.048-.359-.024-.502-.072-.144-.642-1.548-.88-2.12-.232-.558-.466-.482-.642-.491-.166-.008-.356-.01-.547-.01-.19 0-.501.072-.763.359-.262.287-1.002.98-1.002 2.392 0 1.412 1.026 2.775 1.17 2.966.144.19 2.02 3.085 4.895 4.327.684.296 1.219.472 1.637.605.687.219 1.312.188 1.806.114.55-.082 1.697-.693 1.935-1.363.238-.67.238-1.244.167-1.363-.071-.12-.262-.19-.55-.335z" />
      </svg>
    </motion.a>
  );
}
