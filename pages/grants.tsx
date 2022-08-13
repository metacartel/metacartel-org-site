import { Flex } from '@chakra-ui/react'
import { GrantList, Section } from '../components'

const Grants = () => {
  return (
  <Section w={'100%'}>
    <Flex maxWidth={'1200px'} w={'100%'} margin={'0 auto'} flexWrap={'wrap'}>
      <GrantList />
    </Flex>
  </Section>
  );
}

export default Grants

