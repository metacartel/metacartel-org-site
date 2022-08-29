import { Flex } from '@chakra-ui/react'
import { EcosystemTable, PageHero, Section } from '../components'

const Ecosystem = () => {
  return (
  <Flex flexDirection='column' w='100%'>
    <PageHero bg="brand.red">Ecosystem</PageHero>
    <Section py={75}>
      <EcosystemTable />
    </Section>
  </Flex>
  );
}

export default Ecosystem
