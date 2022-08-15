import { Flex, FlexProps, Box, Text } from '@chakra-ui/react'

export const Motto: React.FC<FlexProps> = (props) => (
  <Flex
    bgImage='./shapes-bg.svg'
    bgSize='cover'
    bgClip='text'
    py={['2rem', '3rem', '5rem', '6rem']}
    justifyContent='center'
    {...props}
  >
    <Box
      fontSize={['4xl', '5xl', '6xl', '8xl']}
      fontFamily='Liquido'
      fontStyle='italic'
      letterSpacing='0.125em'
      lineHeight='130%'
    >
      <Text fontFamily='inherit'>
        If you want to go<br />far, go together.<br />If you want to go<br />fast, go alone.
      </Text>
    </Box>
  </Flex>
)