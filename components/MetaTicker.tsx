import { Flex, FlexProps } from '@chakra-ui/react'
import { HorizontalTicker } from 'react-infinite-ticker'
import { CtaItem  } from './'

const actionItems = [
  {
    label: 'MCON2: Get your spicy DAO fix',
    icon: 'mountains',
    color: 'brand.sun',
    url: 'https://mcon.fun',
  },
  {
    label: 'Hydra is Rising',
    action: 'View Whitepaper',
    icon: 'sword',
    color: 'brand.purp',
    url: 'https://github.com/metacartel/hydra-DAO/blob/main/Whitepaper.pdf',
  },
  {
    label: 'Taco Townhall every Tuesday (6pm CEST)',
    action: 'Members Only',
    icon: 'key',
    color: 'brand.taco',
    url: 'https://discord.gg/3CUVkcaF',
  },
  {
    label: 'Public Nouns Launching Soon™️',
    action: 'Check for Auction',
    icon: 'shopping-cart',
    color: 'brand.green',
    url: 'https://publicnouns.wtf',
  },
]

export const MetaTicker: React.FC<FlexProps> = (props) => (
  <Flex {...props} position='relative' borderBottom="4px" borderColor="brand.red">
    <Flex maxW="100vw" overflowX='scroll'>
      <HorizontalTicker duration={25000}>
      {actionItems.map(({ label, action, icon, color, url }) => (
        <CtaItem label={label} action={action} icon={icon} color={color} url={url} key={label} />
      ))}
      </HorizontalTicker>
    </Flex>
  </Flex>
)