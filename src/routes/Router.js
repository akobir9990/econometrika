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

import PresOne from "../pages/presentation/presPages/presOne";
import PresTwo from "../pages/presentation/presPages/presTwo";
import PresThree from "../pages/presentation/presPages/presThree";
import PresFour from "../pages/presentation/presPages/presFour";
import PresFive from "../pages/presentation/presPages/presFive";
import PresSix from "../pages/presentation/presPages/presSix";
import PresSeven from "../pages/presentation/presPages/presSeven";
import PresEight from "../pages/presentation/presPages/presEight";
import PresNine from "../pages/presentation/presPages/presNine";
import PresTen from "../pages/presentation/presPages/presTen";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route path="" element={<HomePage />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="presentation">
            <Route path="" element={<Presentation />} />
            <Route path="1" element={<PresOne />} />
            <Route path="2" element={<PresTwo />} />
            <Route path="3" element={<PresThree />} />
            <Route path="4" element={<PresFour />} />
            <Route path="5" element={<PresFive />} />
            <Route path="6" element={<PresSix />} />
            <Route path="7" element={<PresSeven />} />
            <Route path="8" element={<PresEight />} />
            <Route path="9" element={<PresNine />} />
            <Route path="10" element={<PresTen />} />
          </Route>

          <Route path="/lecture" element={<Lecture />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/guidlinies" element={<Guidlines />} />
          <Route path="/glossaries" element={<Glossaries />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
