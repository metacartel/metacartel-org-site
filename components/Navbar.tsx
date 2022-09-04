import { Flex, Box, Text, Link, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"
import { ConnectButton, MobileMenu } from "./"
import { PAGE_PATHS } from "../constants"

export const Navbar: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 62em)");
  const border = "6px solid"
  const size = isDesktop ? "36px" : "30px"
  return (
    <Flex
      bg="brand.black"
      direction={{ base: "column-reverse", lg: "row" }}
      alignItems="center"
      borderBottom={border}
      borderColor="brand.black"
      w="100%"
    >
      <Flex justifyContent="flex-end" flex={1} bg="bg" color="fg" width="100%">
        <Flex w="100%" flex={1} maxW={{ base: "100%", lg: "halfContainer" }}>
          <Box flex={1} py={[4, null, 6]} px={6} borderEnd={border}>
            <Link href="/" display="inline-block">
              <Text fontFamily="heading" fontSize={size} fontWeight="700">
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
      <Flex flex={1} justifyContent="flex-start" w="100%">
        <Flex
          alignItems="center"
          gap={6}
          py={[4, null, 6]}
          px={6}
          justifyContent={{ base: "space-between", lg: "flex-end" }}
          color="brand.red"
          maxW={{ base: "100%", lg: "halfContainer" }}
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
