import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const theme = extendTheme({
  fonts: {
    heading: '"Oxanium", sans-serif',
    body: '"Oxanium", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: '#1a1a2e',
        color: 'white',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '700',
        letterSpacing: '1px',
      },
    },
    Text: {
      baseStyle: {
        fontWeight: '400',
        letterSpacing: '0.5px',
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '600',
        letterSpacing: '1px',
      },
      defaultProps: {
        colorScheme: 'purple',
        size: 'lg',
      },
      variants: {
        solid: {
          bg: '#7928CA',
          color: 'white',
          _hover: {
            bg: '#9F7AEA',
          },
        },
      },
    },
    Box: {
      baseStyle: {
        borderRadius: 'xl',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
