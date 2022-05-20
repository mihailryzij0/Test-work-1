import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ListUsers from "./pages/ListUsers";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import UserPostList from "./pages/UserPostList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ListUsers />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/post-list" element={<UserPostList />} />
    </Routes>
  );
}
