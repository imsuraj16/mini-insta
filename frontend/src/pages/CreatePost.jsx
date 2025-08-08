import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCaption, createPost } from "../store/actions/postActions";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [imgfile, setimgfile] = useState(null);
  const [imgurl, setimgurl] = useState(null);
  const [captionText, setCaptionText] = useState("");
  const dispatch = useDispatch();
  const caption = useSelector((state) => state.post.caption);
  const navigate = useNavigate();

  useEffect(() => {
    if (caption) {
      setCaptionText(caption);
    }
  }, [caption]);

  const imageHandler = (e) => {
    setimgfile(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setimgurl(url);
  };

  const captionHandler = () => {
    const formData = new FormData();
    formData.append("image", imgfile);
    dispatch(createCaption(formData));
  };

  const postHandler = () => {
    const formData = new FormData();
    formData.append("image", imgfile);
    formData.append("caption", captionText);
    dispatch(createPost(formData));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-lg shadow-xl border border-white/20">
        <h1 className="text-white text-3xl font-semibold text-center mb-6">
          Create a Post
        </h1>

        {/* File Upload */}
        <label
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 cursor-pointer hover:border-white transition"
        >
          <span className="text-gray-300 mb-3">
            {imgfile ? "Change Image" : "Upload Image"}
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={imageHandler}
          />
        </label>

        {/* Image Preview */}
        {imgurl && (
          <div className="mt-5 w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <img
              src={imgurl}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Caption Area */}
        <div className="mt-6">
          <h2 className="text-white text-lg mb-2">Caption</h2>
          <textarea
            value={captionText}
            onChange={(e) => setCaptionText(e.target.value)}
            placeholder="Write or generate your caption..."
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 text-white resize-none outline-none focus:border-white transition"
            rows="3"
          ></textarea>
          <button
            onClick={captionHandler}
            className="mt-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Generate Caption with AI
          </button>
        </div>

        {/* Post Button */}
        <button
          onClick={postHandler}
          className="mt-5 w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition text-lg"
        >
          Post Now 🚀
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
