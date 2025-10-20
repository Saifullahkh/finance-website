'use client';
import Button from "@/components/Button";
import '../styles/style.css'
import {motion } from 'framer-motion'
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
  return (
   <>
      { /* Hero Section */ }
    <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-12 py-10 md:py-20 gap-10">
      
      {/* Left Content */}
      <motion.div
        className="flex-1 lg:w-[60%]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl xl:text-[64px] font-semibold leading-tight tracking-tight">
          Empower Your Financial Future with{" "}
          <span className="text-yellow-500">FinWise</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
          We help businesses stand out in crowded markets. When customers have a positive
          experience with a brand, they are more likely to remember it.
        </p>
        <div className="mt-8">
          <Button theme="warning" size="md">
            Get Started
          </Button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hidden lg:flex justify-center w-[40%]"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={finance}
          alt="Finance illustration"
          width={485}
          height={485}
        />
      </motion.div>
    </div>



       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white rounded-2xl md:rounded-[50px] px-[25px] lg:px-[80px] pt-[50px] pb-[70px]">
      
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt="About us image"
          width={585}
          height={585}
          className=""
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-sm font-bold text-[var(--secondary)]">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-normal mt-4 leading-[44px] lg:leading-[66px] tracking-[-2%]">
            Providing Innovative Services and Solutions
          </h2>
          <p className="mt-4 text-xl lg:text-2xl font-normal leading-[36px] mb-4 text-[var(--gray)]">
            We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.
          </p>
        </div>
      </motion.div>
    </div>

       <div className="bg-[var(--primary)] rounded-2xl md:rounded-[50px] mt-10 px-[25px] lg:px-[80px] pt-[50px] pb-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5">

        {/* col-1: Text */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm font-bold text-[var(--secondary)]">ABOUT US</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] text-white font-normal mt-4 leading-[44px] lg:leading-[66px] tracking-[-2%]">
              Financial Plan for Long-Term Success
            </h2>
            <p className="mt-4 text-lg lg:text-xl md:text-2xl font-normal leading-[36px] mb-4 text-[var(--white-brand)]">
              We are committed to fostering the financial well-being of the next generation by encouraging them to take the proud and empowering step of micro-investing.
            </p>
          </div>
        </motion.div>

        {/* col-2: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src={illustration} alt="image" width={580} height={580} className="" />
        </motion.div>

        {/* col-3 to col-6: Feature cards */}
        {[ 
          { icon: vector1, title: "Money Management", text: "With experience in all market conditions, we recognize what processes and solutions." },
          { icon: grid, title: "Financial Planning", text: "These plans may include investment strategies, savings plans, etc." },
          { icon: briefcase, title: "Strategic", text: "With experience in all market conditions, we recognize what processes and solutions." },
          { icon: Vector2, title: "Risk Management", text: "With experience in all market conditions, we recognize what processes and solutions." },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
            className="bg-white rounded-[50px] px-[20px] lg:px-[90px] py-[40px] lg:py-[50px] flex justify-center flex-col"
          >
            <div className="mx-auto">
              <Image src={item.icon} alt="icon" width={60} height={60} />
            </div>
            <h3 className="text-3xl lg:text-4xl font-normal text-center my-4">{item.title}</h3>
            <p className="text-[22px] text-[var(--gray)] text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Learn More link */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link href="#" className="text-white flex items-center">
          <Image src={arrow} alt="arrow" width={36} height={42} className="mr-2" />
          <span className="text-sm">LEARN MORE</span>
        </Link>
      </motion.div>
    </div>

      {/* Our investor */}
      <div className="investor my-12 text-center">
        <p className="text-sm text-center text-[var(--secondary)] font-bold mb-3">OUR INVESTING</p>
        <h1 className="text-3xl lg:text-5xl xl:text-[64px] loading-[44px] lg:leading-[66px] mb-10">Empowering Your Business <br /> With Financial Capabilities</h1>
       <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
          <Image
            src={video}
            alt="Investing preview"
            fill
            className="object-cover"
          />
        </div>

         {/* <iframe
          width="1330px"
          height="560"
          src="https://www.youtube.com/embed/lLW-R69s-h8?autoplay=1&mute=1&controls=0&loop=1&playlist=lLW-R69s-h8&modestbranding=1&disablekb=1"
          title="YouTube autoplay video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ pointerEvents: "none" }} // 👈 hover/click disable karta hai
      ></iframe> */}
      </div>

     {/* /* Blog Section */ }
    <div className="bg-[var(--primary)] rounded-2xl md:rounded-[50px] mt-10 px-6 md:px-12 lg:px-20 py-12 md:py-16 text-white overflow-hidden">
      
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-bold text-[var(--secondary)]">OUR BLOG</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] text-white font-normal mt-4 leading-[44px] lg:leading-[66px] tracking-[-2%]">
          Sharing our <br /> Knowledge
        </h2>
      </motion.div>

      {/* Blog Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        
        {/* Left Text */}
        <motion.div
          className="lg:mt-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-[var(--secondary)]">NEWS</p>
          <h3 className="text-3xl md:text-4xl font-normal leading-[38px] lg:leading-[57px] mt-2">
            Minimum Wage May Lead to Higher Levels of Poverty
          </h3>
          <p className="mt-4 text-lg lg:text-2xl font-normal leading-[30px] mb-4 text-[var(--white-brand)]">
            The U.S. government reached the $31.4 trillion debt limit imposed by Congress on Jan. 19,
            and since then has been relying on accounting tricks by the Treasury Department.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Image src={image2} alt="Blog Image" className="rounded-2xl w-full h-auto" />
        </motion.div>
      </div>
    </div>

      {/* Solutions Section */}
<div className="bg-white rounded-2xl lg:rounded-[50px] px-6 md:px-12 lg:px-20 py-12 md:py-16 my-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] items-center gap-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-semibold mt-4 leading-tight lg:leading-[66px] tracking-tight">
            Simplifying Complexity with Innovative Solutions
          </h2>
          <div className="mt-8">
            <Button theme="warning" size="md">
              Get Started
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={world}
            alt="World illustration"
            width={350}
            height={350}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>


   </>
  );
}
