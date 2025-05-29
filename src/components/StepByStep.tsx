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

interface Section {
  content: string;
  image: string;
  placeholderText: string;
}

interface Step {
  title: string;
  content?: string;
  image?: string;
  placeholderText?: string;
  sections?: Section[];
}

interface Tutorial {
  title: string;
  steps: Step[];
}

const StepByStep = () => {
  const navigate = useNavigate()
  const { pattern } = useParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const cardBg = useColorModeValue('gray.800', 'gray.700')

  const tutorials: Record<string, Tutorial> = {
    spiral: {
      title: 'Chinese Spiral Staircase Pattern Tutorial',
      steps: [
        {
          title: 'Prepare Your Materials',
          content: '4 strands of embroidery floss\nScissors\nTape or safety pin',
          image: 'https://content.instructables.com/FT0/W0LX/JNKL6CBP/FT0W0LXJNKL6CBP.jpg',
          placeholderText: 'Materials needed for spiral pattern'
        },
        {
          title: 'Set Up Your Strings',
          content: 'Choose your colors (3-8 color range good)\nCut the stings evenly\nTye a knot at the top and place tape to start',
          image: 'https://content.instructables.com/FU2/4C96/GVU6OEWE/FU24C96GVU6OEWE.jpg',
          placeholderText: 'Setting up strings for spiral pattern'
        },
        {
          title: 'Start the Pattern',
          sections: [
            {
              content: 'Take your first string that you want to start with and create a 4 shape over the other strings',
              image: 'https://content.instructables.com/FO1/TH2U/GVU6OEYC/FO1TH2UGVU6OEYC.jpg',
              placeholderText: 'Creating the 4 shape'
            },
            {
              content: 'Then tuck the end of the string under all of the strings to make a loop. Then pull the string through the loop you created to make a knot to the top.',
              image: 'https://content.instructables.com/FN8/J5V4/GVU6OEXG/FN8J5V4GVU6OEXG.jpg',
              placeholderText: 'Pulling through the loop'
            }
          ]
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
            
            {'sections' in tutorial.steps[currentStep] && tutorial.steps[currentStep].sections ? (
              <VStack spacing={2} align="stretch">
                {/* First Section */}
                <Text color="whiteAlpha.900" fontSize="lg" whiteSpace="pre-line">
                  {tutorial.steps[currentStep].sections[0].content}
                </Text>
                <Box borderRadius="xl" overflow="hidden" mb={2}>
                  <MediaAsset
                    src={tutorial.steps[currentStep].sections[0].image}
                    alt={tutorial.steps[currentStep].sections[0].content}
                    placeholderText={tutorial.steps[currentStep].sections[0].placeholderText}
                    height="300px"
                  />
                </Box>

                {/* Second Section */}
                <Text color="whiteAlpha.900" fontSize="lg" whiteSpace="pre-line">
                  {tutorial.steps[currentStep].sections[1].content}
                </Text>
                <Box 
                  borderRadius="xl" 
                  overflow="hidden" 
                  mt={0} 
                  height="400px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  maxW="100%"
                >
                  <MediaAsset
                    src={tutorial.steps[currentStep].sections[1].image}
                    alt={tutorial.steps[currentStep].sections[1].content}
                    placeholderText={tutorial.steps[currentStep].sections[1].placeholderText}
                    height="400px"
                  />
                </Box>
              </VStack>
            ) : (
              <>
                <Box borderRadius="xl" overflow="hidden">
                  <MediaAsset
                    src={tutorial.steps[currentStep].image || ''}
                    alt={tutorial.steps[currentStep].title}
                    placeholderText={tutorial.steps[currentStep].placeholderText || ''}
                    height="300px"
                  />
                </Box>

                {tutorial.steps[currentStep].content && (
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
                )}
              </>
            )}

            <HStack spacing={4} justify={currentStep === 0 ? "flex-end" : "space-between"}>
              {currentStep > 0 && (
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Previous Step
                </Button>
              )}
              
              {currentStep === tutorial.steps.length - 1 ? (
                <Button 
                  onClick={() => navigate('/')}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Watch Video & Complete
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