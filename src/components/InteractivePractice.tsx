import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Image,
  Progress
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

interface PracticeStep {
  instruction: string
  correctMove: string
  image: string
}

const practicePatterns = {
  spiral: {
    title: 'Spiral Staircase Practice',
    steps: [
      {
        instruction: 'Take the leftmost string and cross it over the second string',
        correctMove: 'forward',
        image: '/spiral-practice-1.jpg'
      },
      {
        instruction: 'Complete the forward knot by bringing the working string through the loop',
        correctMove: 'forward',
        image: '/spiral-practice-2.jpg'
      },
      {
        instruction: 'Move to the next string and create another forward knot',
        correctMove: 'forward',
        image: '/spiral-practice-3.jpg'
      }
    ]
  },
  chevron: {
    title: 'Chevron Pattern Practice',
    steps: [
      {
        instruction: 'Starting from the left, make a forward knot with the first two strings',
        correctMove: 'forward',
        image: '/chevron-practice-1.jpg'
      },
      {
        instruction: 'From the right side, make a backward knot with the last two strings',
        correctMove: 'backward',
        image: '/chevron-practice-2.jpg'
      },
      {
        instruction: 'Continue with forward knots on the left side',
        correctMove: 'forward',
        image: '/chevron-practice-3.jpg'
      }
    ]
  }
}

const InteractivePractice = () => {
  const { pattern } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)

  const practice = pattern ? practicePatterns[pattern as keyof typeof practicePatterns] : null
  
  if (!practice) {
    return <Box>Practice pattern not found</Box>
  }

  const handleMove = (move: string) => {
    const currentPractice = practice.steps[currentStep]
    if (move === currentPractice.correctMove) {
      setScore(score + 1)
    }
    
    if (currentStep < practice.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Practice completed
      const finalScore = score + (move === currentPractice.correctMove ? 1 : 0)
      alert(`Practice completed! Score: ${finalScore}/${practice.steps.length}`)
    }
  }

  const progress = ((currentStep + 1) / practice.steps.length) * 100

  return (
    <Container maxW="container.lg">
      <Stack spacing={8}>
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={() => navigate(-1)}
          alignSelf="flex-start"
        >
          Back to Tutorial
        </Button>

        <Heading>{practice.title}</Heading>

        <Progress value={progress} size="sm" colorScheme="teal" />

        <Box p={6} borderWidth={1} borderRadius="lg">
          <Stack spacing={6}>
            <Text fontSize="xl">
              Step {currentStep + 1}: {practice.steps[currentStep].instruction}
            </Text>

            <Box>
              <Image
                src={practice.steps[currentStep].image}
                alt={`Practice step ${currentStep + 1}`}
                fallbackSrc="https://via.placeholder.com/400x300?text=Practice+Step"
              />
            </Box>

            <HStack spacing={4} justify="center">
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => handleMove('forward')}
              >
                Forward Knot (4)
              </Button>
              <Button
                colorScheme="purple"
                size="lg"
                onClick={() => handleMove('backward')}
              >
                Backward Knot (P)
              </Button>
            </HStack>

            <Text textAlign="center" fontSize="lg">
              Score: {score}/{practice.steps.length}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default InteractivePractice 