import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to Find Fully Funded Scholarships",
    description:
      "Discover the best strategies to locate fully funded scholarships for international students.",
    date: "May 2026",
  },
  {
    id: 2,
    title: "Top 10 Scholarships for International Students",
    description:
      "Explore the most popular scholarship programs available globally.",
    date: "May 2026",
  },
  {
    id: 3,
    title: "How to Write a Winning Personal Statement",
    description: "Tips and strategies to craft a powerful personal statement.",
    date: "May 2026",
  },
  {
    id: 4,
    title: "Common Scholarship Application Mistakes",
    description:
      "Avoid the mistakes that cause most scholarship applications to fail.",
    date: "May 2026",
  },
  {
    id: 5,
    title: "Best Countries for Scholarship Opportunities",
    description:
      "Discover which countries offer the most scholarships for international students.",
    date: "May 2026",
  },
];

const Blogs = () => {
  const featuredBlog = blogs[0];
  const latestBlogs = blogs.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Scholarship Blogs
        </h1>

        <p className="text-base-content/70 max-w-2xl mx-auto">
          Learn scholarship strategies, application tips, and study abroad
          insights to help you succeed in your academic journey.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="bg-base-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-4">Featured Article</h2>

        <h3 className="text-xl font-bold mb-2">{featuredBlog.title}</h3>

        <p className="text-base-content/70 mb-4">{featuredBlog.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-base-content/60">
            {featuredBlog.date}
          </span>

          {/* <button className="btn btn-primary btn-sm">Read Article</button> */}
        </div>
      </div>

      {/* Latest Blogs */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Latest Articles</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {latestBlogs.map((blog) => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-sm hover:shadow-md transition"
            >
              <div className="card-body">
                <h3 className="card-title text-lg">{blog.title}</h3>

                <p className="text-sm text-base-content/70">
                  {blog.description}
                </p>

                <div className="flex justify-between items-center mt-4 text-xs text-base-content/60">
                  <span>{blog.date}</span>

                  {/* <button className="btn btn-primary btn-xs">Read More</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
