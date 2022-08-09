import { Flex, HStack, Box, Button, SimpleGrid, GridItem, Heading, Text, VStack, Link, propNames } from '@chakra-ui/react'
import { BrandJsonLd, DatasetJsonLd } from 'next-seo'

export const Footer = () => {
  return (
    <Flex flexDirection={'column'} py={75} pb={150} w={'100%'} justifyContent={'flex-start'} bg={'black'} color={'brand.red'}>
      <Flex maxWidth={'420px'} margin={'0 auto'} py={25}>
        <Text as={'h4'} alignSelf={'center'}>MetaCartel</Text>
      </Flex>
      <SimpleGrid columns={[1, null, 2]} spacing={25} alignSelf={'flex-start'} maxWidth={'420px'} margin={'0 auto'}>
        <VStack>
          <Link>Home</Link>
          <Link>Ecosystem</Link>
          <Link>Grants</Link>
          <Link>Lore</Link>
          <Link>Manifest</Link>
        </VStack>
        <VStack>
          <Link>Twitter</Link>
          <Link>Discord</Link>
          <Link>Forum</Link>
          <Link>DAO</Link>
        </VStack>
      </SimpleGrid>
    </Flex>
  )
}
