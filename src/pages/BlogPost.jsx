// src/pages/BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";

const blogPostsContent = {
  1: "This is the first blog post content.",
  2: "This is the second blog post content.",
  3: "This is the third blog post content.",
};

function BlogPost() {
  const { id } = useParams();
  const content = blogPostsContent[id] || "Blog post not found";

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
