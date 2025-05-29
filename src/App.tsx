import { ChakraProvider, Box, Container, Flex, Button } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'
import PatternSelection from './components/PatternSelection'
import StepByStep from './components/StepByStep'
import KnotTutorial from './components/KnotTutorial'
import InteractivePractice from './components/InteractivePractice'

const NavigationHeader = () => {
  const navigate = useNavigate()
  
  return (
    <Flex 
      w="100%" 
      py={4} 
      px={8} 
      bg="white" 
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Button
        leftIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        colorScheme="teal"
        variant="ghost"
      >
        Back to Home
      </Button>
    </Flex>
  )
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="gray.50">
          <NavigationHeader />
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
