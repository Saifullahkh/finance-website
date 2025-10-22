"use client";
import React from "react";
import Image from "next/image";
import '@/styles/style.css'
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: ["Home", "Services", "Pricing", "Careers"]
    },
    {
      title: "Information",
      links: ["About", "Blog", "Contact", "FAQ"]
    },
    {
      title: "Social",
      links: ["LinkedIn", "Facebook", "Instagram", "Twitter"]
    }
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-t-3xl lg:rounded-t-[4rem] mt-20 px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 border-b border-white/20 pb-8 lg:pb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col  space-y-4">
              <Image
                src={logo}
                alt="WealthWise Logo"
                width={200}
                height={45}
                className="filter brightness-0 invert"
              />
              <p className="text-blue-100  leading-relaxed max-w-xs">
                Empowering your financial future with innovative solutions and expert guidance.
              </p>
              
             
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-4 lg:mb-6 text-white border-b-2 border-amber-500 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-3 lg:space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-blue-100 hover:text-amber-400 transition-colors duration-300 block py-1"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>


        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 pt-8 lg:pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="">
            <p className="text-blue-100 text-sm lg:text-base">
              © {currentYear} WealthWise, Inc. All rights reserved.
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
            <motion.a
              href="#"
              className="text-blue-100 hover:text-amber-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-blue-100 hover:text-amber-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-blue-100 hover:text-amber-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Cookie Policy
            </motion.a>
          </div>

          {/* Designer Credit */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-100 text-sm lg:text-base">
              Designed by{" "}
              <span className="text-amber-400 font-semibold">Saif Ullah</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;