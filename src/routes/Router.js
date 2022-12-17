import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Tutorial from "../pages/tutorial";
import Syllabus from "../pages/syllabus";
import Presentation from "../pages/presentation";
import Lecture from "../pages/lecture";
import Practice from "../pages/practice";
import Guidlines from "../pages/guidlines";
import Glossaries from "../pages/glossaries";
import NotFoundPage from "../pages/notFoundPage";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/guidlines" element={<Guidlines />} />
        <Route path="/glossaries" element={<Glossaries />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Router;
