import { Flex, Box, Heading, Link } from "@chakra-ui/react"
import Image from "next/image"
import { CustomConnectButton, IconButton, MobileMenu } from "./"
import { PAGE_PATHS } from "../constants"

export const Navbar: React.FC = () => {
  const border = "6px solid"
  const size = "36px"
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
            <Link href="/">
              <Heading as="h1" fontSize={size} fontWeight="700">
                MetaCartel
              </Heading>
            </Link>
          </Box>
          <Box
            py={[4, null, 6]}
            px={6}
            height={size}
            width={size}
            boxSizing="content-box"
          >
            <Image
              src="/chili-pixel.svg"
              height={size}
              width={size}
              alt="Pixel art chili logo"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex flex={1} justifyContent="flex-start" w="100%">
        <Flex
          alignItems="center"
          gap={6}
          py={[4, null, 6]}
          px={8}
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
          {/* <IconButton icon="key" title="Connect" color="brand.red" /> */}
          {/* <CustomConnectButton /> */}
        </Flex>
      </Flex>
    </Flex>
  )
}
