import { Flex } from "@chakra-ui/react"
import { EcosystemGrid, PageHero, Section } from "../components"

const Ecosystem = () => {
  return (
  <Flex flexDirection="column" w="100%">
    <PageHero>Ecosystem</PageHero>
    <Section py={75}>
      <EcosystemGrid />
    </Section>
  </Flex>
  );
}

export default Ecosystem
