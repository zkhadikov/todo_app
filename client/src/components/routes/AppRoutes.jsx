import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsList from "../posts/PostsList";
import PostDetails from "../posts/PostDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostDetails/>} />
      <Route path="/posts/new" element={<h1>New Post</h1>} />
    </Routes>
  );
}

export default AppRoutes;
