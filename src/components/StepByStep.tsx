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
  ListIcon,
  useColorModeValue
} from '@chakra-ui/react'
import { CheckCircleIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import MediaAsset from './MediaAsset'

const StepByStep = () => {
  const navigate = useNavigate()
  const { pattern } = useParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const cardBg = useColorModeValue('gray.800', 'gray.700')

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
          <Heading 
            bgGradient="linear(to-r, #7928CA, #FF0080)"
            bgClip="text"
          >
            Pattern Not Found
          </Heading>
          <Text color="whiteAlpha.900">Please select a valid pattern to learn.</Text>
          <Button 
            leftIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
          >
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
        <Button
          leftIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          variant="ghost"
          alignSelf="flex-start"
          color="whiteAlpha.900"
          _hover={{ bg: 'whiteAlpha.200' }}
        >
          Back to Patterns
        </Button>
        
        <Heading 
          textAlign="center"
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
          letterSpacing="2px"
        >
          {tutorial.title}
        </Heading>
        
        <Progress 
          value={progress} 
          colorScheme="purple"
          bg="whiteAlpha.200"
          borderRadius="xl"
        />
        
        <Box 
          borderWidth={1} 
          borderRadius="xl" 
          p={6}
          bg={cardBg}
          borderColor="whiteAlpha.200"
          boxShadow="2xl"
        >
          <VStack spacing={4} align="stretch">
            <Heading 
              size="md"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              bgClip="text"
            >
              Step {currentStep + 1}: {tutorial.steps[currentStep].title}
            </Heading>
            
            <Box borderRadius="xl" overflow="hidden">
              <MediaAsset
                src={tutorial.steps[currentStep].image}
                alt={tutorial.steps[currentStep].title}
                placeholderText={tutorial.steps[currentStep].placeholderText}
                height="300px"
              />
            </Box>

            <Text color="whiteAlpha.900" fontSize="lg" whiteSpace="pre-line">
              {tutorial.steps[currentStep].content}
            </Text>

            <List spacing={2}>
              {tutorial.steps[currentStep].content.split('\n').map((line, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  {completedSteps.includes(currentStep) && (
                    <ListIcon as={CheckCircleIcon} color="#7928CA" />
                  )}
                  <Text color="whiteAlpha.900">{line}</Text>
                </ListItem>
              ))}
            </List>

            <HStack spacing={4} justify="space-between">
              <Button
                onClick={handlePrevious}
                isDisabled={currentStep === 0}
                variant="outline"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Previous Step
              </Button>
              
              {currentStep === tutorial.steps.length - 1 ? (
                <Button 
                  onClick={handleComplete}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Start Practice
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Next Step
                </Button>
              )}
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default StepByStep 