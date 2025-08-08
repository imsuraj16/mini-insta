import React from "react";
import { useSelector } from "react-redux";

const Explore = () => {
  const allPosts = useSelector((state) => state.post.posts);
  

  return (
    <div className="bg-black min-h-screen px-4 py-6">
      <h1 className="text-white text-3xl font-bold mb-6 text-center">Explore</h1>

      {allPosts && allPosts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {allPosts.map((post, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt='image'
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">
                  {post.caption?.length > 50
                    ? post.caption.slice(0, 50) + "..."
                    : post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-10">No posts to show</p>
      )}
    </div>
  );
};

export default Explore;
