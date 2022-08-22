import { Box, Flex, Text, Link, FlexProps } from '@chakra-ui/react'
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
  action = 'Visit Website',
  icon,
  color,
  url,
  ...props
}) => (
  <Flex
    gap={3}
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
      color='brand.white'
      maxW='40ch'
      overflowX='hidden'
      textOverflow='ellipsis'
    >
      {label}
    </Text>
   <Link href={url} isExternal={url?.startsWith('http')} fontFamily='button' display={'flex'}>
      {action} <Box ml={2}><Icon ml={5} name={icon as IconName} /></Box>
    </Link>
  </Flex>
)