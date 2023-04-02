import { Flex, Box, Text, Link } from "@chakra-ui/react"
import Image from "next/image"
import { ConnectButton, MobileMenu } from "./"
import { PAGE_PATHS } from "../constants"

export const Navbar: React.FC = () => {
  const border = "6px solid"
  return (
    <Flex
      bg="brand.black"
      direction={{ base: "column-reverse", lg: "row" }}
      alignItems="center"
      borderBottom={border}
      borderColor="brand.black"
      w="100%"
    >
      <Flex justifyContent="flex-end" flex={2} bg="bg" color="fg" width="100%">
        <Flex
          w="100%"
          flex={1}
          maxW={{
            base: "100%",
            lg: "calc(var(--chakra-sizes-container)*(2/5))",
          }}
        >
          <Box flex={1} py={[4, null, 6]} px={6} borderEnd={border}>
            <Link href="/" display="inline-block">
              <Text
                fontFamily="heading"
                fontSize={{ base: "30px", lg: "36px" }}
                fontWeight="700"
              >
                MetaCartel
              </Text>
            </Link>
          </Box>
          <Flex
            py={[4, null, 6]}
            px={6}
            height="100%"
            width="90px"
            boxSizing="border-box"
          >
            <Image
              src="/chili-pixel.svg"
              height="42px"
              width="42px"
              alt="Pixel art chili logo"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={3} justifyContent="flex-start" w="100%">
        <Flex
          alignItems="center"
          gap={6}
          py={[4, null, 6]}
          px={6}
          justifyContent={{ base: "space-between", lg: "flex-end" }}
          color="brand.red"
          maxW={{
            base: "100%",
            lg: "calc(var(--chakra-sizes-container)*(3/5))",
          }}
          flex={1}
          position="relative"
        >
          <MobileMenu />
          {PAGE_PATHS.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              display={{ base: "none", lg: "inline-block" }}
            >
              {name}
            </Link>
          ))}
          <ConnectButton />
        </Flex>
      </Flex>
    </Flex>
  )
}
