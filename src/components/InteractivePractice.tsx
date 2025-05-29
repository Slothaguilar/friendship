import { Box, Container, VStack, Heading, Text, Button, Progress } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import MediaAsset from './MediaAsset'

const InteractivePractice = () => {
  const navigate = useNavigate()
  const { pattern } = useParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)

  // Practice steps for each pattern
  const practiceContent = {
    spiral: [
      {
        instruction: 'Create a forward knot with the first string',
        videoUrl: 'videos/spiral-practice1.mp4',
        placeholderText: 'Video: Forward knot practice for spiral pattern'
      },
      {
        instruction: 'Repeat the forward knot with the same string',
        videoUrl: 'videos/spiral-practice2.mp4',
        placeholderText: 'Video: Continuing the spiral pattern'
      }
    ],
    chevron: [
      {
        instruction: 'Create forward knots with the first two strings',
        videoUrl: 'videos/chevron-practice1.mp4',
        placeholderText: 'Video: Forward knots practice for chevron pattern'
      },
      {
        instruction: 'Create backward knots with the next two strings',
        videoUrl: 'videos/chevron-practice2.mp4',
        placeholderText: 'Video: Backward knots practice for chevron pattern'
      }
    ]
  }

  const steps = practiceContent[pattern as keyof typeof practiceContent] || []
  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setScore(score + 10) // Simple scoring system
    }
  }

  if (!steps.length) {
    return (
      <Container maxW="container.md" py={8}>
        <VStack spacing={4}>
          <Heading>Invalid Pattern</Heading>
          <Text>Please select a valid pattern to practice.</Text>
          <Button onClick={() => navigate('/')} colorScheme="teal">
            Return Home
          </Button>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading>Practice Mode</Heading>
        <Progress value={progress} width="100%" colorScheme="teal" />
        <Text>Current Score: {score}</Text>

        <Box width="100%" borderRadius="md" overflow="hidden">
          <MediaAsset
            src={steps[currentStep].videoUrl}
            alt="Practice demonstration"
            type="video"
            aspectRatio={16/9}
            placeholderText={steps[currentStep].placeholderText}
          />
        </Box>

        <Text fontSize="xl" fontWeight="bold">
          {steps[currentStep].instruction}
        </Text>

        <Button
          colorScheme="teal"
          onClick={handleNext}
          isDisabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? 'Complete!' : 'Next Step'}
        </Button>

        <Button variant="ghost" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </VStack>
    </Container>
  )
}

export default InteractivePractice 