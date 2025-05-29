import { Box, Heading, SimpleGrid, VStack, Text, Button, useColorModeValue, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MediaAsset from './MediaAsset'

const PatternSelection = () => {
  const navigate = useNavigate()
  const cardBg = useColorModeValue('gray.800', 'gray.700')

  const patterns = [
    {
      title: 'Chinese Spiral Staircase',
      description: 'A beautiful spiral pattern perfect for beginners. Learn the forward knot to create this classic design.',
      image: 'images/spiral-bracelet.jpg',
      placeholderText: '',
      path: 'spiral'
    },
    {
      title: 'Candy Stripe Pattern',
      description: 'Create a classic candy stripe pattern using forward knots in sequence.',
      image: 'https://i.pinimg.com/736x/33/af/86/33af866fe9d8997981f41b33094b51dc.jpg',
      placeholderText: 'Candy stripe pattern bracelet\nMade with forward knots in sequence\nCreates a diagonal striped design',
      path: 'candy'
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