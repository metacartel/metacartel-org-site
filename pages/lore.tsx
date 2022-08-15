import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { PageHero, Section } from "../components"

const Lore = () => {
  return (
    <Flex flexDirection={'column'} w={'100%'}>
      <PageHero bg="brand.red">Lore</PageHero>

      <Section maxW="600px" py={25} margin={'0 auto'} color="brand.white" fontFamily="'Basteleur', serif">
        <Text fontSize="3xl" my={8} px={5}>
          In the beginning came the tweet, an imagining of ecosystem-wide coordination.
        </Text>
        <Flex flexDirection="column" px={5}>
          <Box maxW={'350px'} mr={'auto'} my={8}>
            <Text>
              The tweet begot a Telegram working group, focused on a standard for MetaTransactions. The working group hacked all around the world and you know it was good, because they kept coming back, bringing new friends with them.
            </Text>
            <Link mt={3} href="https://archive.org">Visit the OG</Link>
          </Box>
          <Text maxW={'350px'} mr={'auto'} my={8}>
            From the working group, came the DAO, le cartel de Meta, vagabonds with a penchant for spice. MetaCartel DAO gave out grants in waves, scanning hackathons for winners who aligned with the chili vibe:
          </Text>
          <Box border={'2px solid #fff'} w="300px"h="300px">
            <Image src="/images/gofastgofar.svg" ml={20} mt={10} />
          </Box>
          <Box maxW={'350px'} ml={'auto'} my={8}>
            <Text>
              Successful products grew from those grants, like Aave, Gelato and Zapper, as well as dynamic communities, like MetaFactory, MetaGame, DAOhaus and Raid Guild. While receiving ETH is great, grant recipients express gratitude, mostly, for MetaCartel’s network and community support.
            </Text>
          </Box>
          <Link mt={3} href="/ecosystem">Visit Ecosystem</Link>
          <Text maxW={'350px'} mr={'auto'} my={8}>
            When the pandemic hit, immediately following EthDenver 2020, they weren’t affected. Everyone was already working remotely from all over the world.  Grants were still going out in waves, now including DAOs as viable recipients. With the rise in mainnet gas fees, core ops migrated to Gnosis chain, because we were actively governing together.
          </Text>
          <Text maxW={'350px'} ml={'auto'} my={8}>Despite the dark shroud of covid, Meta Cartel was now much more than a working group or a DAO; it had bloomed into an entire ecosystem, and it was _thriving_. Communities were building tools to enhance coordination, while building meaningful connections with each other, enhancing their effectiveness and efficiency.</Text>
          <Text maxW={'350px'} mr={'auto'} my={8}>In summer 2021, the cartel emerged from pandemic lockdowns and gathered in Paris for ETHCC, which may have included a roof and mistakes that weren’t regrets. That fall, they realized a need for everyone to come together IRL.  MCON, the conference about DAOs, by DAOs and for DAOs, is now on its third iteration.  MetaCamp was an unconference in Costa Rica in Spring 2022.</Text>
          <Text maxW={'350px'} ml={'auto'} my={8}>The cartel saw that it was all good, even the challenges, but what makes us most proud is the impact on grant recipients, beyond Eth.  A grant from MetaCartel is a signal to a growing ecosystem that an individual or a team has the esteem and support of a discerning community.</Text>
          <Box maxW={'350px'} mr={'auto'} my={8}><Text>Ecosystem wide coordination doesn’t happen on its own. It requires care and energy, but the rewards are immense.</Text>
          <Text maxW={'350px'} ml={'auto'} my={8}>Future chapters are already being written. Will you join us?</Text></Box>
        </Flex>
      </Section>
    </Flex>
  )
}

export default Lore
