import { Text, Flex } from '@chakra-ui/react'
import { Section } from './'

export const Motto = () => (
  <Section
    bg='black'
    flex="1"
    display='flex'
    justifyContent={'center'}
    px={['2rem', '4rem', '6rem', '8rem']}
  >
    <Flex
      flex="1"
      bgImage="url(./shapes-bg.svg)"
      bgClip={'text'}
      maxW="70ch"
    >
      <Text
        fontSize={['4xl', '5xl', '6xl', '8xl']}
        fontFamily='Liquido'
        fontStyle='italic'
        letterSpacing='0.125em'
        lineHeight='130%'
      >
        <Text fontFamily={'inherit'}>
          If you want to go fast, go alone.
        </Text>
        <Text fontFamily={'inherit'}>
          If you want to go far, go together.
        </Text>
      </Text>
    </Flex>
  </Section>
)