import { Flex, HStack, Box, Button, SimpleGrid, GridItem, Heading, propNames } from '@chakra-ui/react'
import { DatasetJsonLd } from 'next-seo'
import { CalendarItem } from '../components/CalendarItem'

const data = [
  { start: "09-06-2022",
    end: "09-06-2022",
    title: "MetaCartel Townhall Taco Party",
    desc: "Party Time.",
    url: "https://metacartel.org", 
  },
  { start: "09-06-2022",
    end: "09-09-2022",
    title: "MCON 2", 
    desc: "Party Time.",
    url: "https://metacartel.org", 
  },
  { start: "09-08-2022",
    end: "09-08-2022",
    title: "HausParty",
    desc: "Party Time.",
    url: "https://metacartel.org",
  },
]
interface CalendarListProps extends BoxProps {
  color: string
}
export const CalendarList: React.FC<CalendarListProps> = ({ color }) => (
  <Box px={25}>
    <SimpleGrid templateColumns='repeat(auto-fit, minmax(min(280px, 100%), 1fr))' /* columns={[1, null, 2, 3]} */ spacing='40px'>
      {data.map(({start, end, title, desc, url }) => (
          <CalendarItem 
            key={title}
            start={start}
            end={end}
            title={title}
            desc={desc}
            url={url}
            color={color}
          />
      ))}
    </SimpleGrid>
  </Box>
)

