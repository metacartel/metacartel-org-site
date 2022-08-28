import { useEffect, useState } from "react"
import { Box, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { CalendarItem } from "../components/CalendarItem"
import { format } from "date-fns"

// const data = [
//   {
//     start: "09-06-2022",
//     end: "09-06-2022",
//     title: "MetaCartel Townhall Taco Party",
//     desc: "Party Time.",
//     url: "https://metacartel.org",
//   },
//   {
//     start: "09-06-2022",
//     end: "09-09-2022",
//     title: "MCON 2",
//     desc: "Party Time.",
//     url: "https://metacartel.org",
//   },
//   {
//     start: "09-08-2022",
//     end: "09-08-2022",
//     title: "HausParty",
//     desc: "Party Time.",
//     url: "https://metacartel.org",
//   },
// ]

interface CalendarListProps extends BoxProps {
  color?: string
}
export const CalendarList: React.FC<CalendarListProps> = ({ color }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      const data = await (await fetch("./api/get_events")).json() // was unable to get this to work with getData -- need to see why

      const mappedData = data
        .filter(({ fields }) => fields["Event Name"])
        .map(({ fields, id }) => {
          return {
            id,
            title: fields["Event Name"],
            desc: fields["Event Description"],
            start: format(new Date(fields["Event Start Time"]), "P"),
            end: format(new Date(fields["Event End Time"]), "P"),
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
