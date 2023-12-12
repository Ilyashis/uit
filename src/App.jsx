import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Layout Components
import RootLayout from '@components/layouts'

// Pages
import Home from '@pages/Home'
import Analytics from '@pages/Analytics'
import References from '@pages/References'
import NotFound from '@pages/NotFound'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="references" element={<References />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}
