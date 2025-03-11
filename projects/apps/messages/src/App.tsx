import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'

export default function App() {
  return (
    <Suspense
      fallback={<div className="fixed inset-0 flex items-center justify-center">Loading...</div>}
    >
      <RouterProvider router={routers} />
    </Suspense>
  )
}
