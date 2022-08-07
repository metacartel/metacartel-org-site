import { Flex, BoxProps, Text, HStack } from '@chakra-ui/react'

export interface IProps extends BoxProps {
  children: React.ReactNode
}
export const PageHero: React.FC<BoxProps> = (props) => {
  const { children } = props
  return (
    <HStack flex="1">
      <Flex
        {...props}
        align="flex-start"
        justify="flex-start"
        height="calc(35vh + 10vw)"
        maxH="60vh"
        backgroundColor='brand.red'
        backgroundImage='images/metacartel-paris-bw.png'
        backgroundPosition='center'
        bgBlendMode='color-dodge'
        px='min(10vw, 10rem)'
        py='10vh'
        flex='1'
      >
        <Text
          as="h1"
          color='black'
          fontFamily='hero'
          fontSize={['3xl', '4xl', '5xl', '6xl']}
          isolation='isolate'
          lineHeight='1'
        >
          {children}
        </Text>
      </Flex>
      {/* TODO: Add news scroll */}
    </HStack>
  )
}
