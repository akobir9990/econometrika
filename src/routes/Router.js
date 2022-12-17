import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Tutorial from "../pages/tutorial";
import Syllabus from "../pages/syllabus";
import Presentation from "../pages/presentation";
import Practice from "../pages/practice";
import Guidline from "../pages/guidlines";
import Glossaries from "../pages/glossaries";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/guidline" element={<Guidline />} />
        <Route path="/glossaries" element={<Glossaries />} />
      </Routes>
    </div>
  );
}

export default Router;
