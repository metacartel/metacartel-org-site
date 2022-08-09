import { BoxProps, Button, Flex, Heading, HStack, Image, Text  } from '@chakra-ui/react'

interface GrantItemProps extends BoxProps {
  title: string
  date?: string
  url?: string
  amount?: string
}

export const GrantItem = ( props: GrantItemProps ) => {

  const { date, title, url, amount } = props

  return (
    <Flex
      borderTopWidth={0}
      borderRightWidth={2}
      borderBottomWidth={2}
      borderLeftWidth={2}
      borderColor="brand.black"
      borderStyle={'solid'} 
      justifyContent={'space-between'}
      alignItems={'center'}
      direction={{base: 'column', md: 'row'}}
      p={'25'}
      gap={24}
    >    
      <Heading me='auto' fontSize={'md'}>{title}</Heading>
      <Text>{date && date} </Text>
      <Text>{amount && amount}</Text>
      <Button
        as='a'
        borderWidth={2}
        borderColor="brand.black"
        borderStyle={'solid'}
        marginTop={'auto'}
        px={4}
        py={2}
        whiteSpace="nowrap"
        bg='none'
        cursor='pointer'
        _hover={{bg: 'brand.black', color: 'white'}}
        href={url}
        target={'_blank'}
        disabled={!url}
      >
        {url ? 'Website' : 'No link'}
      </Button>
    </Flex>
  )
}
