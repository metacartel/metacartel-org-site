import { BoxProps, Box } from '@chakra-ui/react'

export const Section: React.FC<BoxProps> = ({children, ...props}) => (
  <Box
    as="section"
    flex='1'
    flexWrap='wrap'
    w='100%'
    px={['1rem', '1.5rem', '4rem', '5rem']}
    py={['0.75rem', '1rem', '1.25rem', '2.5rem']}
    {...props}
  >
    {children}
  </Box>
)