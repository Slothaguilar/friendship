import { Box, Heading, SimpleGrid, VStack, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MediaAsset from './MediaAsset'

const PatternSelection = () => {
  const navigate = useNavigate()
  const cardBg = useColorModeValue('white', 'gray.700')

  const patterns = [
    {
      title: 'Chinese Spiral Staircase / Candy Stripe',
      description: 'A beautiful spiral pattern perfect for beginners. Learn the forward knot to create this classic design.',
      image: '',
      placeholderText: 'Spiral Staircase Pattern\nA twisted rope pattern that creates a beautiful spiral effect\nPerfect for beginners - uses only forward knots\nMade with 4 strands of embroidery floss',
      path: 'spiral'
    },
    {
      title: 'Chevron Pattern',
      description: 'Create stunning zigzag patterns using forward and backward knots.',
      image: 'images/chevron-preview.jpg',
      placeholderText: 'Chevron pattern bracelet\nMade with alternating forward and backward knots\nCreates a beautiful V-shaped design',
      path: 'chevron'
    }
  ]

  return (
    <VStack spacing={8} w="100%">
      <Heading size="xl" textAlign="center">
        Choose Your Pattern
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
        {patterns.map((pattern) => (
          <Box
            key={pattern.path}
            bg={cardBg}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
          >
            <VStack spacing={4} align="stretch">
              <MediaAsset
                src={pattern.image}
                alt={pattern.title}
                width="100%"
                height="200px"
                placeholderText={pattern.placeholderText}
              />
              <Heading size="md">{pattern.title}</Heading>
              <Text>{pattern.description}</Text>
              <Button
                colorScheme="teal"
                onClick={() => navigate(`/tutorial/${pattern.path}`)}
              >
                Start Tutorial
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default PatternSelection 