import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsList from "../posts/PostsList";
import PostDetails from "../posts/PostDetails";
import NewPostForm from "../posts/NewPostForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostDetails/>} />
      <Route path="/posts/new" element={<NewPostForm/>} />
    </Routes>
  );
}

export default AppRoutes;
