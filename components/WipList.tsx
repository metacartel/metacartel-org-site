import { Box, BoxProps, SimpleGrid } from "@chakra-ui/react"
import { WipItem } from "../components/WipItem"

const data = [
  {
    status: "Launched!",
    title: "MetaCartel Website",
    desc: "First ever community effort to finally update the website",
    url: "https://metacartel.org",
  },
  { status: "Launched!",
    title: "ETHos Website", 
    desc: "Incubator for IRL Ethereum events",
    url: "/ethos", 
  },
  {
    status: "MEME",
    title: "Meditations on Moloch (Printed Edition)",
    desc: "Nicely designed, printed version of the og essay for mass consumption",
    url: "https://app.dework.xyz/metacartel/meditations-on-moloc?taskId=cce89490-9cab-4bc8-849a-e225227f9f2e",
  },
]
interface WipListProps extends BoxProps {
  color?: string
}
export const WipList: React.FC<WipListProps> = ({ color, ...props }) => {
  return (
    <Box w="100%" {...props}>
      <SimpleGrid columns={[1, null, 2, 3]} spacing="40px">
        {data.map(({ status, title, desc, url }) => (
          <WipItem
            key={title}
            status={status}
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
