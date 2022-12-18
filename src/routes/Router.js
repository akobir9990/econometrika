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

import One from "../pages/practice/pages/one/One";
import Two from "../pages/practice/pages/two/Two";
import Three from "../pages/practice/pages/three/Three";
import Four from "../pages/practice/pages/four/Four";
import Five from "../pages/practice/pages/five/Five";
import Six from "../pages/practice/pages/six/Six";
import Seven from "../pages/practice/pages/seven/Seven";
import Eight from "../pages/practice/pages/eight/Eight";
import Nine from "../pages/practice/pages/nine/Nine";
import Ten from "../pages/practice/pages/ten/Ten";
import Eleven from "../pages/practice/pages/eleven/Eleven";
import Twelve from "../pages/practice/pages/twelve/Twelve";
import Thirteen from "../pages/practice/pages/thirteen/Thirteen";
import Fourteen from "../pages/practice/pages/fourteen/Fourteen";
import Fifteen from "../pages/practice/pages/fifteen/Fifteen";
import Sixteen from "../pages/practice/pages/sixteen/Sixteen";
import Seventeen from "../pages/practice/pages/seventeen/Seventeen";
import Eighteen from "../pages/practice/pages/eighteen/Eighteen";
import Nineteen from "../pages/practice/pages/nineteen/Nineteen";
import Twenty from "../pages/practice/pages/twenty/Twenty";

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
          <Route path="/practice">
            <Route path="" element={<Practice />} />
            <Route path="1" element={<One />} />
            <Route path="2" element={<Two />} />
            <Route path="3" element={<Three />} />
            <Route path="4" element={<Four />} />
            <Route path="5" element={<Five />} />
            <Route path="6" element={<Six />} />
            <Route path="7" element={<Seven />} />
            <Route path="8" element={<Eight />} />
            <Route path="9" element={<Nine />} />
            <Route path="10" element={<Ten />} />
            <Route path="11" element={<Eleven />} />
            <Route path="12" element={<Twelve />} />
            <Route path="13" element={<Thirteen />} />
            <Route path="14" element={<Fourteen />} />
            <Route path="15" element={<Fifteen />} />
            <Route path="16" element={<Sixteen />} />
            <Route path="17" element={<Seventeen />} />
            <Route path="18" element={<Eighteen />} />
            <Route path="19" element={<Nineteen />} />
            <Route path="20" element={<Twenty />} />
          </Route>
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
