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
          image: 'images/materials.jpg',
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
        },
        {
          title: 'Continue the Pattern',
          sections: [
            {
              content: 'Keep using the same string to make knots\nMake sure each knot is tight and even\nThe working string will naturally spiral around the other strings\nMake 5 knots with each color string before moving to the next color',
              image: 'https://content.instructables.com/FS6/4KC7/GVU6OEXK/FS64KC7GVU6OEXK.jpg?auto=webp&frame=1&width=933&height=1024&fit=bounds&md=MjAxMy0xMi0xNSAyMjo0MTo1OS4w',
              placeholderText: 'Continuing the spiral pattern'
            },
            {
              content: 'After making 5 knots with one color, switch to the next string\nRepeat the pattern with each string to create this spiral effect\nThe final pattern will look like this with clear color transitions\nContinue until you reach your desired length',
              image: 'https://i.etsystatic.com/26792272/r/il/16ed69/5676132185/il_fullxfull.5676132185_dfmr.jpg',
              placeholderText: 'Final spiral pattern appearance'
            }
          ]
        }
      ]
    },
    candy: {
      title: 'Candy Stripe Pattern Tutorial',
      steps: [
        {
          title: 'Prepare Your Materials',
          content: '4-6 strands of embroidery floss\nScissors\nTape or clipboard',
          image: 'https://content.instructables.com/FT0/W0LX/JNKL6CBP/FT0W0LXJNKL6CBP.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAxOC-xMC0yMiAxMTowMToxMC4w',
          placeholderText: 'Materials needed for candy stripe pattern'
        },
        {
          title: 'Set Up Your Strings',
          content: 'Choose 4-6 colors for your pattern\nCut strings to equal lengths (24-36 inches)\nTie all strings together at one end\nSeparate the strings evenly\nSecure with tape or clip',
          image: 'https://content.instructables.com/FDU/TGJQ/JNKL6CDD/FDUTGJQJNKL6CDD.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=MjAxOC-xMC0yMiAxMTowMTozMC4w',
          placeholderText: 'Setting up strings for candy stripe'
        },
        {
          title: 'Start the Pattern',
          sections: [
            {
              content: 'Take the leftmost string and create forward knots across all strings to the right',
              image: 'https://content.instructables.com/F3D/OXJK/JNKL6ICX/F3DOXJKJNKL6ICX.jpg?auto=webp&frame=1&width=933&height=1024&fit=bounds&md=MjAxOC-xMC0yMiAxMjoxMDoyNi4w',
              placeholderText: 'Creating forward knots'
            },
            {
              content: 'Then make a loop and tighten the knot. Do this 2 times.',
              image: 'https://content.instructables.com/FKA/5UHF/JNKL6IEA/FKA5UHFJNKL6IEA.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=MjAxOC-xMC0yMiAxMjoxMDozMC4w',
              placeholderText: 'Making the loop and tightening'
            },
            {
              content: 'Keep your knots consistent and even.',
              image: 'https://content.instructables.com/FVC/YG0C/JNKL6IFK/FVCYG0CJNKL6IFK.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=MjAxOC0xMC0yMiAxMjoxMDozNy4w',
              placeholderText: 'Keeping knots consistent'
            }
          ]
        },
        {
          title: 'Complete the Pattern',
          sections: [
            {
              content: 'Make 2 knots (double knot) with each string before moving to the next string\nOnce you reach the end of the row, start with the next color on the left\nKeep tension consistent for even knots\nContinue this pattern row by row until you reach your desired length',
              image: 'https://content.instructables.com/FEG/V1L7/JNKL6IFY/FEGV1L7JNKL6IFY.jpg?auto=webp&frame=1&width=600&fit=bounds&md=MjAxOC0xMC0yMiAxMjoxMDo0My4w',
              placeholderText: 'Making double knots in candy stripe pattern'
            },
            {
              content: 'Your finished candy stripe pattern should look like this\nNotice the clean diagonal lines and consistent knot spacing\nThe pattern should show clear color transitions and even tension throughout',
              image: 'https://content.instructables.com/FVF/A5PC/JNKL7QUD/FVFA5PCJNKL7QUD.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=MjAxOC0xMC0yMiAxODo0MDoxMC4w',
              placeholderText: 'Final candy stripe pattern result'
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
          onClick={() => navigate('/', { state: { view: 'patterns' } })}
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
                {tutorial.steps[currentStep].sections.map((section, index) => (
                  <Box key={index}>
                    <Text color="whiteAlpha.900" fontSize="lg" whiteSpace="pre-line">
                      {section.content}
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
                      mb={4}
                    >
                      <MediaAsset
                        src={section.image}
                        alt={section.content}
                        placeholderText={section.placeholderText}
                        height="400px"
                      />
                    </Box>
                  </Box>
                ))}
              </VStack>
            ) : (
              <>
                <Box 
                  borderRadius="xl" 
                  overflow="hidden"
                  height="400px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <MediaAsset
                    src={tutorial.steps[currentStep].image || ''}
                    alt={tutorial.steps[currentStep].title}
                    placeholderText={tutorial.steps[currentStep].placeholderText || ''}
                    height="100%"
                    width="100%"
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
                  onClick={() => navigate('/', { state: { view: 'patterns' } })}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Complete Tutorial
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