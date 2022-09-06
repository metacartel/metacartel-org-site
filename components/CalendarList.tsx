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
  etag: string
  start: DateTime
  end: DateTime
  location?: string
  summary: string
  description: string
  htmlLink: string
  [key: string]: any
}

interface CalendarListData {
  id: string
  start: string
  end: string
  location?: string
  title: string
  desc: string
  url: string
}

interface CalendarListProps extends BoxProps {
  color?: string
}

export const CalendarList: React.FC<CalendarListProps> = ({ color }) => {
  const [data, setData] = useState<CalendarListData[]>([])
  const [loading, setLoading] = useState(true)
  const { pathname } = useRouter()
  useEffect(() => {
    // TODO: Global context state management for fetched data
    ;(async () => {
      const MAX_ITEMS = pathname === "/" ? 6 : 100
      try {
        const data: EventItem[] = await getData("api/get_events")
        const mappedData: CalendarListData[] = data.map(
          ({ etag, start, end, location, summary, description, htmlLink }) => {
            const dateRange = { start: "", end: "" }
            const isAllDay = !start.timeZone
            // If all-day event (no timezone indicated), move "end" date back by one day (as it lands on 00:00:00 the next day)
            if (isAllDay) {
              // Parse string to create Date object in users locale for all-day events
              // Prevents date from shifting depending on users timezone
              const splitStartDate = start.date.split("-")
              const splitEndDate = end.date.split("-")
              const splitStartDateNumbers = splitStartDate.map((s) =>
                parseInt(s)
              )
              const splitEndDateNumbers = splitEndDate.map((s) => parseInt(s))
              // [0] Year, [1] Month, [2] Day
              const startDateInitString = `${splitStartDateNumbers[1]}/${splitStartDateNumbers[2]}/${splitStartDateNumbers[0]}`
              const endDateInitString = `${splitEndDateNumbers[1]}/${
                splitEndDateNumbers[2] - 1
              }/${splitEndDateNumbers[0]}`
              // Format all-day events with only date, "P"
              dateRange.start = format(new Date(startDateInitString), "P")
              dateRange.end = format(new Date(endDateInitString), "P")
            } else {
              // Format in-day events with date plus time range, "Pp" > "p"
              dateRange.start = format(new Date(start.dateTime), "Pp")
              dateRange.end = format(new Date(end.dateTime), "p")
            }
            const eventItems = {
              id: etag.replaceAll('"', ""),
              start: dateRange.start,
              end: dateRange.end,
              location,
              title: summary,
              desc: description,
              url: htmlLink,
            }
            return eventItems
          }
        )
        // Recurrent events share the same `etag` (assigned to `id`)
        // Remove items with duplicate id's to only display next instance of recurrent events
        let uniqueEventsSet: string[] = []
        const filteredData = mappedData.filter(({ id }) => {
          if (uniqueEventsSet.includes(id)) return false
          uniqueEventsSet = [...uniqueEventsSet, id]
          return true
        })
        const trimmedData = filteredData.slice(
          0,
          filteredData.length > MAX_ITEMS ? MAX_ITEMS : filteredData.length
        )
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
          <Flex py={6} fontSize="2xl">
            Slaying the calendar lords...
          </Flex>
        ) : data.length ? (
          data.map(({ id, start, end, title, desc, url, location }) => (
            <CalendarItem
              key={id}
              start={start}
              end={end}
              title={title}
              desc={desc}
              url={
                !desc?.includes(" ") && desc?.startsWith("http") ? desc : url
              }
              color={color || "white"}
              maxW="halfContainer"
              location={location}
            />
          ))
        ) : (
          <Flex py={6} fontSize="2xl">
            No events discovered ¯\_(ツ)_/¯
          </Flex>
        )}
      </SimpleGrid>
    </Box>
  )
}
