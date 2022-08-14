import { Flex, Text, Link, FlexProps } from '@chakra-ui/react'
import { Icon, IconName } from './'

interface CtaItemProps extends FlexProps {
  label: string
  action?: string
  icon: string
  color: string
  url: string
}
export const CtaItem: React.FC<CtaItemProps> = ({
  label,
  action = 'Visit website',
  icon,
  color,
  url,
  ...props
}) => (
  <Flex
    gap={2}
    borderEnd="1px"
    borderColor='brand.purp'
    color={color}
    py={3}
    px={6}
    whiteSpace="nowrap"
    fontSize="sm"
    {...props}
  >
    {/* TODO: Replace brand.offWhite with brand.white when merged in */}
    <Text
      fontFamily='heading'
      letterSpacing="0.03em"
      color='brand.offWhite'
      maxW='40ch'
      overflowX='hidden'
      textOverflow='ellipsis'
    >
      {label}
    </Text>
   <Link href={url} isExternal={url?.startsWith('http')} fontFamily='button'>
      {action}
    </Link>
    <Icon name={icon as IconName} />
  </Flex>
)