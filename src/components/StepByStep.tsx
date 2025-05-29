import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Progress,
  HStack,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import MediaAsset from './MediaAsset'

const StepByStep = () => {
  const navigate = useNavigate()
  const { pattern } = useParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const tutorials = {
    spiral: {
      title: 'Spiral Staircase Pattern Tutorial',
      steps: [
        {
          title: 'Prepare Your Materials',
          content: 'You will need:\n- 4 strands of embroidery floss\n- Scissors\n- Tape or safety pin',
          image: 'images/spiral-materials.jpg',
          placeholderText: 'Materials needed for spiral pattern'
        },
        {
          title: 'Set Up Your Strings',
          content: 'Align your strings and secure them at the top. Leave about 2 inches of slack.',
          image: 'images/spiral-setup.jpg',
          placeholderText: 'Setting up strings for spiral pattern'
        },
        {
          title: 'Start the Pattern',
          content: 'Take your first string and create a forward knot (4) with the second string.',
          image: 'images/spiral-start.jpg',
          placeholderText: 'Starting the spiral pattern'
        }
      ]
    },
    chevron: {
      title: 'Chevron Pattern Tutorial',
      steps: [
        {
          title: 'Prepare Your Materials',
          content: 'You will need:\n- 6 strands of embroidery floss\n- Scissors\n- Tape or safety pin',
          image: 'images/chevron-materials.jpg',
          placeholderText: 'Materials needed for chevron pattern'
        },
        {
          title: 'Set Up Your Strings',
          content: 'Arrange your strings in your desired color order and secure them.',
          image: 'images/chevron-setup.jpg',
          placeholderText: 'Setting up strings for chevron pattern'
        },
        {
          title: 'Start the Pattern',
          content: 'Begin with forward knots (4) on the left side, then backward knots (P) on the right.',
          image: 'images/chevron-start.jpg',
          placeholderText: 'Starting the chevron pattern'
        }
      ]
    }
  }

  const tutorial = tutorials[pattern as keyof typeof tutorials]
  
  if (!tutorial) {
    return (
      <Container maxW="container.md" py={8}>
        <VStack spacing={4}>
          <Heading>Pattern Not Found</Heading>
          <Text>Please select a valid pattern to learn.</Text>
          <Button onClick={() => navigate('/')} colorScheme="teal">
            Return Home
          </Button>
        </VStack>
      </Container>
    )
  }

  const progress = (currentStep / tutorial.steps.length) * 100

  const handleNext = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep])
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    setCompletedSteps([...completedSteps, currentStep])
    navigate(`/practice/${pattern}`)
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center">{tutorial.title}</Heading>
        <Progress value={progress} colorScheme="teal" />
        
        <Box borderWidth={1} borderRadius="lg" p={6}>
          <VStack spacing={4} align="stretch">
            <Heading size="md">
              Step {currentStep + 1}: {tutorial.steps[currentStep].title}
            </Heading>
            
            <MediaAsset
              src={tutorial.steps[currentStep].image}
              alt={tutorial.steps[currentStep].title}
              placeholderText={tutorial.steps[currentStep].placeholderText}
              height="300px"
            />

            <Text whiteSpace="pre-line">{tutorial.steps[currentStep].content}</Text>

            <List spacing={2}>
              {tutorial.steps[currentStep].content.split('\n').map((line, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  {completedSteps.includes(currentStep) && (
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                  )}
                  <Text>{line}</Text>
                </ListItem>
              ))}
            </List>

            <HStack spacing={4} justify="space-between">
              <Button
                onClick={handlePrevious}
                isDisabled={currentStep === 0}
                colorScheme="teal"
                variant="outline"
              >
                Previous Step
              </Button>
              
              {currentStep === tutorial.steps.length - 1 ? (
                <Button onClick={handleComplete} colorScheme="teal">
                  Start Practice
                </Button>
              ) : (
                <Button onClick={handleNext} colorScheme="teal">
                  Next Step
                </Button>
              )}
            </HStack>
          </VStack>
        </Box>

        <Button variant="ghost" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </VStack>
    </Container>
  )
}

export default StepByStep 