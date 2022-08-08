import { Flex, Box, BoxProps, Button, SimpleGrid, } from '@chakra-ui/react'
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
interface WipListProps extends BoxProps {
  color: string
}
export const WipList: React.FC<WipListProps> = ({ color }) => {
  return (
    <Box px={25}>
      <SimpleGrid columns={[1, null, 2, 3]} spacing='40px'>
        {data.map(({status, title, desc, url }) => (
            <WipItem 
              key={title}
              status={status}
              title={title}
              desc={desc}
              url={url}
              color={color}
            />
        ))}
      </SimpleGrid>
    </Box>
  )
}
