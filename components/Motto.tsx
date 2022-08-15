import { Image, Text, Flex, Heading, Box, BoxProps } from '@chakra-ui/react'
import { Section, IconButton } from './'

export const Motto: React.FC<BoxProps> = (props) => (
  <Section bg='#0C0809' px={{base: '1rem', md: '2rem'}} {...props}>
    <Flex
      bgImage="./shapes-bg.svg"
      bgSize="cover"
      bgClip={'text'}
      py={['2rem', '3rem', '5rem', '6rem']}
      justifyContent={'center'}
    >
      <Box
        fontSize={['4xl', '5xl', '6xl', '8xl']}
        fontFamily='Liquido'
        fontStyle='italic'
        letterSpacing='0.125em'
        lineHeight='130%'
      >
        <Text fontFamily={'inherit'}>
          If you want to go<br />far, go together.<br />If you want to go<br />fast, go alone.
        </Text>

      </Box>
    </Flex>
    <Flex
      border="1px"
      borderColor="brand.red"
      alignItems={'center'}
      flexDirection={{base: 'column', md: 'row'}}
      gap='2rem'
      px={{base: '1rem', md: '2rem'}}
      py={{base: '1.5rem', md: '3rem'}}
      textAlign={{ base: 'center', md: 'start' }}
      mb={8}
    >
      <Image src="/chili-pixel.svg" height="48px" width="48px"/>
      <Flex direction='column' alignItems={{base: 'center', md: 'flex-start'}} flex='1'>
        <Heading as='h3' fontSize="xl" textTransform='uppercase' color='bg'>
          Join us in building web3 for humans
        </Heading>
        <Text as="p" fontSize={{base: 'md', md: 'lg', lg: 'xl'}} color="brand.teal">
          Read and sign our Community First Manifesto to get started.
        </Text>
      </Flex>
      <IconButton color='brand.red' icon='scroll' title='Sign Manifesto' />
    </Flex>
  </Section>
)
