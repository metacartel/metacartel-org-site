import { BoxProps, Button, Flex, HStack, Image, Text  } from '@chakra-ui/react'

interface GrantItemProps extends BoxProps {
  date: string
  title: string
  desc: string
  url: string
  amount: string
}

export const GrantItem = ( props: GrantItemProps ) => {

  const { date, title, desc, url, amount } = props

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
    p={'25'}>    
      <Text as={'h3'}>{title}</Text>
      <Text>{desc}</Text>
      <Text>
          {date} 
      </Text>
      <Text>{amount}</Text> 
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
      >
        Website
      </Button>
    </Flex>
  )
}
