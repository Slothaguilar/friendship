import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import StepByStep from './components/StepByStep'
import KnotTutorial from './components/KnotTutorial'
import InteractivePractice from './components/InteractivePractice'

function App() {
  return (
    <Box minH="100vh" bg="#1a1a2e" color="white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial/:pattern" element={<StepByStep />} />
          <Route path="/knot/:type" element={<KnotTutorial />} />
          <Route path="/practice/:pattern" element={<InteractivePractice />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
