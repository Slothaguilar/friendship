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
  bgColor = 'gray.100',
  textColor = 'gray.600'
}: PlaceholderImageProps) => {
  return (
    <Box
      width={width}
      height={height}
      bg={bgColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      p={4}
    >
      <Text
        color={textColor}
        fontSize="sm"
        textAlign="center"
        whiteSpace="pre-wrap"
      >
        {text}
      </Text>
    </Box>
  )
}

export default PlaceholderImage 