import { BoxProps, Button, Flex, Heading, HStack, Image, Text  } from '@chakra-ui/react'
import { IconButton } from './'

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
      borderTopWidth={0}
      borderRightWidth={2}
      borderBottomWidth={2}
      borderLeftWidth={2}
      borderStyle={'solid'} 
      justifyContent={'space-between'}
      alignItems={'center'}
      direction={{base: 'column', md: 'row'}}
      p={'25'}
      gap={24}
      border="2px solid"
      borderColor={color}
      color="white"
      bg='brand.black'
      _hover={{transform: 'scale(1.01)', transition: 'transform 0.2s ease-in-out'}}
      transform="scale(1)"
      transition='transform 0.2s ease-in-out'
      {...props}
    >    
      <Heading me='auto' fontSize={'md'}>{title}</Heading>
      <Text>{date && date} </Text>
      <Text>{amount && amount}</Text>
      <IconButton
        icon="spaceship"
        title={url ? 'Website' : 'No link'}
        disabled={!url}
        color={color}
        mt="auto"
        _hover={{bg: 'brand.red', color: 'white'}}
      />
    </Flex>
  )
}
