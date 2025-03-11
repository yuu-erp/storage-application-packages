import { Outlet } from 'react-router-dom'
import BackgroundBlur from '../shared/BackgroundBlur'

const BaseLayout = () => {
  return (
    <main className="w-full h-screen flex flex-col shrink-0 items-stretch">
      <BackgroundBlur className="bg-blur fixed" />
      <div className="h-full relative flex flex-col items-stretch shrink-0">
        <Outlet />
      </div>
    </main>
  )
}

export default BaseLayout
