import { BoxProps, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { IconButton } from "./"

interface CalendarItemProps extends BoxProps {
  start: string
  end: string
  title: string
  desc: string
  url?: string
  color: string
}

export const CalendarItem: React.FC<CalendarItemProps> = ({
  start,
  end,
  title,
  desc,
  url,
  color,
  ...props
}: CalendarItemProps) => {
  return (
    <Flex
      flexDirection="column"
      minHeight={"200px"}
      color="white"
      border="2px"
      borderColor={color}
      p={5}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.2s ease-in-out",
      }}
      transform="scale(1)"
      transition="transform 0.2s ease-in-out"
      // {...props}
    >
      <Text fontSize={"sm"}>
        {start}
        {end !== start ? <span> - {end}</span> : null}
      </Text>
      <Heading fontSize={"2xl"} mt={4}>
        {title}
      </Heading>
      <Text mt={4} mb={8}>
        {desc}
      </Text>
      {url && (
        <IconButton
          href={url}
          icon="spaceship"
          title="View"
          color={color}
          mt="2rem"
          w="100%"
          _hover={{ bg: "brand.purp", color: "white" }}
        />
      )}
    </Flex>
  )
}
