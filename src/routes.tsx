import { lazy, Suspense } from 'react'
import {
  createHashRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import { RoutePaths } from '@/enums'
import { MainLayout } from '@/layouts'

export const AppRoutes = () => {
  const Homepage = lazy(() => import('@/pages/Homepage'))
  const TechDoc = lazy(() => import('@/pages/TechDoc'))

  const pageAnimationOpts = {
    initial: 'hide',
    animate: 'show',
    exit: 'hide',
    variants: {
      hide: {
        opacity: 0,
      },
      show: {
        opacity: 1,
      },
    },
    transition: { duration: 0.5 },
  }

  const router = createHashRouter([
    {
      path: RoutePaths.Root,
      element: (
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: RoutePaths.Root,
              element: <Homepage {...pageAnimationOpts} />,
            },
            {
              path: RoutePaths.techDoc,
              element: <TechDoc {...pageAnimationOpts} />,
            },
            {
              path: '*',
              element: <Navigate replace to={RoutePaths.Root} />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
