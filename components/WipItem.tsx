import { BoxProps, Button, Flex, Heading, Text  } from '@chakra-ui/react'

interface WipItemProps extends BoxProps {
  status: string
  title: string
  desc: string
  url: string
}

export const WipItem = ( props: WipItemProps ) => {

  const { status, title, desc, url } = props

  return (
    <Flex flexDirection="column" 
    minHeight={'200px'} 
    borderWidth={2}
    borderColor="brand.black"
    borderStyle={'solid'} 
    p={'25'}>
      <Text fontSize={'sm'}>
          {status}
      </Text>
      <Heading fontSize={'2xl'} mt={4}>{title}</Heading>
      <Text mt={4} mb={8}>{desc}</Text>
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
        View
      </Button>
    </Flex>
  )
}
