"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ id, img, title, desc }) => {
  return (
    <div className="group  transition-all duration-300">
      {/* Image */}
      <div className="h-[220px] w-full relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[180px]">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[var(--secondary)]">
            {title}
          </h3>
          <p className=" text-md line-clamp-3">{desc}</p>
        </div>

        {/* Dynamic Link */}
        {id && (
          <Link
            href={`/blogs/${id}`}
            className="mt-4 inline-block text-[var(--secondary)] text-sm font-medium hover:underline transition-all"
          >
            Read More →
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
