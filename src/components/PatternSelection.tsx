import { Box, Heading, SimpleGrid, VStack, Text, Button, Image, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import PlaceholderImage from './PlaceholderImage'

const PatternSelection = () => {
  const navigate = useNavigate()
  const cardBg = useColorModeValue('white', 'gray.700')

  const patterns = [
    {
      title: 'Chinese Spiral Staircase / Candy Stripe',
      description: 'A beautiful spiral pattern perfect for beginners. Learn the forward knot to create this classic design.',
      image: '/images/spiral-preview.jpg',
      placeholderText: 'Spiral Staircase Pattern\nA simple twisted pattern created using forward knots',
      path: 'spiral'
    },
    {
      title: 'Chevron Pattern',
      description: 'Create stunning zigzag patterns using forward and backward knots. A step up in complexity with amazing results!',
      image: '/images/chevron-preview.jpg',
      placeholderText: 'Chevron Pattern\nA V-shaped pattern created using forward and backward knots',
      path: 'chevron'
    }
  ]

  return (
    <VStack spacing={8} align="stretch">
      <Box textAlign="center" py={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Friendship Bracelet Making!
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Choose a pattern to begin your bracelet-making journey
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {patterns.map((pattern) => (
          <Box
            key={pattern.path}
            bg={cardBg}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
          >
            <VStack spacing={4} align="stretch">
              <Box borderRadius="md" overflow="hidden">
                <Image
                  src={pattern.image}
                  alt={pattern.title}
                  w="100%"
                  h="200px"
                  objectFit="cover"
                  fallback={
                    <PlaceholderImage
                      width="100%"
                      height="200px"
                      text={pattern.placeholderText}
                    />
                  }
                />
              </Box>
              <Heading as="h3" size="lg">
                {pattern.title}
              </Heading>
              <Text color="gray.600">{pattern.description}</Text>
              <Button
                colorScheme="teal"
                size="lg"
                onClick={() => navigate(`/tutorial/${pattern.path}`)}
              >
                Start Learning
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default PatternSelection 