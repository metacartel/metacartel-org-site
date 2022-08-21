import { Box, Flex, Heading, SimpleGrid, Text  } from '@chakra-ui/react'
import { IconButton, Section } from './'

export const Membership = () => {
  return (
    <Section bg="brand.green" py={20} px={8} bgImage="url(/images/tacos_bg.svg)" bgSize="cover">
      <Flex maxW="container" margin="0 auto" color="brand.black" flexWrap={'wrap'}>
        <Box w={['100%', '75%', '50%']} fontSize="2xl" mb={12}>
          There are three ways to join MetaCartel. All three bring you into our community and give you access to the most exciting conversations in Web3 and voting power in the DAO that jumpstarts the most impactful projects in the ecosystem.
        </Box>
        <Box w={'50%'} />
        <SimpleGrid columns={[1, null, 3]} gap={[16, null, null, 24]} w={'100%'}>
          <Box>
            <Heading fontSize={'2xl'} mt={4}>Get Funding</Heading>
            <Text mt={4} mb={8}>Tell us about your spicy Web3 project and show us why we should fund it.  Receiving a grant also gets you DAO membership.</Text>
            <IconButton 
              icon="spaceship" 
              title="Apply for a Grant" 
              color="brand.black" 
              mt="auto" 
              href="https://forum.metacartel.org/t/guide-how-to-post-a-funding-proposal/74" 
              _hover={{bg: 'brand.black', color: 'white'}} 
            />
          </Box>
          <Box>
            <Heading fontSize={'2xl'} mt={4}>Give Funding</Heading>
            <Text mt={4} mb={8}>Eat tacos, without making them. We’ll take your ETH, give it to projects that’ll make our lives better, and give you DAO membership so you can help when you like.</Text>
            <IconButton 
              icon="spaceship" 
              title="Give Capital" 
              color="brand.black" 
              mt="auto" 
              href="https://forum.metacartel.org/t/dao-membership-proposals-thread/51" 
              _hover={{bg: 'brand.black', color: 'white'}} 
            />
          </Box>
          <Box>
            <Heading fontSize={'2xl'} mt={4}>Contribute</Heading>
            <Text mt={4} mb={8}>Test your spice tolerance, but bring a towel, because you’re going to sweat and you’re going to like it. Even if you don’t know how you can contribute, join us in the Discord.</Text>
            <IconButton 
              icon="spaceship" 
              title="Join our Discord" 
              color="brand.black" 
              mt="auto" 
              href="https://discord.gg/tktRF5sRyx" 
              _hover={{bg: 'brand.black', color: 'white'}} 
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Section>
  )
}
