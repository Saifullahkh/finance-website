"use client";
import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs, plans } from "@/data/data";

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section className="bg-white-brand py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm sm:text-base font-semibold text-[var(--secondary)] uppercase tracking-wider mb-3">
            PRICING
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-tight">
            We Have The Best Pricing Package
          </h2>
          <p className="text-gray text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your financial needs. All plans include
            core features with scalable options for growing businesses.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:scale-105 ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl border-0"
                  : "bg-white text-black border-2 border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8">
                <h3
                  className={`text-base sm:text-lg font-semibold uppercase tracking-wider mb-3 ${
                    plan.highlight ? "text-white-brand" : "text-secondary"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm sm:text-base ${
                      plan.highlight ? "text-white-brand" : "text-gray"
                    }`}
                  >
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 mb-8">
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 ${
                          plan.highlight ? "text-secondary" : "text-primary"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm sm:text-base ${
                          plan.highlight ? "text-white-brand" : "text-gray"
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
                  plan.highlight
                    ? "bg-secondary text-black bg-yellow-500 shadow-lg"
                    : "bg-primary text-black bg-[#F1EFF6] shadow-lg"
                }`}
              >
                Get Started
              </motion.button>

              {/* Additional Info */}
              <p
                className={`text-xs sm:text-sm mt-4 ${
                  plan.highlight ? "text-white-brand" : "text-gray"
                }`}
              >
                No hidden fees • Cancel anytime
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
            FAQs
          </p>
          <h2 className="text-4xl md:text-5xl  font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl  transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between  rounded-2xl"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"></div>
                      <p className="text-gray text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
