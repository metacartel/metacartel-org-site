import { BoxProps, Button, Flex, Text  } from '@chakra-ui/react'
import { IconButton } from './'

interface CalendarItemProps extends BoxProps {
  start: string
  end: string
  title: string
  desc: string
  url: string
  color: string
}

export const CalendarItem: React.FC<CalendarItemProps> = ({ start, end, title, desc, url, color, ...props }: CalendarItemProps ) => {
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
      // {...props}
    >
      <Text>
          {start} 
      { end !== start ? (<span>- {end}</span>): null}
      </Text>
      <h3>{title}</h3>
      <Text mb="auto">{desc}</Text>
      <IconButton href={url} icon="spaceship" title="View" color={color} mt="2rem" w="100%"/>
    </Flex>
  )
}
