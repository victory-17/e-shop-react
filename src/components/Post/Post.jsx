import React from "react";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import { Link } from "react-router-dom";
import PlayOnce from "../Notifications/AnimatedIcons";

function Post({ post }) {
  return (
    <AnimatedPage>
      <div className="group relative max-w-md p-6 bg-main-color border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 second-color">{post.title}</h2>
        <p className="text-color mb-6">{post.body}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              <p>{tag}</p>
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <span className="flex items-center text-gray-500">
              <i class="fa-solid fa-eye mr-1 text-blue-500"></i>

              {post.views}
            </span>
            <span className="flex items-center text-gray-500">
              <i class="fa-solid fa-thumbs-up second-color mr-1"></i>
              {post.reactions.likes}
            </span>
            <span className="flex items-center text-gray-500">
              <i class="fa-solid fa-thumbs-down mr-1"></i>
              {post.reactions.dislikes}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-full group-hover:translate-x-0">
          <div className=" transition-transform duration-700 transform -translate-x-10 group-hover:translate-x-0 text-white hover:text-white w-full focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center">
            <Link to={`posts/${post.id}`}>
              <PlayOnce
                imgname={"wired-lineal-646-walking-walkcycle-person.json"}
                timer={0}
                size={96}
              />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Post;
