import { BoxProps, Text, HStack } from '@chakra-ui/react'
import { Section } from './'

export const PageHero: React.FC<BoxProps> = (props) => (
  <HStack flex="1">
    <Section
      bgImage='images/metacartel-paris-bw.png'
      bgBlendMode='color-dodge'
      bgColor='brand.red'
      bgPosition='center'
      bgSize='cover'
      px='min(10vw, 10rem)'
      py='10vh'
      minH="100px"
      maxH="60vh"
      height="calc(25vh + 15vw)"
      {...props}
    >
      <Text
        as="h1"
        fontFamily='hero'
        fontSize={['3xl', '4xl', '5xl', '6xl']}
        lineHeight='1'
        color="fg"
      >
        {props.children}
      </Text>
    </Section>
    {/* TODO: Add news scroll */}
  </HStack>
)
