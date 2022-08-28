import { Box, Flex, Heading, SimpleGrid, Text  } from '@chakra-ui/react'
import { IconButtonLink, Section } from './'

const journeys = [
  {
    heading: 'Get Funding',
    description: 'Tell us about your spicy Web3 project and show us why we should fund it.  Receiving a grant also gets you DAO membership.',
    action: 'Apply for a Grant',
    url: 'https://forum.metacartel.org/t/guide-how-to-post-a-funding-proposal/74'
  },
  {
    heading: 'Give Funding',
    description: 'Eat tacos, without making them. We’ll take your ETH, give it to projects that’ll make our lives better, and give you DAO membership so you can help when you like.',
    action: 'Give Capital',
    url: 'https://forum.metacartel.org/t/dao-membership-proposals-thread/51'
  },
  {
    heading: 'Contribute',
    description: 'Test your spice tolerance, but bring a towel, because you’re going to sweat and you’re going to like it. Even if you don’t know how you can contribute, join us in the Discord.',
    action: 'Join our Discord',
    url: 'https://discord.gg/tktRF5sRyx'
  },
]

export const Membership = () => {
  return (
    <Section bg="brand.red" py={20} px={8} bgImage="url(/images/tacos_bg.svg)" bgSize="cover">
      <Flex direction="column">
        <Box w={['100%', '75%', '50%']} fontSize="2xl" mb={12}>
          There are three ways to join MetaCartel. All three bring you into our community and give you access to the most exciting conversations in Web3 and voting power in the DAO that jumpstarts the most impactful projects in the ecosystem.
        </Box>
        <SimpleGrid columns={[1, null, 3]} gap={[16, null, null, 24]} w={'100%'}>
          {journeys.map(({ heading, description, action, url }) => (
            <Flex direction="column" key={url}>
              <Heading fontSize={'2xl'} mt={4}>{heading}</Heading>
              <Text mt={4} mb={8}>{description}</Text>
              <IconButtonLink 
                icon="spaceship" 
                title={action}
                color="fg"
                href={url}
                isExternal
                mt="auto"
                _hover={{ bg: 'fg', color: 'bg' }}
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Section>
  )
}
