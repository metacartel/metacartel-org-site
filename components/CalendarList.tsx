import { useEffect, useState } from "react"
import { Box, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { CalendarItem } from "../components/CalendarItem"
import { formatDate } from "../utils/date"

interface CalendarListData {
  id: string
  title: string
  desc: string
  start: string
  end: string
  duration: string
  url?: string
}

interface CalendarListProps extends BoxProps {
  color?: string
}
export const CalendarList: React.FC<CalendarListProps> = ({ color }) => {
  const [data, setData] = useState<CalendarListData[]>([])
  useEffect(() => {
    // TODO: Global context state management for fetched data
    ;(async () => {
      const data = await (await fetch("./api/get_events")).json() // was unable to get this to work with getData -- need to see why

      const mappedData = data
        .filter(({ fields }) => fields["Event Name"])
        .map(({ fields, id }) => {
          return {
            id,
            title: fields["Event Name"],
            desc: fields["Event Description"],
            start: formatDate(fields["Event Start Time"]),
            end: formatDate(fields["Event End Time"]),
            duration: fields["Duration"],
          }
        })
      setData(mappedData)
    })()
  }, [])

  return (
    <Box w={"100%"}>
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(min(280px, 100%), 1fr))"
        spacing="40px"
      >
        {data.length !== 0 &&
          data.map(({ start, end, title, desc, url }) => (
            <CalendarItem
              key={title}
              start={start}
              end={end}
              title={title}
              desc={desc}
              url={url}
              color={color || "white"}
            />
          ))}
      </SimpleGrid>
    </Box>
  )
}
