import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsList from "../posts/PostsList";
import PostDetails from "../posts/PostDetails";
import NewPostForm from "../posts/NewPostForm";
import EditPostForm from "../posts/EditPostForm.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostDetails/>} />
      <Route path="/posts/:id/edit" element={<EditPostForm/>} />
      <Route path="/posts/new" element={<NewPostForm/>} />
    </Routes>
  );
}

export default AppRoutes;
