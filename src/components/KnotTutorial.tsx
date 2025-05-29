import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  AspectRatio,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import PlaceholderImage from './PlaceholderImage'

const knotTutorials = {
  forward: {
    title: 'Forward Knot (4)',
    steps: [
      {
        title: 'Position Your Strings',
        content: 'Hold the left string (working string) in your left hand and the right string in your right hand.',
        videoUrl: '/videos/forward-knot-step1.mp4',
        placeholderText: 'Video: Positioning strings\nLeft string in left hand\nRight string in right hand'
      },
      {
        title: 'Create the "4" Shape',
        content: 'Cross the working string over the right string to form a "4" shape.',
        videoUrl: '/videos/forward-knot-step2.mp4',
        placeholderText: 'Video: Creating "4" shape\nCross working string over\nForm number 4 shape'
      },
      {
        title: 'Complete the Knot',
        content: 'Bring the working string behind and through the loop, then pull both strings to tighten.',
        videoUrl: '/videos/forward-knot-step3.mp4',
        placeholderText: 'Video: Completing knot\nBring string through loop\nPull to tighten'
      }
    ]
  },
  backward: {
    title: 'Backward Knot (P)',
    steps: [
      {
        title: 'Position Your Strings',
        content: 'Hold the right string (working string) in your right hand and the left string in your left hand.',
        videoUrl: '/videos/backward-knot-step1.mp4',
        placeholderText: 'Video: Positioning strings\nRight string in right hand\nLeft string in left hand'
      },
      {
        title: 'Create the "P" Shape',
        content: 'Cross the working string over the left string to form a "P" shape.',
        videoUrl: '/videos/backward-knot-step2.mp4',
        placeholderText: 'Video: Creating "P" shape\nCross working string over\nForm letter P shape'
      },
      {
        title: 'Complete the Knot',
        content: 'Bring the working string behind and through the loop, then pull both strings to tighten.',
        videoUrl: '/videos/backward-knot-step3.mp4',
        placeholderText: 'Video: Completing knot\nBring string through loop\nPull to tighten'
      }
    ]
  }
}

const KnotTutorial = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)

  const tutorials = type === 'both' 
    ? [knotTutorials.forward, knotTutorials.backward]
    : type === 'forward' 
      ? [knotTutorials.forward]
      : type === 'backward'
        ? [knotTutorials.backward]
        : []

  if (!tutorials.length) {
    return <Box>Tutorial not found</Box>
  }

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} align="stretch">
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={() => navigate(-1)}
          alignSelf="flex-start"
        >
          Back to Tutorial
        </Button>

        <Tabs isFitted variant="enclosed">
          <TabList>
            {tutorials.map((tutorial, index) => (
              <Tab key={index}>{tutorial.title}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {tutorials.map((tutorial, tutorialIndex) => (
              <TabPanel key={tutorialIndex}>
                <VStack spacing={6} align="stretch">
                  <Heading size="lg">{tutorial.title}</Heading>

                  {tutorial.steps.map((step, stepIndex) => (
                    <Box
                      key={stepIndex}
                      p={6}
                      borderWidth={1}
                      borderRadius="lg"
                      borderColor={currentStep === stepIndex ? "teal.500" : "gray.200"}
                    >
                      <VStack spacing={4} align="stretch">
                        <Heading size="md">
                          Step {stepIndex + 1}: {step.title}
                        </Heading>
                        
                        <Text>{step.content}</Text>
                        
                        <AspectRatio ratio={16 / 9}>
                          <Box
                            as="video"
                            controls
                            src={step.videoUrl}
                            borderRadius="md"
                            fallback={
                              <PlaceholderImage
                                width="100%"
                                height="100%"
                                text={step.placeholderText}
                              />
                            }
                          />
                        </AspectRatio>

                        <HStack spacing={4} justify="space-between">
                          <Button
                            onClick={() => setCurrentStep(stepIndex)}
                            colorScheme={currentStep === stepIndex ? "teal" : "gray"}
                            variant={currentStep === stepIndex ? "solid" : "outline"}
                          >
                            Practice This Step
                          </Button>
                        </HStack>
                      </VStack>
                    </Box>
                  ))}
                </VStack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  )
}

export default KnotTutorial 