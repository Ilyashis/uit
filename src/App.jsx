import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Layout Components
import RootLayout from "@components/layouts";

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

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/uit/">
        <Route index path="/uit/" element={<Indexpage />} />
        <Route path="/uit/projects" element={<Projects />} />
        <Route path="/uit/interpret" element={<Interpret />} />
        <Route path="/uit/interpretation" element={<Interpretation />} />
        <Route path="/uit/corrshem" element={<Corrshem />} />
        <Route path="/uit/cube3d" element={<Cube3D />} />
        <Route path="/uit/import" element={<Import />} />
        <Route path="/uit/uvaska" element={<Uvaska />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}
