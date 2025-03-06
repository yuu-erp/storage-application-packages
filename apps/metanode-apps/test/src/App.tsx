import { handleMessageError } from '@metanode/utils'

export default function App() {
  const a = () => {
    const test = handleMessageError('xin chào Duy')
    console.log(test)
  }
  a()
  return (
    <main className="w-screen h-screen flex items-center justify-center overflow-hidden flex-col">
      <h1 className="text-4xl font-bold text-yellow-500">APP | METANODE</h1>
      <span>Xin chào! </span>
    </main>
  )
}
