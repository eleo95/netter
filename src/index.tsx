import { createRoot } from 'react-dom/client'
import './globals.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ResultsPage from './components/pages/ResultsPage'
import { useSubnetStore } from './store/useSubnetStore'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />
//   },
//   {
//     path: 'results',
//     element: <ResultsPage />
//   }
// ])

// root.render(<ResultsPage />)

// root.render(<HomePage />)
const App = () => {
  const { hostRequirements, networkInfo } = useSubnetStore()
  const routes = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'results',
      element:
        hostRequirements.length === 0 || !networkInfo ? (
          <Navigate to={'/'} />
        ) : (
          <ResultsPage />
        )
    }
  ]
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

root.render(<App />)
