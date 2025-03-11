import { lazy } from 'react'
import { createHashRouter } from 'react-router-dom'
import BaseLayout from './components/layouts/BaseLayout'

const Messages = lazy(() => import('./pages/Messages'))

export const routers = createHashRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Messages />
      }
    ]
  }
])
