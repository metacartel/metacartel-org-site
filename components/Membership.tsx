import { Heading, Section, SimpleGrid, Text  } from '@chakra-ui/react'
import { IconButton } from './'

export const Membership = () => {
  return (
    <Section bg="brand.green">
      <Box maxW="container" margin="0 auto">
        <SimpleGrid columns={[1, null, 3]}>
          <Text fontSize={'sm'}>
          </Text>
          <Heading fontSize={'2xl'} mt={4}>Request a Grant</Heading>
          <Text mt={4} mb={8}>Tell us about your spicy Web3 project and show us why we should fund it.  Receiving a grant gets you DAO membership.</Text>
          <IconButton 
            icon="spaceship" 
            title="Apply for a Grant" 
            color={color} 
            mt="auto" 
            href={url} 
            _hover={{bg: 'brand.teal', color: 'white'}} 
          />
        </SimpleGrid>
      </Box>
    </Section>
  )
}
