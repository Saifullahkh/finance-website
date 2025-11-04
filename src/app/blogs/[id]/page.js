import Image from "next/image";
import Link from "next/link";
import { blogPost } from "@/data/data";

export default function Page({ params }) {
  // Find the blog by ID (ensure type-safe comparison)
  const blog = blogPost.find((b) => String(b.id) === params.id);

  if (!blog)
    return <p className="text-center py-20 text-gray-600">Blog not found.</p>;

  return (
    <article className="py-16 px-6 max-w-4xl mx-auto">
      {/* Image */}
      <div className="h-[400px] w-full relative rounded-2xl overflow-hidden mb-8 shadow-md">
        <Image
          src={blog.img}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold mb-4 text-[var(--primary)]">
        {blog.title}
      </h1>

      {/* Blog Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
        <span>By <span className="font-medium text-gray-700">{blog.author}</span></span>
        <span>• {blog.date}</span>
        <span>• {blog.readTime}</span>
        <span className="bg-[var(--secondary)]/10 text-[var(--secondary)] px-3 py-1 rounded-full">
          {blog.category}
        </span>
        <span>❤️ {blog.likes}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6">
        {blog.desc}
      </p>

      {/* Content */}
      <p className="text-gray-800 whitespace-pre-line leading-relaxed mb-10">
        {blog.content}
      </p>

      {/* Back Button */}
      <div className="mt-10">
        <Link
          href="/blogs"
          className="text-[var(--secondary)] font-medium hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </article>
  );
}
