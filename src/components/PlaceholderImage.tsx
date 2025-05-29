import { Box, Text } from '@chakra-ui/react'

interface PlaceholderImageProps {
  width: string
  height: string
  text: string
  bgColor?: string
  textColor?: string
}

const PlaceholderImage = ({
  width,
  height,
  text,
  bgColor = 'gray.800',
  textColor = 'whiteAlpha.900'
}: PlaceholderImageProps) => {
  return (
    <Box
      width={width}
      height={height}
      bg={bgColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="xl"
      p={4}
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Text
        color={textColor}
        fontSize="md"
        textAlign="center"
        whiteSpace="pre-wrap"
      >
        {text}
      </Text>
    </Box>
  )
}

export default PlaceholderImage 