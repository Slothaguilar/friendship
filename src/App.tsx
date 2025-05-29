import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PatternSelection from './components/PatternSelection'
import StepByStep from './components/StepByStep'
import KnotTutorial from './components/KnotTutorial'
import InteractivePractice from './components/InteractivePractice'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <Container maxW="container.xl" py={8}>
            <Routes>
              <Route path="/" element={<PatternSelection />} />
              <Route path="/tutorial/:pattern" element={<StepByStep />} />
              <Route path="/knots/:type" element={<KnotTutorial />} />
              <Route path="/practice/:pattern" element={<InteractivePractice />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
