import { FC, useState, ChangeEvent } from 'react'
import { Flex, Input } from '@chakra-ui/react'
import { GrantList, Section, PageHero } from '../components'

const Grants: FC = () => {
  const [filter, setFilter] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value);

  return (
    <Flex flexDirection='column' w='100%'>
      <PageHero bg="brand.red">Grants</PageHero>
      <Section py={75}>
        <Input
          placeholder="Search grant recipients"
          value={filter}
          onChange={handleInputChange}
          mb={8}
          color="bg"
        />
        <GrantList filter={filter} />
      </Section>
    </Flex>
  )
}

export default Grants
