import {
  Flex,
  SimpleGrid,
  Text,
  VStack,
  Link,
  FlexProps,
} from "@chakra-ui/react"
import { PAGE_PATHS, SOCIAL_LINKS } from "../constants"

export const Footer: React.FC<FlexProps> = () => (
  <Flex
    as="footer"
    flexDirection="column"
    py={3}
    pb={12}
    w="100%"
    color="brand.red"
    justifyContent="center"
  >
    <Flex py={25} justifyContent="center">
      <Link
        href="/#"
        _hover={{ textDecoration: "none", transform: "scale(1.05)" }}
      >
        <Text
          as="span"
          fontFamily="heading"
          textAlign="start"
          fontWeight="bold"
          fontSize="2xl"
        >
          MetaCartel
        </Text>
      </Link>
    </Flex>
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={25} alignSelf="center">
      <VStack>
        {PAGE_PATHS.map(({ name, path }) => (
          <Link href={path} key={name}>
            {name}
          </Link>
        ))}
      </VStack>
      <VStack>
        {SOCIAL_LINKS.map(({ name, url }) => (
          <Link href={url} key={name}>
            {name}
          </Link>
        ))}
      </VStack>
    </SimpleGrid>
  </Flex>
)
