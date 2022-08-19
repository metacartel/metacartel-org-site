import { Flex } from '@chakra-ui/react'
import { GrantList, Section, PageHero } from '../components'

const Grants: React.FC = () => (
  <Flex flexDirection='column' w='100%'>
    <PageHero bg="brand.red">Grants</PageHero>
    <Section>
      <GrantList />
    </Section>
  </Flex>
)

export default Grants
