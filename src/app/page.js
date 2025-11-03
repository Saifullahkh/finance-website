'use client';
import Button from "@/components/Button";
import '../styles/style.css'
import { motion } from 'framer-motion'
import Image from "next/image";
import finance from "@/assets/Investing 1.png"
import image from '@/assets/Image.png'
import illustration from '@/assets/illustration.png'
import vector1 from '@/assets/Vector (1).png'
import Vector2 from '@/assets/Vector (2).png'
import grid from '@/assets/grid.png'
import briefcase from '@/assets/briefcase.png'
import arrow from '@/assets/arrow.png'
import video from '@/assets/Image (1).png'
import Link from "next/link";
import image2 from '@/assets/Image (2).png'
import world from '@/assets/Currencies World.png'

export default function Home() {

  // Variants for reusable animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-16 lg:py-24 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          className="flex-1 lg:w-[55%] text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900">
            Empower Your Financial Future with{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              FinWise
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We help businesses stand out in crowded markets. When customers have a positive
            experience with a brand, they are more likely to remember it.
          </p>
          <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">
            <Button theme="warning" size="md">
              Get Started
            </Button>
            <Button theme="outline" size="md">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 lg:w-[45%] flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-lg hidden lg:block">
            <Image
              src={finance}
              alt="Finance illustration"
              width={600}
              height={600}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* About Section 1 */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl lg:rounded-[4rem] p-6 lg:p-16 shadow-lg">
          {/* Left Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={image}
                alt="About us image"
                width={600}
                height={600}
                className="rounded-2xl lg:rounded-3xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="">
              <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
                ABOUT US
              </p>
              <h2 className="text-3xl lg:text-5xl  font-bold text-gray-900 leading-tight mb-6">
                Providing Innovative Services and Solutions
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl lg:rounded-[4rem] p-6 lg:p-16 shadow-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12"
          >
            {/* Text Content */}
            <motion.div
              variants={fadeUp}
              className="flex items-center"
            >
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
                  OUR SERVICES
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-white leading-tight mb-6">
                  Financial Plan for Long-Term Success
                </h2>
                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                  We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.
                </p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <Image 
                  src={illustration} 
                  alt="Financial illustration" 
                  width={500} 
                  height={500}
                  className="drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[ 
              { icon: vector1, title: "Money Management", text: "With experience in all market conditions, we recognize what processes and solutions." },
              { icon: grid, title: "Financial Planning", text: "These plans may include investment strategies, savings plans, etc." },
              { icon: briefcase, title: "Strategic", text: "With experience in all market conditions, we recognize what processes and solutions." },
              { icon: Vector2, title: "Risk Management", text: "With experience in all market conditions, we recognize what processes and solutions." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 p-4 bg-amber-50 rounded-2xl">
                  <Image src={item.icon} alt="icon" width={48} height={48} className="text-amber-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Learn More Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="#" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 group">
              <Image src={arrow} alt="arrow" width={24} height={24} className="mr-3 group-hover:translate-x-2 transition-transform duration-300" />
              <span className="text-sm font-semibold uppercase tracking-wider">LEARN MORE</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
              OUR INVESTING
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-gray-900 leading-tight mb-8 lg:mb-12">
              Empowering Your Business <br className="hidden lg:block" />
              With Financial Capabilities
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={video}
              alt="Investing preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-600 transition-colors duration-300">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl lg:rounded-[4rem] p-6 lg:p-16 shadow-2xl">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left mb-12"
          >
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
              OUR BLOG
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-white leading-tight">
              Sharing our <br className="hidden lg:block" />
              Knowledge
            </h2>
          </motion.div>

          {/* Blog Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className=""
            >
              <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-4">
                NEWS
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                Minimum Wage May Lead to Higher Levels of Poverty
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                The U.S. government reached the $31.4 trillion debt limit imposed by Congress on Jan. 19,
                and since then has been relying on accounting tricks by the Treasury Department.
              </p>
              <Button theme="warning" size="md">
                Read Article
              </Button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                <Image 
                  src={image2} 
                  alt="Blog Image" 
                  width={600} 
                  height={400}
                  className="rounded-2xl lg:rounded-3xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-3xl lg:rounded-[4rem] p-6 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className=""
            >
              <h2 className="text-3xl lg:text-5xl  font-bold text-gray-900 leading-tight mb-6">
                Simplifying Complexity with Innovative Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Join thousands of satisfied clients who have transformed their financial future with our expert guidance and cutting-edge solutions.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
                <Button theme="warning" size="md">
                  Get Started Now
                </Button>
                <Button theme="outline" size="md">
                  Schedule a Call
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm lg:max-w-md">
                <Image
                  src={world}
                  alt="World illustration"
                  width={400}
                  height={400}
                  className="drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}