import DisCon from './components/Common/DisCon'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <DisCon>
        <Outlet />
      </DisCon>
    </>
  )
}

export default App
