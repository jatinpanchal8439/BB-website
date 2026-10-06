import fs from 'fs/promises';
import path from 'path';
import BlogCTA from "../components/BlogCTA";
import BlogGrid from "../components/blog/BlogGrid";
import BlogBottomCTA from "../components/blog/BlogBottomCTA";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Blog | Practical Guides for Brand Founders | Banega Brand',
  description: 'Practical guides and real answers for first-time brand founders launching perfume, skincare, cosmetics and Ayurveda brands.',
}

export default async function BlogPage() {
  // Read blogs dynamically so changes from the admin panel reflect immediately without aggressive caching
  const dataPath = path.join(process.cwd(), 'data', 'blogs.json');
  let blogs = [];
  try {
    const fileContents = await fs.readFile(dataPath, 'utf8');
    blogs = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read blogs.json:", error);
  }

  return (
    <main className="min-h-screen bg-[#FAF5EE] font-sans">
      <BlogCTA />
      <BlogGrid blogs={blogs} />
      <BlogBottomCTA />
      <Footer />
    </main>
  );
}
