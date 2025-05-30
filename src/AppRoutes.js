import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Page/MainPageComponent";
import SearchComponent from "./components/Search/SearchComponent";
import Footer from "./components/Footer/FooterComponent";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/:username" exact element={<SearchComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
