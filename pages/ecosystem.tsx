import { Flex } from "@chakra-ui/react"
import { EcosystemGrid, PageHero, PageMetadata, Section } from "../components"

const Ecosystem = () => {
  return (
  <Flex flexDirection="column" w="100%">
    <PageMetadata title="Ecosystem" description="The MetaCartel ecosystem" />
    <PageHero>Ecosystem</PageHero>
    <Section py={75}>
      <EcosystemGrid />
    </Section>
  </Flex>
  );
}

export default Ecosystem
