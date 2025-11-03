'use client';
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion';
import Animation from "@/components/Animation";
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import about from '@/assets/about.png'
import { historyData } from '@/data/data';
import finwise3 from '@/assets/finwise3.png'
import card1 from '@/assets/card1.png'
import card2 from '@/assets/card2.png'
import card3 from '@/assets/card3.png'
import card4 from '@/assets/card4.png'
import trusted from '@/assets/Trusted by.png'
import google from '@/assets/google.png'
import linkedin from '@/assets/linkedin.png'
import facebook from '@/assets/facebook.png'
import apple from '@/assets/apple.png'
import Marquee from "react-fast-marquee";

export default function Page() {
  const stats = [
    { value: 15, label: "YEARS EXPERIENCE", suffix: "+" },
    { value: 120, label: "PROJECTS COMPLETED", suffix: "+" },
    { value: 50, label: "SATISFIED CLIENTS", suffix: "+" },
    { value: 10, label: "AWARDS WON", suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500; // 1.5s animation
      const increment = end / (duration / 16); // assuming 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, []);


  const images = [trusted, google, apple, facebook, linkedin]

  return (
    <>
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12'>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full"
                > 
                <Image src={about} alt='about' />
            </motion.div>
             {/* Header */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=""
                >
                <h1 className="text-4xl sm:text-5xl  font-medium text-black mb-2">
                    About Company
                </h1>
                <p className="text-gray text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
                    We are constantly pushing the boundaries of what is possible and seeking new ways to 
                    improve our services and help our clients achieve their goals.
                </p> 

                {/* vission */}
                <h3 className="text-4xl sm:text-3xl  font-medium text-black mb-2">
                    Vision
                </h3>
                <p className="text-gray text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
                   Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals and live the life they want.
                </p>

                {/* vission */}
                <h3 className="text-4xl sm:text-3xl  font-medium text-black mb-2">
                    Mission
                </h3>
                <p className="text-gray text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
                    We are on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they need to manage their finances effectively and make smart financial decisions.
                </p>
            </motion.div>
        </div>
      </div>
    </section>

     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-brand">
      <div className="max-w-7xl mx-auto">
        <Animation as="div" direction="left" className=""
        >
          <h2 className="text-4xl font-bold text-black mb-6">HISTORY</h2>
        </Animation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {historyData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Animation as="div"
                direction="up"
                key={index}
                className="relative  rounded-2xl p-6  transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-[var(--secondary)]" />
                </div>

                {/* Year */}
                <h3 className="text-2xl font-bold text-secondary mb-2">{item.year}</h3>

                {/* Description */}
                <p className="text-gray text-md leading-relaxed mb-4">{item.desc}</p>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </Animation>
            );
          })}
        </div>
      </div>
    </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-brand">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
             <Animation as="div" direction="left">
              <div className="h-auto lg:h-[520px] w-full" >
                <Image
                  src={finwise3}
                  alt="img"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              </Animation>

              <Animation as="div"
                direction="right"
                 className='bg-[var(--primary)] rounded-2xl px-6 md:px-12 py-12 md:py-22 flex flex-col justify-between'
              >
                <div className=''>
                  <h2 className="text-4xl sm:text-5xl  font-medium text-white mb-2">
                    Our achievements
                  </h2>
                  <p className='text-md text-white'>We are committed to achieving excellence in everything we do. Over the years, we have worked hard to build a reputation for providing exceptional services and delivering outstanding results for our clients. We are proud of our achievements and milestones, and we want to share them with you.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mt-10">
                  {stats.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-4xl text-white font-semibold">
                        {counts[i]}
                        {item.suffix}
                      </h3>
                      <p className="text-[var(--secondary)] text-sm tracking-wide">{item.label}</p>
                    </div>
                  ))}
                </div>
              </Animation>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <Animation as="h2" direction="left" className=" text-4xl font-semibold mb-8">Our Management</Animation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Animation as="div" direction="up" className="card relative mb-40 lg:mb-0">
                  <div className="card-img h-[364px] w-[343px]">
                    <Image src={card1} alt="card1" className="object-cover w-full" />
                  </div>
                  <div className="card-body absolute top-77 lg:top-17 right-0 bg-white p-5 rounded-2xl lg:w-xs">
                    <h5 className="text-2xl mb-1">Michael Steuber</h5>
                    <p className="text-sm text-[var(--secondary)] font-semibold mb-2">EXECUTIVE CHAIRMAN</p>
                    <p className="text-mg">Amet minim mollit non deserunt ullamco est sit etsi aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                     {/* Social Icons */}
                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaTwitter size={16} />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      </div>
                  </div>
              </Animation>
              <Animation as="div" direction="up" className="card relative mb-40 lg:mb-0">
                  <div className="card-img h-[364px] w-[343px]">
                    <Image src={card2} alt="card1" className="object-cover w-full" />
                  </div>
                  <div className="card-body absolute top-77 lg:top-17  right-0 bg-white p-5 rounded-2xl lg:w-xs">
                    <h5 className="text-2xl mb-1">Hannah Hansen</h5>
                    <p className="text-sm text-[var(--secondary)] font-semibold mb-2">EXECUTIVE CHAIRMAN</p>
                    <p className="text-mg">Amet minim mollit non deserunt ullamco est sit etsi aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                     {/* Social Icons */}
                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaTwitter size={16} />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      </div>
                  </div>
              </Animation>
              <Animation as="div" direction="up" className="card relative mb-40 lg:mb-0">
                  <div className="card-img h-[364px] w-[343px]">
                    <Image src={card3} alt="card1" className="object-cover w-full" />
                  </div>
                  <div className="card-body absolute top-77 lg:top-17  right-0 bg-white p-5 rounded-2xl lg:w-xs">
                    <h5 className="text-2xl mb-1">Jasmine McClure</h5>
                    <p className="text-sm text-[var(--secondary)] font-semibold mb-2">EXECUTIVE CHAIRMAN</p>
                    <p className="text-mg">Amet minim mollit non deserunt ullamco est sit etsi aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                     {/* Social Icons */}
                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaTwitter size={16} />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      </div>
                  </div>
              </Animation>
              <Animation as="div" direction="up" className="card relative mb-40 lg:mb-0">
                  <div className="card-img h-[364px] w-[343px]">
                    <Image src={card4} alt="card1" className="object-cover w-full" />
                  </div>
                  <div className="card-body absolute top-77 lg:top-17  right-0 bg-white p-5 rounded-2xl lg:w-xs">
                    <h5 className="text-2xl mb-1">Clarence Veum V</h5>
                    <p className="text-sm text-[var(--secondary)] font-semibold mb-2">EXECUTIVE CHAIRMAN</p>
                    <p className="text-mg">Amet minim mollit non deserunt ullamco est sit etsi aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                     {/* Social Icons */}
                      <div className="flex items-center gap-3 mt-4">
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaTwitter size={16} />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[var(--primary)] hover:text-white transition-colors"
                        >
                          <FaLinkedinIn size={16} />
                        </a>
                      </div>
                  </div>
              </Animation>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
           <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {images.map((img, i) => (
              <div key={i} className="mx-6 w-[120px] md:w-[220px] ">
                <Image
                  src={img}
                  alt={`marquee-${i}`}
                  width={200}
                  height={150}
                  className=" object-cover"
                />
              </div>
            ))}
          </Marquee>
        </section>
    </>
  );
}