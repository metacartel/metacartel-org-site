import { Flex, FlexProps, Heading, Text  } from "@chakra-ui/react"
import { IconButtonLink } from "./"

interface CalendarItemProps extends FlexProps {
  start: string
  end: string
  title: string
  desc: string
  location?: string
  url?: string
  color: string
}

export const CalendarItem: React.FC<CalendarItemProps> = ({
  start,
  end,
  title,
  desc,
  location,
  url,
  color,
  ...props
}: CalendarItemProps) => (
  <Flex
    flexDirection="column"
    minHeight="200px"
    color="white"
    border="2px"
    borderColor={color}
    p={5}
    _hover={{
      transform: `scale(${url ? 1.02 : 1})`,
      transition: "transform 0.2s ease-in-out",
    }}
    transform="scale(1)"
    transition="transform 0.2s ease-in-out"
    {...props}
  >
    <Text fontSize="sm">
      {start}
      {end !== start ? <span> - {end}</span> : null}
    </Text>
    <Heading as="h3" fontSize="2xl" mt={4}>{title}</Heading>
    <Text mt={4} mb={8}>{location || desc}</Text>
    {url && (
      <Flex mt="auto" justify="end">
        <IconButtonLink href={url} icon="spaceship" title="View" color={color} />
      </Flex>
    )}
  </Flex>
)

