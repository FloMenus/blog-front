import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainContainer from "./components/Container";
import PostCreation from "./pages/PostCreation";
import CategoryCreation from "./pages/CategoryCreation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/create" element={<PostCreation />} />
          <Route path="/categories/create" element={<CategoryCreation />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
