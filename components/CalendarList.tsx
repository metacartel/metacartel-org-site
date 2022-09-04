import { useEffect, useState } from "react"
import { Flex, Box, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { format } from "date-fns"
import { CalendarItem } from "../components/CalendarItem"
import { getData } from "../utils/cache"
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
  etag: string
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
  const { pathname } = useRouter()
  useEffect(() => {
    // TODO: Global context state management for fetched data
    ;(async () => {
      const MAX_ITEMS = pathname === "/" ? 6 : 100
      try {
        const data: EventItem[] = await getData("api/get_events")
        const mappedData: CalendarListData[] = data.map(({ id, htmlLink, summary, description, start, end, etag }) => ({
          id, title: summary, desc: description,
          etag: etag.replaceAll("\"", ""),
          start: start.dateTime ? format(new Date(start.dateTime), "P") : format(new Date(start.date), "P"),
          end: end.dateTime ? format(new Date(end.dateTime), "P") : format(new Date(end.date), "P"),
          timezone: start.timeZone,
          url: htmlLink
        }))
        // Remove items with duplicate etags, keeping only the first one
        let etagSet: string[] = []
        const filteredData = mappedData.filter(({ etag }) => {
          if (etagSet.includes(etag)) return false
          etagSet = [...etagSet, etag]
          return true
        })
        const trimmedData = filteredData.slice(0, filteredData.length > MAX_ITEMS ? MAX_ITEMS : filteredData.length)
        setData(trimmedData)
      } catch (error) {
        console.error(error)  
      }
      setLoading(false)
    })()
  }, [pathname])

  return (
    <Box w={"100%"}>
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(min(280px, 100%), 1fr))"
        spacing="40px"
      >
        {loading ? (
          <Flex py={6} fontSize="2xl">Slaying the calendar lords...</Flex>
        ) : data.length ? data.map(({ start, end, title, desc, url }) => (
          <CalendarItem
            key={title}
            start={start}
            end={end}
            title={title}
            desc={desc}
            url={!desc?.includes(" ") && desc?.startsWith("http") ? desc : url}
            color={color || "white"}
          />
        )) : (
          <Flex py={6} fontSize="2xl">No events discovered ¯\_(ツ)_/¯</Flex>
        )}
      </SimpleGrid>
    </Box>
  )
}
