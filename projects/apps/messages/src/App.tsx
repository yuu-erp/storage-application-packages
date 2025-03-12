import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'
import { SystemCore } from '@repo/core'
export default function App() {
  const getAllWallet = async () => {
    try {
      console.log('getAllWallet 1')
      console.log('getAllWallet 2S')
      const res = await SystemCore.send({ command: 'getAllWallets' })
      console.log('getAllWallet ...', res)
    } catch (err) {
      console.log('getAllWallets erro', err)
    }
  }

  useEffect(() => {
    getAllWallet()
  }, [])
  return (
    <Suspense
      fallback={<div className="fixed inset-0 flex items-center justify-center">Loading...</div>}
    >
      <RouterProvider router={routers} />
    </Suspense>
  )
}
