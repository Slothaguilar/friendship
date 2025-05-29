import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Container,
  List,
  ListItem,
  ListIcon,
  Image,
  useColorModeValue,
  Flex,
  Spacer,
  Link,
  HStack,
  Button
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import PatternSelection from './PatternSelection'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const cardBg = useColorModeValue('gray.800', 'gray.700')
  const [currentView, setCurrentView] = useState<'about' | 'patterns'>('about')
  const navigate = useNavigate()

  const AboutContent = () => (
    <VStack spacing={6} align="stretch">
      <Box 
        p={6} 
        borderRadius="xl" 
        bg={cardBg}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        boxShadow="2xl"
      >
        <Heading 
          size="lg" 
          mb={4}
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
        >
          What is a Friendship Bracelet?
        </Heading>
        <Text color="whiteAlpha.900" fontSize="lg" mb={4}>
          A friendship bracelet is a handmade bracelet given as a token of friendship. These decorative bands are created by knotting colorful embroidery floss or string into patterns. The tradition began in Central and South America and has spread worldwide as a symbol of friendship and caring.
        </Text>
        <Box display="flex" justifyContent="center">
          <Image 
            src="https://troomi.com/wp-content/uploads/2023/08/nasim-keshmiri-El1M7wvTLrM-unsplash-1-scaled-1.jpg" 
            alt="Colorful friendship bracelets"
            borderRadius="xl"
            mb={4}
            maxWidth="600px"
            width="100%"
            height="auto"
            objectFit="contain"
            bg="gray.700"
            p={4}
          />
        </Box>
      </Box>

      <Box 
        p={6} 
        borderRadius="xl" 
        bg={cardBg}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        boxShadow="2xl"
      >
        <Heading 
          size="lg" 
          mb={4}
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
        >
          Why Make Friendship Bracelets?
        </Heading>
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Express creativity and personal style</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Create meaningful gifts for friends and loved ones</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Practice mindfulness and patience through crafting</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Build fine motor skills and concentration</Text>
          </ListItem>
        </List>
      </Box>

      <Box 
        p={6} 
        borderRadius="xl" 
        bg={cardBg}
        borderWidth="1px"
        borderColor="whiteAlpha.200"
        boxShadow="2xl"
      >
        <Heading 
          size="lg" 
          mb={4}
          bgGradient="linear(to-r, #7928CA, #FF0080)"
          bgClip="text"
        >
          When to Make Friendship Bracelets
        </Heading>
        <Text color="whiteAlpha.900" fontSize="lg" mb={4}>
          Friendship bracelets can be made anytime and anywhere! They're perfect for:
        </Text>
        <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Summer camps and sleepovers</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Birthday gifts and party activities</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Relaxing hobby during travel or downtime</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="#7928CA" />
            <Text color="whiteAlpha.900" fontSize="lg">Group activities for team building</Text>
          </ListItem>
        </List>
      </Box>
    </VStack>
  )

  return (
    <Flex direction="column" minH="100vh">
      {/* Navigation Bar */}
      <Box 
        as="nav" 
        bg={cardBg} 
        p={4} 
        borderBottom="1px" 
        borderColor="whiteAlpha.200"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="container.xl">
          <Flex align="center">
            <Link onClick={() => navigate('/')} _hover={{ textDecoration: 'none' }}>
              <Heading 
                size="md"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text"
              >
                Friendship Bracelet Guide
              </Heading>
            </Link>
            <Spacer />
            <HStack spacing={8}>
              <Button 
                variant="ghost" 
                onClick={() => setCurrentView('about')}
                _hover={{ color: "#FF0080", bg: "whiteAlpha.100" }}
                borderBottom={currentView === 'about' ? "4px solid #7928CA" : undefined}
                borderRadius={currentView === 'about' ? "2px" : undefined}
                color={currentView === 'about' ? "#FF0080" : "whiteAlpha.900"}
              >
                About
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setCurrentView('patterns')}
                _hover={{ color: "#FF0080", bg: "whiteAlpha.100" }}
                borderBottom={currentView === 'patterns' ? "4px solid #7928CA" : undefined}
                borderRadius={currentView === 'patterns' ? "2px" : undefined}
                color={currentView === 'patterns' ? "#FF0080" : "whiteAlpha.900"}
              >
                Patterns
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box flex="1" bg="#1a1a2e">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} w="100%">
            {currentView === 'about' && (
              <Heading 
                size="2xl" 
                textAlign="center"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text"
                letterSpacing="2px"
                mb={4}
              >
                Welcome to Friendship Bracelet Making
              </Heading>
            )}

            {currentView === 'about' ? <AboutContent /> : <PatternSelection />}
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        as="footer" 
        bg={cardBg} 
        p={4} 
        borderTop="1px" 
        borderColor="whiteAlpha.200"
        textAlign="center"
      >
        <Container maxW="container.xl">
          <Text color="whiteAlpha.700" fontSize="sm">
            © 2025 Friendship Bracelet Guide by Sofia Aguilar • Webpage generated by AI
          </Text>
        </Container>
      </Box>
    </Flex>
  )
}

export default Home 