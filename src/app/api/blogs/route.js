import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'blogs.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(dataPath, 'utf8');
    const blogs = JSON.parse(fileContents);
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read blogs data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const newBlog = await request.json();
    
    let blogs = [];
    try {
      const fileContents = await fs.readFile(dataPath, 'utf8');
      blogs = JSON.parse(fileContents);
    } catch (e) {
      // If file doesn't exist, start with empty array
    }

    // Assign a new ID and format number
    newBlog.id = Date.now().toString();
    const newNum = blogs.length + 1;
    newBlog.number = newNum < 10 ? `0${newNum}` : newNum.toString();
    
    // Ensure default image if none provided
    if (!newBlog.image) {
      newBlog.image = "/assets/blog/1f9d24ffbb6b02acb82321cedae3e1500bd112ef.jpg";
    }

    blogs.push(newBlog);
    
    await fs.writeFile(dataPath, JSON.stringify(blogs, null, 2));
    
    return NextResponse.json({ success: true, blog: newBlog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const updatedBlog = await request.json();
    
    const fileContents = await fs.readFile(dataPath, 'utf8');
    let blogs = JSON.parse(fileContents);
    
    const index = blogs.findIndex(b => b.id === updatedBlog.id);
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...updatedBlog };
      await fs.writeFile(dataPath, JSON.stringify(blogs, null, 2));
      return NextResponse.json({ success: true, blog: blogs[index] });
    }
    
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}
