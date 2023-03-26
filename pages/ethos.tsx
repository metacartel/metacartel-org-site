import { FC } from "react"
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { PageMetadata } from "../components"

const Ethos: FC = () => {
  return (
    <Flex flexDirection="column" w="100%">
      <PageMetadata title="ETHos" description="ETHos is an incubator for Ethereum IRL events" />
      <Flex
        py={24}
        bg="red.400"
        direction="column"
        alignItems="center"
        gap={16}
        zIndex={1}
        position="relative"
      >
        <Flex
          mx={{ base: 6, xl: 'auto' }}
          direction="column"
          alignItems="center"
          maxW="fit-content"
          gap={2}
          position="relative"
        >
          <Image
            src="/ethos-title.svg"
            height="182px"
            width="794px"
            alt="ETHos logo"
          />
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="24px"
            ms="auto"
            me={8}
          >a chili pod powered by MetaCartel</Text>
        </Flex>
        <Box
          mx={{ base: 6, xl: 'auto' }}
          bg="black"
          color="brand.purp"
          px={16}
          py={4}
          position="relative"
          _after={{
            content: '""',
            bgImage: "url('/glyph-pile.svg')",
            bgRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            position: 'absolute',
            insetInline: -20,
            insetBlock: -8,
            zIndex: 1,
          }}
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            translate: '2rem 2rem',
            bg: 'brand.purp',
            zIndex: -1,
            border: '3px solid black',
          }}
        >
          <Text fontFamily="hero" fontSize="3rem">ETHos is an incubator for Ethereum IRL events</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Ethos
