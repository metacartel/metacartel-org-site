import { Flex } from '@chakra-ui/react'
import { CalendarList, PageHero } from '../components'

const Ecosystem = () => {
  return (
  <Flex>
    <PageHero bg="brand.red">Ecosystem</PageHero>
    <CalendarList />
  </Flex>
  );
}

export default Ecosystem
