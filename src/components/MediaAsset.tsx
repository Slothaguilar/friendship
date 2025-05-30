import { Box, Image, AspectRatio, Text } from '@chakra-ui/react'
import PlaceholderImage from './PlaceholderImage'
import { useState } from 'react'

interface MediaAssetProps {
  src: string
  alt: string
  type?: 'image' | 'video'
  width?: string
  height?: string
  aspectRatio?: number
  placeholderText?: string
}

const MediaAsset = ({
  src,
  alt,
  type = 'image',
  width = '100%',
  height = 'auto',
  aspectRatio,
  placeholderText
}: MediaAssetProps) => {
  const [hasError, setHasError] = useState(false)

  // Check if the source is a URL or a local file
  const isExternalUrl = src.startsWith('http')
  const assetPath = isExternalUrl ? src : src.startsWith('/') ? src : `/${src}`

  // Handle loading errors
  const handleError = (e: React.SyntheticEvent<HTMLImageElement | HTMLVideoElement, Event>) => {
    console.error(`Error loading ${type}:`, e)
    setHasError(true)
  }

  const mediaContent = type === 'video' ? (
    <AspectRatio ratio={aspectRatio || 16 / 9}>
      <video
        controls
        preload="metadata"
        onError={handleError}
      >
        <source src={assetPath} type="video/mp4" />
        <Text>Your browser does not support the video tag.</Text>
      </video>
    </AspectRatio>
  ) : hasError ? (
    <PlaceholderImage
      width={width}
      height={height}
      text={`Unable to load ${alt}\nPath: ${assetPath}`}
    />
  ) : (
    <Image
      src={assetPath}
      alt={alt}
      width="100%"
      height="100%"
      objectFit="contain"
      onError={handleError}
      borderRadius="xl"
    />
  )

  return (
    <Box 
      width={width} 
      height={height}
      bg="gray.700"
      borderRadius="xl"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {mediaContent}
    </Box>
  )
}

export default MediaAsset 