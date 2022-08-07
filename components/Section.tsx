import { BoxProps, Box } from '@chakra-ui/react'

export const Section = (props: BoxProps) => (
  <Box
    as="section"
    flex='1'
    px={['1rem', '1.5rem', '2rem', '4rem']}
    py={['0.75rem', '1rem', '1.25rem', '2.5rem']}
    {...props}
  >
    {props.children}
  </Box>
)