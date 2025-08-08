import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersPosts } from "../store/actions/postActions";

const Profile = () => {
  const userPosts = useSelector((state) => state?.post?.userPost || []);
  
  const username = useSelector((state) => state?.user?.user?.username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersPosts());
  }, [dispatch]);

  return (
    <div className="bg-black min-h-screen text-white px-[4rem] py-[3rem]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10 border-b border-gray-700 pb-6">
        <div className="flex flex-col md:flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold">{username}</h2>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Posts</h3>
      {userPosts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {userPosts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-800 hover:border-gray-600 transition"
            >
              <img
                src={post.image}
                alt="Post"
                className="w-full h-48 object-cover"
              />

              <div className="p-2">
                <p className="text-sm text-gray-300">
                  {post.caption?.length > 60
                    ? post.caption.slice(0, 60) + "..."
                    : post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 mt-10">No posts yet</p>
      )}
    </div>
  );
};

export default Profile;
