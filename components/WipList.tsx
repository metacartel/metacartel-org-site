import { HStack, Text, Box, Button, SimpleGrid, } from '@chakra-ui/react'
import { DatasetJsonLd } from 'next-seo'
import { WipItem } from '../components/WipItem'

const data = [
  { status: "Cruising",
    title: "MetaCartel Website",
    desc: "First ever community effort to update the website",
    url: "https://metacartel.org", 
  },
  { status: "Cruising",
    title: "MCON Planning Committee", 
    desc: "Party Time.",
    url: "https://metacartel.org", 
  },
  { status: "MEME",
    title: "Meditations on Moloch (Printed Edition)",
    desc: "Nicely designed, printed version of the essay for mass consumption",
    url: "https://metacartel.org",
  },
]

export const WipList = () => {
  return (
    <Box p={25}>
      <HStack flexDirection="row" py={25}>
        <h2>Works in Progress</h2>
        <Button
          as='a'
          borderWidth={2}
          borderColor="brand.black"
          borderStyle={'solid'}
          px={4}
          py={2}
          whiteSpace="nowrap"
          bg='none'
          cursor='pointer'
          _hover={{bg: 'brand.black', color: 'white'}}
        >
          View
        </Button>
      </HStack>
      <SimpleGrid columns={[1, null, 2, 3]} spacing='40px'>
        {data.map(({status, title, desc, url }) => (
            <WipItem 
              key={title}
              status={status}
              title={title}
              desc={desc}
              url={url}
            />
        ))}
      </SimpleGrid>
    </Box>
  )
}
