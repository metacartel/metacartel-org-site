import { BoxProps, Flex, Heading, Text  } from '@chakra-ui/react'
import { IconButtonLink } from './'
interface WipItemProps extends BoxProps {
  status: string
  title: string
  desc: string
  url: string
  color: string
}

export const WipItem = ({ color, status, title, desc, url, ...props }: WipItemProps ) => {
  return (
    <Flex
      flexDirection="column" 
      minHeight={'200px'} 
      color="white"
      border='2px'
      borderColor={color}
      p={5}
      _hover={{transform: 'scale(1.02)', transition: 'transform 0.2s ease-in-out'}}
      transform="scale(1)"
      transition='transform 0.2s ease-in-out'
      {...props}
    >
      <Text fontSize={'sm'}>
        {status}
      </Text>
      <Heading fontSize={'2xl'} mt={4}>{title}</Heading>
      <Text mt={4} mb={8}>{desc}</Text>
      <Flex mt='auto' justify='end'>
        <IconButtonLink icon="spaceship" title="Visit" color={color} href={url} />
      </Flex>
    </Flex>
  )
}
