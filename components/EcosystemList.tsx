import { useEffect, useState } from "react"
import { Grid, Box, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { getData } from "../utils"

interface EcosystemListData {
  id: string
  projectName: string
  websiteUrl: string
  logoUrl: string
}

interface EcosystemListProps {
  color?: string
}

export const EcosystemList: React.FC<EcosystemListProps> = ({ color = "brand.sun" }) => {
  const { pathname } = useRouter()
  const [data, setData] = useState<EcosystemListData[]>([])
  useEffect(() => {
    // TODO: Global context state management for fetched data
    ;(async () => {
      const data: Array<{[key: string]: any}> = await getData("./api/get_grants")
      const filteredData = data.filter(({fields}) => fields["isEcosystem"])
      const maxHomepageItems = 10
      const homepageSlice = Math.min(filteredData.length, maxHomepageItems)
      const slicedData = filteredData.slice(0, pathname === "/" ? homepageSlice : filteredData.length)
      const mappedData = slicedData.map(({fields, id}) => {
          const logos = fields["Logo/Avatar"]
          return {
            id,
            projectName: fields["Project Name"],
            websiteUrl: fields["Website"],
            logoUrl: logos ? logos[0].thumbnails.large.url : '',
          }
        })
      setData(mappedData)
    })();
  } , [pathname])
  return (
    <Box w="100%">
      <Grid templateColumns="repeat(auto-fit, minmax(min(170px, 100%), 1fr))" columnGap={[1, 2, 4, 8, 16]} rowGap={10} placeItems="center">
        {data.map(({ websiteUrl, logoUrl, projectName }) => (
          <Link
            href={websiteUrl}
            borderRadius="full"
            _hover={{
              outline: "2px solid",
              outlineColor: color
            }}
            aria-label={projectName}
            bgImage={`url(${logoUrl})`}
            h="120px"
            w="120px"
            bgSize="contain"
            key={projectName}
          />
        ))}
      </Grid>
    </Box>
  )
}
