import {
  Flex,
  HStack,
  Box,
  Button,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  VStack,
  Link,
  propNames,
} from "@chakra-ui/react"
import { BrandJsonLd, DatasetJsonLd } from "next-seo"

const siteLinks = [
  { name: "Ecosystem", to: "#" },
  { name: "Grants", to: "#" },
  { name: "Lore", to: "#" },
  { name: "Manifesto", to: "#" },
]

const socialLinks = [
  { name: "Twitter", to: "#" },
  { name: "Discord", to: "#" },
  { name: "Forum", to: "#" },
  { name: "DAO", to: "#" },
]

export const Footer = () => {
  return (
    <Flex
      flexDirection={"column"}
      p={25}
      w={"100%"}
      justifyContent={"flex-start"}
      bg={"black"}
      color={"brand.red"}
    >
      <Flex maxWidth={"420px"} margin={"0 auto"} py={25}>
        <Heading as="h4" alignSelf={"center"} fontSize="2xl">
          MetaCartel
        </Heading>
      </Flex>
      <SimpleGrid
        columns={[1, null, 2]}
        spacing={25}
        alignSelf={"flex-start"}
        maxWidth={"420px"}
        margin={"0 auto"}
      >
        <VStack>
          {siteLinks.map((link) => (
            <Link href={link.to}>{link.name}</Link>
          ))}
        </VStack>
        <VStack>
          {socialLinks.map((link) => (
            <Link href={link.to}>{link.name}</Link>
          ))}
        </VStack>
      </SimpleGrid>
    </Flex>
  )
}
