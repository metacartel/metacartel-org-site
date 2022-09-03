import { Flex, FlexProps, Heading, Text  } from "@chakra-ui/react"
import { IconButtonLink, IconButton } from "./"

interface GrantItemProps extends FlexProps {
  title: string
  date?: string
  url?: string
  amount?: string
  color: string
}

export const GrantItem = ({ date, title, url, amount, color, ...props }: GrantItemProps ) => {
  // TODO: Convert ETH-denominated grant amounts to DAI in Airtable, then remove this logic and only use "DAI"
  const getUnitFromAmount = (amount: string) => parseInt(amount) < 16 ? "ETH" : "DAI"
  return (
    <Flex
      alignItems={{ base: "start", md: "center"}}
      direction={{base: "column", md: "row"}}
      p={6}
      gap={{base: 4, md: 24 }}
      border="2px solid"
      borderColor={color}
      color="white"
      _notLast={{ borderBottom: 0 }}
      _hover={{ bg: "whiteAlpha.100" }}
      {...props}
    >    
      <Heading as="h3" me="auto" fontSize="md">{title}</Heading>
      {/* Remove from DOM on mobile if values not available */}
      {date && <Text display={{ base: "inherit", md: "none"}}>{date}</Text>}
      {amount && <Text display={{ base: "inherit", md: "none"}}>{amount} {getUnitFromAmount(amount)}</Text>}
      {/* Hide, but occupy space on desktop if values not available */}
      <Text display={{ base: "none", md: "inherit"}} fontFamily="mono">{date && date}</Text>
      <Text display={{ base: "none", md: "inherit"}} fontFamily="mono">{amount && `${amount} ${getUnitFromAmount(amount)}`}</Text>
      {url ? (
        <IconButtonLink
          icon="spaceship"
          title="Website"
          href={url}
          color={color}
          isExternal
        />
      ) : (
        <IconButton
          icon="spaceship"
          title="No link"
          color={color}
          disabled
        />
      )}
    </Flex>
  )
}
