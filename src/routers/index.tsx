import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/Search'

const routers = createBrowserRouter([
  {
    id: 'home',
    path: '/',
    element: <Home />
  },
  {
    id: 'search',
    path: '/search',
    element: <Search />
  },
  {
    id: 'error',
    path: '*'
  }
])

export default routers
