"use client";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function Page() {
  return (
    <section className="min-h-screen  flex items-center justify-center py-16 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8  rounded-2xl overflow-hidden">
        {/* Left Info Section */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-10 flex flex-col  rounded-2xl">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--secondary)] mb-2">
              Location
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Greenfields, Citytown,<br />
              London, UK, S2050
            </p>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--secondary)] mb-2">
              Working Hours
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Monday To Friday <br />
              9:00 AM to 8:00 PM <br />
              Our Support team is available 24hrs
            </p>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--secondary)] mb-2">
              Contact Us
            </h3>
            <p className="text-base leading-relaxed">
              020 7993 2905 <br />
              Email@gmail.com
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="bg-white/20 hover:bg-white/40 transition p-2 rounded-full"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-10  flex flex-col justify-center">
          <h4 className="text-sm font-semibold text-[var(--secondary)] uppercase  mb-2">
            Contact
          </h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let’s get Started!
          </h2>
          <p className="text-gray-600 mb-8">
            Fill up the form and our team will get back to you within 24 hrs.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white font-medium py-3 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
