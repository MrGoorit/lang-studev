import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import { layoutRoutes } from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: layoutRoutes.map(({ path, index, element }) => ({
      path,
      index,
      element,
    })),
  },
])

export default router
