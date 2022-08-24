import { useState } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import { CtaItem, Icon, IconName } from './'

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

interface NavIndicatorProps extends FlexProps {
  isLeft?: boolean
  isScrolledLeft?: boolean
  isScrolledRight?: boolean
}
const NavIndicator: React.FC<NavIndicatorProps> = (props) => (
  <Flex
    bg='whiteAlpha.900'
    color="brand.red"
    position='absolute'
    borderRadius='none'
    height="100%"
    width='fit-content'
    p={3}
    transition="transform 0.2s ease-in-out"
    {...props}
  >
    <Icon name={"play" as IconName} />
  </Flex>
)

export const CtaScrollBar: React.FC<FlexProps> = (props) => {
  const [showRightNav, setShowRightNav] = useState(true)
  const [showLeftNav, setShowLeftNav] = useState(false)
  const handleScroll = ({ target }) => {
    const { scrollLeft, scrollWidth, clientWidth } = target
    const TOLERANCE = 16
    if (scrollLeft < TOLERANCE) {
      setShowRightNav(true)
      return
    } 
    if (scrollLeft > scrollWidth - clientWidth - TOLERANCE) {
      setShowLeftNav(true)
      return
    }
    setShowRightNav(false)
    setShowLeftNav(false)
  }
  return (
    <Flex {...props} position='relative' borderBottom="4px" borderColor="brand.red">
      <NavIndicator transform={`scale(-1) translateX(${showLeftNav ? '0' : '100%'})`} left='0' />
      <NavIndicator transform={`translateX(${showRightNav ? '0' : '100%'})`} right='0' />
      <Flex maxW="100vw" overflowX='scroll' onScroll={handleScroll}>
        {actionItems.map(({ label, action, icon, color, url }) => (
          <CtaItem label={label} action={action} icon={icon} color={color} url={url} key={label} />
        ))}
      </Flex>
    </Flex>
  )
}