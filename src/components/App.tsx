import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '@/components/pages/HomePage'
import ResultsPage from '@/components/pages/ResultsPage'

const App = () => {
  return (
    <Router>
      <Route path="/" Component={() => <HomePage />} />
      <Route path="/results" Component={() => <ResultsPage />} />
    </Router>
  )
}

export default App
