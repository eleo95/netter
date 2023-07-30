import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '@/components/pages/HomePage'
import ResultsPage from '@/components/pages/ResultsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={() => <HomePage />} />
        <Route path="/results" Component={() => <ResultsPage />} />
      </Routes>
    </Router>
  )
}

export default App
