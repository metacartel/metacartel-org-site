import { Flex, HStack, Text, Box, Button, SimpleGrid, GridItem, Heading, propNames } from '@chakra-ui/react'
import { DatasetJsonLd } from 'next-seo'
import { GrantItem } from '../components/GrantItem'

const data = [
  { date: "09-06-2022",
    title: "MetaFactory",
    desc: "Help w/audits",
    url: "https://metafactory.ai", 
    amount: "10000",
  },
  { date: "09-06-2022",
    title: "Kokonuts",
    desc: "Help w/audits",
    url: "https://metafactory.ai", 
    amount: "10000",
  },
  { date: "09-06-2022",
    title: "Metacamp",
    desc: "Help w/audits",
    url: "https://metafactory.ai", 
    amount: "10000",
  },
]

export const GrantList = () => {
  return (
    <Box w={'100%'}>
      <SimpleGrid columns={1}>
        <Box w={'100%'} borderBottom={'2px solid #000'} />
        {data.map(({date, title, desc, url, amount }) => (
            <GrantItem 
              key={title}
              date={date}
              title={title}
              desc={desc}
              url={url}
              amount={amount}
            />
        ))}
      </SimpleGrid>
    </Box>
  )
}
