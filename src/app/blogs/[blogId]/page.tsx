"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import blog1 from "@/app/images/blog1.png";
import blog2 from "@/app/images/blog2.png";
import blog3 from "@/app/images/blog3.png";
import blog4 from "@/app/images/blog4.png";
import blog5 from "@/app/images/blog5.png";
import blog6 from "@/app/images/blog6.png";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const blogs = [
  { 
    id: "1", 
    title: "Lorem Ipsum Dolor", 
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Quisque sit amet accumsan arcu. Integer ac turpis ut elit interdum sollicitudin. 
      Vivamus et arcu lorem. Duis gravida orci eu velit feugiat, ut tincidunt purus tempor. 
      Phasellus euismod, erat at consequat faucibus, nisl turpis tincidunt justo, non fermentum ante ligula a magna. 
      Sed sit amet sem sit amet nunc egestas varius. Integer et sapien at ante iaculis placerat. 
      Pellentesque euismod neque ut purus volutpat, sed scelerisque nulla tempus.
    `, 
    image: blog1 
  },
  { 
    id: "2", 
    title: "Consectetur Adipiscing", 
    content: `
      Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
      Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. 
      Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
      Vestibulum lacinia arcu eget nulla. 
    `, 
    image: blog2 
  },
  { 
    id: "3", 
    title: "Lorem Ipsum Sit Amet", 
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, risus vel dictum varius, 
      nunc velit volutpat augue, a convallis tortor felis et eros. Sed et justo sit amet ante tincidunt sodales. 
      Ut tristique metus et erat gravida, ac dapibus purus aliquam. 
      Aliquam erat volutpat. Integer tincidunt turpis ac urna facilisis, sed efficitur urna dictum.
    `, 
    image: blog3 
  },
  { 
    id: "4", 
    title: "Lorem Ipsum Sit Amet", 
    content: `
      Vivamus tristique, orci a volutpat scelerisque, risus nisi tempor enim, ac malesuada enim magna nec ante. 
      Integer fringilla tortor sit amet ipsum interdum, ac tincidunt elit elementum. 
      Fusce in tortor nec urna iaculis aliquet. Ut sit amet enim vitae ligula condimentum auctor. 
      Sed convallis felis sit amet velit tincidunt, a placerat orci gravida.
    `, 
    image: blog4 
  },
  { 
    id: "5", 
    title: "Lorem Ipsum Sit Amet", 
    content: `
      Nulla nec felis a sapien condimentum tincidunt. Sed sit amet elit quis elit cursus tincidunt. 
      Curabitur sit amet libero ac ligula tincidunt vehicula. 
      Integer ac justo nec ligula placerat venenatis. Donec faucibus libero non eros ultricies, eu scelerisque nunc iaculis. 
      Proin gravida mi eu elit luctus, at tincidunt urna gravida. 
    `, 
    image: blog5 
  },
  { 
    id: "6", 
    title: "Lorem Ipsum Sit Amet", 
    content: `
      Aliquam erat volutpat. Proin ut purus sed sapien elementum malesuada. 
      Integer eget urna ac nisi dapibus lacinia non non tortor. 
      Sed tempus leo at orci tincidunt, et feugiat libero lacinia. 
      Curabitur malesuada nisl sit amet libero tincidunt, eu volutpat nunc sodales.
    `, 
    image: blog6 
  },
];

export default function BlogDetails() {
  const { blogId } = useParams(); // Get dynamic blogId from the URL
  const blog = blogs.find((b) => b.id === blogId);
  const [comments, setComments] = useState<{ text: string; date: string }[]>([
    { text: "Great post! Really enjoyed reading this.", date: new Date().toLocaleString() },
    { text: "I agree with the points made here. Very informative!", date: new Date().toLocaleString() },
    { text: "This is exactly what I was looking for, thanks for sharing!", date: new Date().toLocaleString() },
  ]);
  const [comment, setComment] = useState("");

  if (!blog) {
    return <p className="text-center text-red-500 mt-10">Blog not found!</p>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        { text: comment.trim(), date: new Date().toLocaleString() },
      ]);
      setComment("");
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{blog.title}</h1>
        <Image src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg mb-6" />
        <p className="text-gray-600 mb-8">{blog.content}</p>

        {/* Comments Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
          <ul className="space-y-4 mb-6">
            {comments.length > 0 ? (
              comments.map((c, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded shadow">
                  <p>{c.text}</p>
                  <p className="text-sm text-gray-500 mt-2">Posted on: {c.date}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </ul>
          <form onSubmit={handleCommentSubmit} className="flex flex-col gap-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Write your comment..."
              rows={4}
            />
            <button
              type="submit"
              className="self-start px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </div>
      <Footer/>
    </>
  );
}
