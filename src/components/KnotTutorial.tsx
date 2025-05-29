import { Box, VStack, Heading, Text, Button, Container, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import MediaAsset from './MediaAsset'

const KnotTutorial = () => {
  const navigate = useNavigate()
  const { type: paramType } = useParams()
  const knotType = paramType

  const tutorials = {
    forward: {
      title: 'Forward Knot (4)',
      steps: [
        {
          title: 'Position Your Strings',
          content: 'Hold the left string (working string) in your left hand and the right string in your right hand.',
          videoUrl: 'videos/forward-knot-step1.mp4',
          placeholderText: 'Video: Positioning strings for forward knot'
        },
        {
          title: 'Create the Loop',
          content: 'Take the working string (left) and create a forward-facing loop over the right string.',
          videoUrl: 'videos/forward-knot-step2.mp4',
          placeholderText: 'Video: Creating the forward knot loop'
        },
        {
          title: 'Pull Through',
          content: 'Pull the working string through the loop and tighten.',
          videoUrl: 'videos/forward-knot-step3.mp4',
          placeholderText: 'Video: Completing the forward knot'
        }
      ]
    },
    backward: {
      title: 'Backward Knot (P)',
      steps: [
        {
          title: 'Position Your Strings',
          content: 'Hold the right string (working string) in your right hand and the left string in your left hand.',
          videoUrl: 'videos/backward-knot-step1.mp4',
          placeholderText: 'Video: Positioning strings for backward knot'
        },
        {
          title: 'Create the Loop',
          content: 'Take the working string (right) and create a backward-facing loop over the left string.',
          videoUrl: 'videos/backward-knot-step2.mp4',
          placeholderText: 'Video: Creating the backward knot loop'
        },
        {
          title: 'Pull Through',
          content: 'Pull the working string through the loop and tighten.',
          videoUrl: 'videos/backward-knot-step3.mp4',
          placeholderText: 'Video: Completing the backward knot'
        }
      ]
    }
  }

  const tutorial = tutorials[knotType as keyof typeof tutorials]

  if (!tutorial) {
    return (
      <Container maxW="container.md" py={8}>
        <VStack spacing={4} align="stretch">
          <Heading>Invalid Knot Type</Heading>
          <Text>Please select a valid knot type to learn.</Text>
          <Button onClick={() => navigate('/')} colorScheme="teal">
            Return Home
          </Button>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          {tutorial.title}
        </Heading>

        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            {tutorial.steps.map((_, index) => (
              <Tab key={index}>Step {index + 1}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {tutorial.steps.map((step, index) => (
              <TabPanel key={index}>
                <VStack spacing={4} align="stretch">
                  <Heading as="h2" size="lg">
                    {step.title}
                  </Heading>
                  <Text>{step.content}</Text>
                  <Box borderRadius="md" overflow="hidden">
                    <MediaAsset
                      src={step.videoUrl}
                      alt={`${step.title} demonstration`}
                      type="video"
                      aspectRatio={16/9}
                      placeholderText={step.placeholderText}
                    />
                  </Box>
                </VStack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        <Button onClick={() => navigate('/')} colorScheme="teal">
          Back to Home
        </Button>
      </VStack>
    </Container>
  )
}

export default KnotTutorial 