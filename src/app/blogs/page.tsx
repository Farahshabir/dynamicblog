// export default function ProductDetails({ 
//   params,
// }: {
//   params: { productId: string};
// }) 
// {
//   return <h1>Details about products {params.productId}</h1>;
// }
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import blog1 from "@/app/images/blog1.png";
import blog2 from "@/app/images/blog2.png";
import blog3 from "@/app/images/blog3.png";
import blog4 from "@/app/images/blog4.png";
import blog5 from "@/app/images/blog5.png";
import blog6 from "@/app/images/blog6.png";
import Header from "@/app/components/header";
import Footer from "../components/footer";

const blogs = [
  {
    id: "1",
    title: "Lorem Ipsum Dolor",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    image: blog1,
  },
  {
    id: "2",
    title: "Consectetur Adipiscing",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    image: blog2,
  },
  {
    id: "3",
    title: "Lorem Ipsum Sit Amet",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    image: blog3,
  },
  {
    id: "4",
    title: "Lorem Ipsum Sit Amet",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    image: blog4,
  },
  {
    id: "5",
    title: "Lorem Ipsum Sit Amet",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    image: blog5,
  },
  {
    id: "6",
    title: "Lorem Ipsum Sit Amet",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    image: blog6,
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
        <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded overflow-hidden">
                <Image src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{blog.title}</h3>
                  <p className="text-gray-500 text-sm">{blog.excerpt}</p>
                  <p className="text-orange-500 text-[13px] font-semibold mt-4">{blog.date}</p>
                  <Link
                    href={`/blogs/${blog.id}`} // Dynamic route
                    className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
