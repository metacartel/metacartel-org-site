import { Flex, FlexProps } from "@chakra-ui/react"
import { HorizontalTicker } from "react-infinite-ticker"
import { CtaItem  } from "./"
import { DISCORD_INVITE_URL } from "../constants"
const actionItems = [
  {
    label: "MCON2 wrapped!",
    action: "Watch the videos",
    icon: "mountains",
    color: "brand.sun",
    url: "https://www.youtube.com/watch?v=N52L-yw5BHs",
  },
  {
    label: "Hydra is Rising",
    action: "View Whitepaper",
    icon: "sword",
    color: "brand.purp",
    url: "https://github.com/metacartel/hydra-DAO/blob/main/Whitepaper.pdf",
  },
  {
    label: "Taco Townhall every Tuesday (6pm CEST)",
    action: "Members Only",
    icon: "key",
    color: "brand.taco",
    url: DISCORD_INVITE_URL,
  },
  {
    label: "Public Nouns Launching Soon™️",
    action: "Play on Testnet",
    icon: "shopping-cart",
    color: "brand.green",
    url: "https://publicnouns.wtf",
  },
]

export const MetaTicker: React.FC<FlexProps> = (props) => (
  <Flex {...props} position="relative" borderBottom="4px" borderColor="brand.red">
    <Flex maxW="100vw" overflowX="scroll">
      <HorizontalTicker duration={25000} delay={1000}>
      {actionItems.map(({ label, action, icon, color, url }) => (
        <CtaItem label={label} action={action} icon={icon} color={color} url={url} key={label} />
      ))}
      </HorizontalTicker>
    </Flex>
  </Flex>
)