import { Box, Image, AspectRatio, Text } from '@chakra-ui/react'
import PlaceholderImage from './PlaceholderImage'

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
  // Check if the source is a URL or a local file
  const isExternalUrl = src.startsWith('http')
  const assetPath = isExternalUrl ? src : `/${src}`

  // Handle loading errors
  const handleError = (e: React.SyntheticEvent<HTMLImageElement | HTMLVideoElement, Event>) => {
    console.error(`Error loading ${type}:`, e)
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
  ) : (
    <Image
      src={assetPath}
      alt={alt}
      width={width}
      height={height}
      objectFit="cover"
      onError={handleError}
      fallback={
        <PlaceholderImage
          width={width}
          height={height}
          text={placeholderText || `Unable to load ${alt}`}
        />
      }
    />
  )

  return (
    <Box width={width} height={height}>
      {mediaContent}
    </Box>
  )
}

export default MediaAsset 