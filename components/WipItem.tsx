import { BoxProps, Flex, Text  } from '@chakra-ui/react'
import { IconButton } from './'
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
      border={`2px solid`}
      borderColor={color}
      p={'25'}
      _hover={{transform: 'scale(1.02)', transition: 'transform 0.2s ease-in-out'}}
      transform="scale(1)"
      transition='transform 0.2s ease-in-out'
      {...props}
    >
      <Text>
        <small>
          {status}
        </small>
      </Text>
      <h3>{title}</h3>
      <Text mb="auto">{desc}</Text>
      <IconButton icon="spaceship" title="Visit" color={color} mt="2rem"/>
    </Flex>
  )
}
