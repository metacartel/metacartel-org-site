import { Flex, Text, Link } from "@chakra-ui/react";

export const ShotsFired = () => (
  <Flex
    bg="white url(/dot-pattern.svg) repeat"
    p={[6, 8, 10, 12]}
    border="2px"
    borderColor="fg"
    borderTop="none"
    flex={1}
  >
    <Flex
      direction="column"
      bg="bg"
      border="8px"
      borderColor="fg"
      p={8}
      gap={3}
      w="100%"
    >
      <Text
        as="h2"
        fontFamily="MexicanTequila"
        fontSize="6xl"
        color="fg"
        lineHeight="90%"
      >
        MCON 2
      </Text>
      <Text
        as="p"
        fontFamily="Helvetica"
        fontWeight="900"
        letterSpacing="tighter"
        color="fg"
        textTransform="uppercase"
      >
        Get Your Spicy DAO Fix. SEPT 6-9 DENVER, CO
      </Text>
      <Link
        href="https://mcon.fun"
        isExternal
        fontFamily="Helvetica"
        fontWeight="900"
        letterSpacing="tighter"
        color="fg"
        fontSize="1.5rem"
        _hover={{ color: "brand.red", textDecoration: "underline" }}
      >
        mcon.fun
      </Link>
    </Flex>
  </Flex>
)