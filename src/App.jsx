import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Layout Components
import RootLayout from '@components/layouts'

// Pages
import Indexpage from '@pages/Indexpage'
import Projects from '@pages/Projects'
import Projecttest from '@pages/Projecttest'
import Interpret from '@pages/Interpret'
import Cube from '@pages/Cube'
import Corrshem from '@pages/Corrshem'
import Import from '@pages/Import'
import NotFound from '@pages/NotFound'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Indexpage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projecttest" element={<Projecttest />} />
        <Route path="interpret" element={<Interpret />} />
        <Route path="corrshem" element={<Corrshem />} />
        <Route path="cube" element={<Cube />} />
        <Route path="import" element={<Import />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
