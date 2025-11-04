import React from 'react'
import BlogCard from './BlogCard'
import { blogPost } from '@/data/data'

function page() {
  return (
    <>
        <div className='py-9'>
            <h1 className='text-center text-3xl md:text-5xl font-semibold mb-5'>Blog</h1>
            <ul className='flex gap-6 justify-center'>
                <li>
                    <a href='' className='hover:text-amber-500' >Linkedin</a>
                </li>
                <li>
                    <a href='' className='hover:text-amber-500' >Twitter</a>
                </li>
                <li>
                    <a href='' className='hover:text-amber-500' >instagram</a>
                </li>
            </ul>
        </div>

        <section className='py-16 px-4 sm:px-6 lg:px-8'>            
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
            {blogPost.map((post) => (
                <BlogCard
                key={post.id}
                img={post.img}
                title={post.title}
                desc={post.desc}
                id={post.id}
                />
            ))}
            </div>          
        </section>
    </>
  )
}

export default page