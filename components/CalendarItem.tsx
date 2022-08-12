import { BoxProps, Button, Heading, Flex, Text } from "@chakra-ui/react"
import { IconButton } from "./"

interface CalendarItemProps extends BoxProps {
  start: string
  end: string
  title: string
  desc: string
  url: string
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
      border={`2px solid`}
      borderColor={color}
      p={"25"}
      flex="1"
      flexBasis="100%"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.2s ease-in-out",
      }}
      transform="scale(1)"
      transition="transform 0.2s ease-in-out"
    >
      <Flex direction="column" flex="2 2 auto">
        <Text>
          {start}
          {end !== start ? <span>- {end}</span> : null}
        </Text>
        <Flex direction="column" flex="1 1">
          <Heading as="h3" fontSize="3xl" fontWeight="bold">
            {title}
          </Heading>
        </Flex>
        <Text paddingTop={4} mb="auto">
          {desc}
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" width="100%" flex="1 1" paddingTop={12}>
        <IconButton
          href={url}
          title="View"
          icon="spaceship"
          color={color}
          mt="2rem"
          w="100%"
        />
      </Flex>
    </Flex>
  )
}
