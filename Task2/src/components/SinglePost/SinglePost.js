import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = () => {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.posts).find(
    (post) => post.id === Number(postId)
  );

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
      </div>
    );
  }
  return (
    <div className="singlePostContainer">
      <h4 className="singlePostTitle">{post.title}</h4>
      <p className="singlePostBody">{post.body}</p>
    </div>
  );
};

export default SinglePost;
