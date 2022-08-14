import { Flex, BoxProps, Text } from '@chakra-ui/react'
import { Section, CtaScrollBar } from './'

export const PageHero: React.FC<BoxProps> = ({ children, ...props }) => (
  <Flex direction="column" flex="1">
    <Section
      {...props}
      backgroundImage='images/metacartel-paris-bw.png'
      bgBlendMode='color-dodge'
      backgroundColor='brand.red'
      px='min(10vw, 10rem)'
      py='10vh'
      minH="100px"
      maxH="60vh"
      height="calc(25vh + 15vw)"
      backgroundPosition='center'
    >
      <Text
        as="h1"
        fontFamily='hero'
        fontSize={['3xl', '4xl', '5xl', '6xl']}
        lineHeight='1'
        color="black"
      >
        {children}
      </Text>
    </Section>
    {/* TODO: Add CTA scroll */}
    <CtaScrollBar />
  </Flex>
)
