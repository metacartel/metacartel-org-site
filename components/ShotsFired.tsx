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
        Shots Fired #56
      </Text>
      <Text
        as="p"
        fontFamily="Helvetica"
        fontWeight="900"
        letterSpacing="tighter"
        color="fg"
        textTransform="uppercase"
      >
        MCON2 labor edition, pre merge
      </Text>
      <Link
        href="https://dapp.substack.com/p/shots-fired-56"
        isExternal
        fontFamily="Helvetica"
        fontWeight="900"
        letterSpacing="tighter"
        color="fg"
        fontSize="1.5rem"
        _hover={{ color: "brand.red", textDecoration: "underline" }}
      >
        Read More
      </Link>
    </Flex>
  </Flex>
)