import { FlexProps, Box, Flex } from '@chakra-ui/react'

export const Section: React.FC<FlexProps> = ({children, ...props}) => {
  const backgroundProps = {}
  const childProps = {}
  Object.keys(props).forEach(key => {
    if (key.includes('bg') || key.includes('background')) {
      backgroundProps[key] = props[key]
    } else {
      childProps[key] = props[key]
    }
  })
  return (
    <Flex
      as="section"
      width="100vw"
      justifyContent='center'
      {...backgroundProps}
    >
      <Box
        maxW="container"
        width="100%"
        {...childProps}
      >
        {children}
      </Box>
    </Flex>
  )
}