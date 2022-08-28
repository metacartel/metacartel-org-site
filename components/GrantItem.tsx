import { BoxProps, Button, Flex, Heading, HStack, Image, Text  } from '@chakra-ui/react'
import { IconButtonLink, IconButton } from './'

interface GrantItemProps extends BoxProps {
  title: string
  date?: string
  url?: string
  amount?: string
  color: string
}

export const GrantItem = ({ date, title, url, amount, color, ...props }: GrantItemProps ) => {
  return (
    <Flex
      alignItems={{ base: 'start', md: 'center'}}
      direction={{base: 'column', md: 'row'}}
      p={6}
      gap={{base: 4, md: 24 }}
      border="2px solid"
      borderColor={color}
      color="white"
      _notLast={{ borderBottom: 0 }}
      _hover={{ bg: 'whiteAlpha.100' }}
      {...props}
    >    
      <Heading me='auto' fontSize={'md'}>{title}</Heading>
      {/* Remove from DOM on mobile if values not available */}
      {date && <Text display={{ base: 'inherit', md: 'none'}}>{date}</Text>}
      {amount && <Text display={{ base: 'inherit', md: 'none'}}>{amount} DAI</Text>}
      {/* Hide, but occupy space on desktop if values not available */}
      <Text display={{ base: 'none', md: 'inherit'}}>{date && date}</Text>
      <Text display={{ base: 'none', md: 'inherit'}}>{amount && amount} DAI</Text>
      {url ? (
        <IconButtonLink
          icon='spaceship'
          title='Website'
          href={url}
          color={color}
          isExternal
        />
      ) : (
        <IconButton
          icon="spaceship"
          title='No link'
          color={color}
          disabled
        />
      )}
    </Flex>
  )
}
