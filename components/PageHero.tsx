import { Flex, BoxProps, Text } from '@chakra-ui/react'
import { Section, MetaTicker } from './'

export const PageHero: React.FC<BoxProps> = ({ children, ...props }) => (
  <Flex direction="column" flex="1">
    <Section
      bgImage='images/metacartel-paris-bw.png'
      bgBlendMode='color-dodge'
      bgColor='brand.red'
      bgPosition='center'
      bgSize='cover'
      px={8}
      py={[16, null, 32]}
      minH="100px"
      maxW="800px"
      {...props}
    >
      <Text
        as="h1"
        fontFamily='hero'
        fontSize={['3xl', '4xl', '5xl', '6xl', '7xl']}
        lineHeight='1'
        color="fg"
      >
        {children}
      </Text>
    </Section>
    <MetaTicker />
  </Flex>
)
