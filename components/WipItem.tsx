import { BoxProps, Flex, Heading, Text } from "@chakra-ui/react"
import { IconButton } from "./"
interface WipItemProps extends BoxProps {
  status: string
  title: string
  desc: string
  url: string
  color: string
}

export const WipItem = ({
  color,
  status,
  title,
  desc,
  url,
  ...props
}: WipItemProps) => {
  return (
    <Flex
      flexDirection="column"
      minHeight={"200px"}
      color="white"
      border={`2px solid`}
      borderColor={color}
      padding={8}
      gap={2}
      flex="1"
      flexBasis="100%"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.2s ease-in-out",
      }}
      transform="scale(1)"
      transition="transform 0.2s ease-in-out"
      {...props}
    >
      <Flex direction="column" flex="2 2 auto">
        <Text>
          <small>{status}</small>
        </Text>
        <Flex direction="column" flex="1 1">
          <Heading as="h3" fontSize="3xl" fontWeight="bold">
            {title}
          </Heading>
          <Text paddingTop={4} mb="auto">
            {desc}
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" width="100%" flex="1 1" paddingTop={12}>
        <IconButton icon="spaceship" title="Visit" color={color} mt="2rem" />
      </Flex>
    </Flex>
  )
}
