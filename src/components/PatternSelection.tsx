import { Box, Heading, SimpleGrid, VStack, Text, Button, useColorModeValue, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MediaAsset from './MediaAsset'

const PatternSelection = () => {
  const navigate = useNavigate()
  const cardBg = useColorModeValue('gray.800', 'gray.700')

  const patterns = [
    {
      title: 'Chinese Spiral Staircase / Candy Stripe',
      description: 'A beautiful spiral pattern perfect for beginners. Learn the forward knot to create this classic design.',
      image: 'images/spiral-bracelet.jpg',
      placeholderText: '',
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
    <VStack spacing={8} w="100%" p={8} bg="#1a1a2e">
      <Heading 
        size="2xl" 
        textAlign="center"
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        bgClip="text"
        letterSpacing="2px"
        mb={4}
      >
        Choose Your Pattern
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
        {patterns.map((pattern) => (
          <Box
            key={pattern.path}
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="2xl"
            _hover={{ transform: 'scale(1.02)', transition: '0.2s' }}
            border="1px solid"
            borderColor="whiteAlpha.200"
          >
            <VStack spacing={4} align="stretch">
              {pattern.path === 'spiral' ? (
                <Box height="250px" position="relative" overflow="hidden" borderRadius="xl">
                  <Image
                    src={pattern.image}
                    alt={pattern.title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  />
                </Box>
              ) : (
                <MediaAsset
                  src={pattern.image}
                  alt={pattern.title}
                  width="100%"
                  height="250px"
                  placeholderText={pattern.placeholderText}
                />
              )}
              <Heading 
                size="lg" 
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text"
              >
                {pattern.title}
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.900">{pattern.description}</Text>
              <Button
                size="lg"
                onClick={() => navigate(`/tutorial/${pattern.path}`)}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
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