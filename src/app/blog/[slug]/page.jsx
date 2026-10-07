import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../../components/Footer";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || '';
  return {
    title: `${slug.replace(/-/g, ' ')} | Banega Brand`,
  }
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // Find the blog
  const dataPath = path.join(process.cwd(), 'data', 'blogs.json');
  let blog = null;
  
  try {
    const fileContents = await fs.readFile(dataPath, 'utf8');
    const blogs = JSON.parse(fileContents);
    blog = blogs.find(b => b.slug === slug);
  } catch (error) {
    console.error("Failed to read blogs.json:", error);
  }

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[60vh] font-sans">
        <h1 className="text-4xl font-bold text-[#061B35] mb-4">Blog Not Found</h1>
        <p className="text-gray-500 mb-8">The blog post you are looking for does not exist.</p>
        <Link href="/blog" className="text-[#FF5425] font-bold hover:underline">
          &larr; Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-[#FCF8F5] font-sans">
      <div className="max-w-[800px] mx-auto px-6 pb-20">
        
        <Link href="/blog" className="inline-flex items-center text-[#FF5425] font-bold text-sm mb-8 hover:underline">
          &larr; Back to all guides
        </Link>
        
        <div className="mb-8">
          <span className="bg-[#FFF2E6] text-[#FF5425] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            {blog.category}
          </span>
        </div>

        <h1 className="text-[36px] md:text-[48px] font-[800] leading-tight text-[#061B35] mb-6">
          {blog.title}
        </h1>

        <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
          {blog.description}
        </p>

        <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            Welcome to the comprehensive guide on <strong>{blog.title}</strong>. 
            This is placeholder content. Once you integrate a rich-text editor in your admin panel, 
            you can save full HTML or Markdown content and render it here!
          </p>
          <p className="mt-6">
            For now, you can manage the cover image, title, category, and description 
            of this post from the <strong>/admin/blogs</strong> panel.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
