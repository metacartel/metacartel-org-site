import { Flex, FlexProps, Button, ButtonProps } from '@chakra-ui/react'
import { CtaItem, Icon, IconName } from './'

const actionItems = [
  {
    label: 'Taco Tuesday lorem ipsum dolor sit amet',
    action: 'Find tacos',
    icon: 'shopping-cart',
    color: 'brand.taco',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday lorem',
    // action: 'Find tacos',
    icon: 'shield',
    color: 'brand.sun',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday lorem ipsum dolor sit amet consectetur',
    action: 'Find tacos',
    icon: 'cup',
    color: 'brand.green',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday lorem ipsum dolor sit amet adipisicing',
    // action: 'Find tacos',
    icon: 'goal',
    color: 'brand.teal',
    url: 'https://tacotuesday.com',
  },
  {
    label: 'Taco Tuesday',
    action: 'Find tacos',
    icon: 'joystick',
    color: 'brand.purp',
    url: 'https://tacotuesday.com',
  },
]

interface NavButtonProps extends ButtonProps {
  isLeft?: boolean
}
const NavButton: React.FC<NavButtonProps> = ({isLeft=false, ... props}) => (
  <Button
    bg='brand.offWhite'
    color="brand.red"
    position='absolute'
    borderRadius='none'
    transform={isLeft && 'scale(-1)'}
    left={isLeft ? '0' : 'auto'}
    right={isLeft ? 'auto' : '0'}
    height="100%"
    width='fit-content'
    px={3}
    {...props}
  >
    <Icon name={"play" as IconName} />
  </Button>
)

export const CtaScrollBar: React.FC<FlexProps> = (props) => {
  return (
    <Flex {...props} position='relative' borderBottom="4px" borderColor="brand.red" maxW="100vw">
      {/* TODO: Wire up logic for buttons */}
      <NavButton isLeft />
      <NavButton />
      {actionItems.map(({ label, action, icon, color, url }) => (
        <CtaItem label={label} action={action} icon={icon} color={color} url={url} />
      ))}
    </Flex>
  )
}