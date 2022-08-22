import { Flex, Box, BoxProps, Button, SimpleGrid, } from '@chakra-ui/react'
import { DatasetJsonLd } from 'next-seo'
import { WipItem } from '../components/WipItem'

const data = [
  { status: "Cruising",
    title: "MetaCartel Website",
    desc: "First ever community effort to finally update the website",
    url: "https://metacartel.org", 
  },
  { status: "Cruising",
    title: "MCON Planning Committee", 
    desc: "Get Your Spicy DAO Fix. September 6 - 9th, 2022 Denver, CO",
    url: "https://www.mcon.fun/", 
  },
  { status: "MEME",
    title: "Meditations on Moloch (Printed Edition)",
    desc: "Nicely designed, printed version of the og essay for mass consumption",
    url: "https://app.dework.xyz/metacartel/meditations-on-moloc?taskId=cce89490-9cab-4bc8-849a-e225227f9f2e",
  },
]
interface WipListProps extends BoxProps {
  color?: string
}
export const WipList: React.FC<WipListProps> = ({ color }) => {
  return (
    <Box w={'100%'}>
      <SimpleGrid columns={[1, null, 2, 3]} spacing='40px'>
        {data.map(({status, title, desc, url }) => (
            <WipItem 
              key={title}
              status={status}
              title={title}
              desc={desc}
              url={url}
              color={color || 'white'}
              />
        ))}
      </SimpleGrid>
    </Box>
  )
}
