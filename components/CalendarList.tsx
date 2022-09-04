import { useEffect, useState } from "react"
import { Flex, Box, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { CalendarItem } from "../components/CalendarItem"
import { format } from "date-fns"
import { getData } from "../utils"

interface DateTime {
  dateTime?: string
  timeZone?: string
  date?: string
}

interface EventItem {
  id: string
  htmlLink: string
  summary: string
  description: string
  location: string
  start: DateTime
  end: DateTime
  [key: string]: any
}

interface CalendarListData {
  id: string
  title: string
  desc: string
  start: string
  end: string
  url: string
  timezone?: string
}

interface CalendarListProps extends BoxProps {
  color?: string
}
export const CalendarList: React.FC<CalendarListProps> = ({ color }) => {
  const [data, setData] = useState<CalendarListData[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Global context state management for fetched data
    ;(async () => {
      // TODO: Debug getData caching utility and reimplement
      const data: EventItem[] = await (await fetch("api/get_events")).json()
      const mappedData: CalendarListData[] = data.map(({ id, htmlLink, summary, description, start, end }) => ({
          id, title: summary, desc: description, 
          start: start.dateTime ? format(new Date(start.dateTime), "P") : format(new Date(start.date), "P"),
          end: end.dateTime ? format(new Date(end.dateTime), "P") : format(new Date(end.date), "P"),
          timezone: start.timeZone,
          url: htmlLink
        }))
      setData(mappedData)
      setLoading(false)
    })()
  }, [])

  return (
    <Box w={"100%"}>
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(min(280px, 100%), 1fr))"
        spacing="40px"
      >
        {loading ? (
          <Flex py={6} fontSize="2xl">Slaying the calendar lords...</Flex>
        ) : data.length !== 0 ? data.map(({ start, end, title, desc, url }) => (
          <CalendarItem
            key={title}
            start={start}
            end={end}
            title={title}
            desc={desc}
            url={url}
            color={color || "white"}
          />
        )) : (
          <Flex py={6} fontSize="2xl"></Flex>
        )}
      </SimpleGrid>
    </Box>
  )
}
