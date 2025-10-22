"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import payment from '@/assets/PaymentCard.png'
import { features } from "@/data/data";
import finwise2 from '@/assets/finwise2.png'
import finwise1 from '@/assets/finwise1.png'

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5 flex justify-center"
        >
          <div className="relative w-full max-w-sm lg:max-w-md">
            <Image
              src={payment}
              alt="Business Management Illustration"
              width={400}
              height={400}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Award winning <br /> 
            <span className="text-primary">business management</span>
          </h1>
          <p className="text-gray text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We understand that running a business is challenging. That is why we
            offer business management services designed to help you achieve your
            goals and grow your business. Whether you are just starting out or
            looking to take your business to the next level, we have the tools and
            expertise you need to succeed.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Start your journey to better credit
          </h2>
          <p className="text-gray text-lg lg:text-xl leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Amet minim
            mollit non deserunt ullamco est.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative group hover:-translate-y-2"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mt-6 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray text-lg leading-relaxed text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Financial Planning Section 1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 leading-relaxed">
              Financial <span className="text-primary">Planning</span>
            </h2>
            <p className="text-gray text-lg lg:text-xl mb-3 leading-relaxed">
              We understand that financial planning can be overwhelming and
              confusing. That&#39;s why we offer expert guidance and support to help
              you make informed decisions and achieve your goals.
            </p>

            <div className="">
              <div className=" p-3">
                <h3 className="text-2xl  font-bold text-black ">
                  First Funding
                </h3>
                <p className="text-gray leading-relaxed">
                  Whether you are planning for retirement, saving for a child is
                  education, or buying a home, we have the tools and resources you
                  need to succeed.
                </p>
              </div>

              <div className=" p-3 ">
                <h3 className="text-2xl  font-bold text-black ">
                  Business Operational
                </h3>
                <p className="text-gray leading-relaxed">
                  Our team of experienced financial planners will work with you to
                  understand your unique needs and develop a customized plan that
                  fits your goals.
                </p>
              </div>

              <div className=" p-3 ">
                <h3 className="text-2xl  font-bold text-black ">
                  Business Expansion
                </h3>
                <p className="text-gray leading-relaxed">
                  We well help you navigate complex financial issues, such as
                  investment strategies, tax planning, and risk management, and
                  provide ongoing support.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src={finwise2}
                alt="Financial Planning Meeting"
                width={600}
                height={500}
                className=" object-cover w-full h-auto"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Planning Section 2 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src={finwise1}
                alt="Financial Planning Strategy"
                width={600}
                height={500}
                className=" object-cover w-full h-auto"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-2 leading-relaxed">
              Strategic <span className="text-primary">Growth</span>
            </h2>
            <p className="text-gray text-lg lg:text-xl mb-2 leading-relaxed">
              We understand that financial planning can be overwhelming and
              confusing. That is why we offer expert guidance and support to help
              you make informed decisions and achieve your goals.
            </p>

            <div className="">
              <div className=" p-3">
                <h3 className="text-2xl  font-bold text-black ">
                  First Funding
                </h3>
                <p className="text-gray leading-relaxed">
                  Whether you are planning for retirement, saving for a child is
                  education, or buying a home, we have the tools and resources you
                  need to succeed.
                </p>
              </div>

              <div className=" p-3 ">
                <h3 className="text-2xl  font-bold text-black ">
                  Business Operational
                </h3>
                <p className="text-gray leading-relaxed">
                  Our team of experienced financial planners will work with you to
                  understand your unique needs and develop a customized plan that
                  fits your goals.
                </p>
              </div>

              <div className=" p-3">
                <h3 className="text-2xl  font-bold text-black ">
                  Business Expansion
                </h3>
                <p className="text-gray leading-relaxed">
                  We will help you navigate complex financial issues, such as
                  investment strategies, tax planning, and risk management, and
                  provide ongoing support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}