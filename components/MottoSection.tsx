import { Image, Text, Flex, Heading, Box, BoxProps } from '@chakra-ui/react'
import { Section, IconButton, Motto } from '.'

export const MottoSection: React.FC<BoxProps> = (props) => (
  <Section bg='#0C0809' px={{base: '1rem', md: '2rem'}} {...props}>
    <Motto />
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
      <Image src='/chili-pixel.svg' height='48px' width='48px' alt='Pixel art chili logo' />
      <Flex direction='column' alignItems={{base: 'center', md: 'flex-start'}} flex='1'>
        <Heading as='p' fontSize="xl" textTransform='uppercase' color='bg'>
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
