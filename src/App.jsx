import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Indexpage from "@pages/Indexpage";
import Projects from "@pages/Projects";
import Interpret from "@pages/Interpret";
import Corrshem from "@pages/Corrshem";
import Import from "@pages/Import";
import NotFound from "@pages/NotFound";
import Cube3D from "@pages/Cube3D";
import Uvaska from "@pages/Uvaska";
import Interpretation from "@pages/Interpretation";

/*          <Route path="/interpretation" element={<Interpretation />} />
          <Route path="/corrshem" element={<Corrshem />} />
          <Route path="/cube3d" element={<Cube3D />} />
          <Route path="/import" element={<Import />} />
          <Route path="/uvaska" element={<Uvaska />} />*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexpage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/interpret" element={<Interpret />} />
        <Route path="/projects/interpretation" element={<Interpretation />} />
        <Route path="/projects/corrshem" element={<Corrshem />} />
        <Route path="/projects/cube3d" element={<Cube3D />} />
        <Route path="/projects/import" element={<Import />} />
        <Route path="/projects/uvaska" element={<Uvaska />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
