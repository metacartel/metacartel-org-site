import { Flex } from '@chakra-ui/react'
import { EcosystemList, PageHero, Section } from '../components'

const Ecosystem = () => {
  return (
  <Flex>
    <PageHero bg="brand.red">Ecosystem</PageHero>
    <Section>
    HERO
    <EcosystemList />
    </Section>
  </Flex>
  );
}

export default Ecosystem
