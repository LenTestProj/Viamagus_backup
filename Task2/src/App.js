import React, { useEffect } from "react";
import PostsPage from "./pages/PostsPage";
import { Route, Routes } from "react-router-dom";
import SinglePost from "./components/SinglePost/SinglePost";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/slices/postsSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello use-effect");
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
