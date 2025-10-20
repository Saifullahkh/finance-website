"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

function Footer() {
  return (
    <motion.footer
      className="bg-[var(--primary)] text-white rounded-t-2xl md:rounded-t-[50px] mt-16 px-6 md:px-12 lg:px-20 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="WealthWise Logo"
                width={184}
                height={39}
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-md mb-3">Company</h3>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-md mb-3">Information</h3>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-md mb-3">Social</h3>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-md text-white/80 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© 2025 WealthWise, Inc.</p>
          <p>Designed by Saif Ullah</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
