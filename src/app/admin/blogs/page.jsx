"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    slug: '',
    image: '/assets/blog/1f9d24ffbb6b02acb82321cedae3e1500bd112ef.jpg'
  });

  const availableImages = [
    '/assets/blog/1f9d24ffbb6b02acb82321cedae3e1500bd112ef.jpg',
    '/assets/blog/30d2057701b757aa239d3067caf62751052034f8.jpg',
    '/assets/blog/7ca785cc4f4074adfce3497b6942a9e0f2f5b841.jpg',
    '/assets/blog/bfff8aa625bb9ad02ef125076ac03f3ccd724376.jpg',
    '/assets/blog/dd2dd6391de86d05acec171ea8a8ad97f3bc773b.jpg'
  ];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Auto-generate slug from title if we're adding a new blog
    if (e.target.name === 'title' && !isEditing) {
      setFormData(prev => ({
        ...prev,
        slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      }));
    }
  };

  const handleEdit = (blog) => {
    setIsEditing(true);
    setCurrentBlogId(blog.id);
    setFormData({
      title: blog.title,
      category: blog.category,
      description: blog.description,
      slug: blog.slug,
      image: blog.image
    });
    window.scrollTo(0, 0);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentBlogId(null);
    setFormData({
      title: '',
      category: '',
      description: '',
      slug: '',
      image: availableImages[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = '/api/blogs';
      const method = isEditing ? 'PUT' : 'POST';
      const payload = isEditing ? { ...formData, id: currentBlogId } : formData;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert(isEditing ? 'Blog updated successfully!' : 'Blog added successfully!');
        handleCancel();
        fetchBlogs();
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to save blog:', error);
      alert('Failed to save blog');
    }
  };

  if (isLoading) return <div className="p-20 text-center">Loading Admin Panel...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20 font-sans">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-[#061B35]">Blog Admin Panel</h1>
          <Link href="/blog" className="text-[#FF5425] font-semibold hover:underline">
            View Live Blog Page &rarr;
          </Link>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold mb-6">{isEditing ? 'Edit Blog' : 'Add New Blog'}</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF5425]" placeholder="Enter blog title" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Category</label>
                <input required type="text" name="category" value={formData.category} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF5425]" placeholder="e.g. GETTING STARTED" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Description (Short excerpt for card)</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows="2" className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF5425]" placeholder="Enter a brief description"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">URL Slug</label>
                <input required type="text" name="slug" value={formData.slug} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF5425]" placeholder="e.g. my-first-blog" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Select Image Cover</label>
                <select name="image" value={formData.image} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF5425] bg-white">
                  {availableImages.map((img, i) => (
                    <option key={i} value={img}>Cover Image {i + 1}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button type="submit" className="bg-[#FF5425] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#e0451a] transition-colors">
                {isEditing ? 'Update Blog' : 'Publish Blog'}
              </button>
              {isEditing && (
                <button type="button" onClick={handleCancel} className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors">
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Section */}
        <h2 className="text-2xl font-bold mb-6 text-[#061B35]">Manage Existing Blogs ({blogs.length})</h2>
        <div className="flex flex-col gap-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-32 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="bg-[#FFF2E6] text-[#FF5425] text-xs font-bold px-2 py-1 rounded">{blog.category}</span>
                  <span className="text-xs text-gray-400 font-mono">ID: {blog.number}</span>
                </div>
                <h3 className="text-lg font-bold text-[#061B35]">{blog.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">{blog.description}</p>
              </div>
              <div className="shrink-0 flex gap-3 w-full md:w-auto">
                <button onClick={() => handleEdit(blog)} className="flex-1 md:flex-none text-center bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                  Edit
                </button>
                <Link href={`/blog/${blog.slug}`} className="flex-1 md:flex-none text-center bg-gray-50 text-gray-600 font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
