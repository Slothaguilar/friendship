import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Button,
  Progress,
  Image,
  useColorModeValue,
  Container,
  Divider,
  Icon,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from '@chakra-ui/icons'
import PlaceholderImage from './PlaceholderImage'

const tutorialSteps = {
  spiral: [
    {
      title: 'Gather Your Materials',
      content: 'You will need:\n- 4 strands of embroidery floss (2-3 colors)\n- Scissors\n- Tape or safety pin\n- Measuring tape or ruler',
      image: '/images/materials.jpg',
      placeholderText: 'Materials needed:\n- Embroidery floss\n- Scissors\n- Tape/safety pin\n- Measuring tape'
    },
    {
      title: 'Prepare Your Strings',
      content: 'Cut 4 strings, each 24 inches long. Align them evenly and tie them together at the top with an overhand knot, leaving about 2 inches of slack.',
      image: '/images/string-prep.jpg',
      placeholderText: 'String preparation:\nCut 4 strings 24 inches long\nTie them together with a knot'
    },
    {
      title: 'Secure Your Work',
      content: 'Tape the knotted end to a flat surface or pin it to a clipboard. Arrange your strings in your desired color order from left to right.',
      image: '/images/secure-work.jpg',
      placeholderText: 'Securing the work:\nTape or pin the knotted end\nArrange strings in color order'
    },
    {
      title: 'Learn the Forward Knot',
      content: 'The forward knot (4 knot) is the foundation of the spiral pattern. Click "Practice Knot" to learn this essential technique.',
      image: '/images/forward-knot.jpg',
      placeholderText: 'Forward Knot Tutorial:\nCreate a "4" shape\nLoop under and through\nPull tight',
      hasKnotTutorial: true,
      knotType: 'forward'
    },
    {
      title: 'Start the Pattern',
      content: 'Take the leftmost string and make forward knots over each string to the right. This string will travel across all other strings.',
      image: '/images/start-pattern.jpg',
      placeholderText: 'Starting the pattern:\nUse leftmost string\nMake forward knots across'
    },
    {
      title: 'Continue the Pattern',
      content: 'The new leftmost string becomes your working string. Repeat the process, making forward knots across all strings to the right.',
      image: '/images/continue-pattern.jpg',
      placeholderText: 'Continuing the pattern:\nUse new leftmost string\nRepeat forward knots'
    }
  ],
  chevron: [
    {
      title: 'Gather Your Materials',
      content: 'You will need:\n- 6 strands of embroidery floss (2-3 colors)\n- Scissors\n- Tape or safety pin\n- Measuring tape or ruler',
      image: '/images/materials-chevron.jpg',
      placeholderText: 'Materials needed:\n- 6 strands of floss\n- Scissors\n- Tape/safety pin\n- Measuring tape'
    },
    {
      title: 'Prepare Your Strings',
      content: 'Cut 6 strings, each 30 inches long. Align them evenly and tie them together at the top with an overhand knot, leaving about 2 inches of slack.',
      image: '/images/string-prep-chevron.jpg',
      placeholderText: 'String preparation:\nCut 6 strings 30 inches long\nTie them together with a knot'
    },
    {
      title: 'Arrange Your Colors',
      content: 'Arrange strings symmetrically from outside to center. For example: color1, color2, color3, color3, color2, color1',
      image: '/images/arrange-colors.jpg',
      placeholderText: 'Color arrangement:\nSymmetrical pattern\nOutside to center'
    },
    {
      title: 'Learn the Knots',
      content: "For chevron, you'll need both forward (4) and backward (P) knots. Click \"Practice Knots\" to learn both techniques.",
      image: '/images/both-knots.jpg',
      placeholderText: 'Knot techniques:\nForward knot (4)\nBackward knot (P)',
      hasKnotTutorial: true,
      knotType: 'both'
    },
    {
      title: 'Start Left Side',
      content: 'Starting from the leftmost string, make forward knots moving toward the center. Stop at the middle strings.',
      image: '/images/left-side.jpg',
      placeholderText: 'Left side pattern:\nForward knots\nToward center'
    },
    {
      title: 'Complete Right Side',
      content: 'Starting from the rightmost string, make backward knots moving toward the center. This creates the V shape.',
      image: '/images/right-side.jpg',
      placeholderText: 'Right side pattern:\nBackward knots\nToward center'
    }
  ]
}

const StepByStep = () => {
  const { pattern } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const steps = pattern ? tutorialSteps[pattern as keyof typeof tutorialSteps] : []
  const cardBg = useColorModeValue('white', 'gray.700')

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePracticeKnot = () => {
    const step = steps[currentStep]
    if (step.hasKnotTutorial) {
      navigate(`/knots/${step.knotType}`)
    }
  }

  if (!pattern || !steps.length) {
    return <Box>Pattern not found</Box>
  }

  return (
    <Container maxW="container.lg">
      <VStack spacing={6} align="stretch">
        <Progress value={progress} size="sm" colorScheme="teal" borderRadius="full" />
        
        <HStack justify="space-between">
          <Text color="gray.600">
            Step {currentStep + 1} of {steps.length}
          </Text>
          <Text color="gray.600">{Math.round(progress)}% Complete</Text>
        </HStack>

        <Box bg={cardBg} p={6} borderRadius="lg" boxShadow="md">
          <VStack spacing={6} align="stretch">
            <Heading size="lg">{steps[currentStep].title}</Heading>
            
            <Box borderRadius="md" overflow="hidden">
              <Image
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                w="100%"
                h="300px"
                objectFit="cover"
                fallback={
                  <PlaceholderImage
                    width="100%"
                    height="300px"
                    text={steps[currentStep].placeholderText}
                  />
                }
              />
            </Box>

            <List spacing={3}>
              {steps[currentStep].content.split('\n').map((line, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={CheckCircleIcon} color="teal.500" />
                  <Text>{line}</Text>
                </ListItem>
              ))}
            </List>

            {steps[currentStep].hasKnotTutorial && (
              <Button
                colorScheme="purple"
                size="lg"
                onClick={handlePracticeKnot}
                leftIcon={<CheckCircleIcon />}
              >
                Practice Knot
              </Button>
            )}
          </VStack>
        </Box>

        <HStack justify="space-between" pt={4}>
          <Button
            leftIcon={<ChevronLeftIcon />}
            onClick={handlePrevious}
            isDisabled={currentStep === 0}
          >
            Previous Step
          </Button>
          <Button
            rightIcon={<ChevronRightIcon />}
            onClick={handleNext}
            isDisabled={currentStep === steps.length - 1}
            colorScheme="teal"
          >
            Next Step
          </Button>
        </HStack>
      </VStack>
    </Container>
  )
}

export default StepByStep 