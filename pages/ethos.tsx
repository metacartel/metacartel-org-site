import { FC } from "react"
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { PageMetadata } from "../components"

const Ethos: FC = () => {
  const width = `clamp(min(100%, 300px), 90%, 922px)`
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
        {/* Hero */}
        <Flex
          mx={{ base: 6, xl: 'auto' }}
          direction="column"
          alignItems="center"
          maxW="fit-content"
          gap={2}
          position="relative"
        >
          <Image
            src="/images/ethos/ethos-title.svg"
            height="182px"
            width="794px"
            alt="ETHos logo"
          />
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize="2xl"
            ms="auto"
            me={8}
            color="black"
          >
            a chili pod powered by MetaCartel
          </Text>
        </Flex>
        {/* Description */}
        <Box
          mx={{ base: 6, xl: 'auto' }}
          w={width}
          bg="black"
          color="mix.purp.200"
          px={16}
          py={8}
          position="relative"
          _after={{
            content: '""',
            bgImage: "url('/images/ethos/glyph-pile.svg')",
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
            bg: 'mix.purp.200',
            zIndex: -1,
            border: '3px solid black',
          }}
        >
          <Text
            fontFamily="hero"
            fontSize="3rem"
          >
            ETHos is an incubator for Ethereum IRL events
          </Text>
        </Box>
        {/* Who are we? */}
        <Box
          mx={{ base: 6, xl: 'auto' }}
          w={width}
          bg="black"
          color="mix.teal.400"
          px={16}
          py={8}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            translate: '-2rem 2rem',
            bg: 'mix.teal.400',
            zIndex: -1,
            border: '3px solid black',
          }}
        >
          <Flex gap={8}>
            <Text
              fontFamily="heading"
              fontWeight="bold"
              fontSize="4xl"
              color="white"
              whiteSpace="nowrap"
            >
              Who are we?
            </Text>
            <Box
              w="full"
              bgImage="url('/images/ethos/ethos-smile.svg')"
              bgSize="3rem"
              bgRepeat="space"
              bgPosition="center"
              color="mix.teal.400"
            />
          </Flex>
          <Text
            fontFamily="body"
            fontSize="3xl"
          >
            An experienced group of global event organizers and community builders funding experiments in physical gathering spaces and community building Ethereum events
          </Text>
        </Box>
        {/* What are we up to? */}
        <Box
          mx={{ base: 6, xl: 'auto' }}
          w={width}
          bg="black"
          color="brand.taco"
          px={16}
          py={8}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            translate: '2rem 2rem',
            bg: 'brand.taco',
            zIndex: -1,
            border: '3px solid black',
          }}
        >
          <Flex gap={8}>
            <Box
              w="full"
              bgImage="url('/images/ethos/ethos-star.svg')"
              bgSize="3rem"
              bgRepeat="space"
              bgPosition="center"
              color="brand.taco"
            />
            <Text
              fontFamily="heading"
              fontWeight="bold"
              fontSize="4xl"
              color="white"
              whiteSpace="nowrap"
            >
              What are we up to?
            </Text>
          </Flex>
          <Text
            fontFamily="body"
            fontSize="3xl"
            textAlign="end"
          >
            Our mission is to identify global events that unite groups of diverse humans, exploring the intersections of Web3 technologies and human reality. ETHos is enabled by a small and focused distributed team of 6 members that have been working together to surface and review applications for funding values-aligned Ethereum events.
          </Text>
        </Box>
        {/* Calls to action */}
        <Flex gap={8} w={width}>
          {/* Want to apply for a grant? Apply*/}
          <Flex
            mx={{ base: 6, xl: 'auto' }}
            bg="black"
            color="mix.teal.400"
            p={8}
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              inset: 0,
              translate: '-2rem 2rem',
              bg: 'mix.teal.400',
              zIndex: -1,
              border: '3px solid black',
            }}
          >
            <Flex gap={8}>
              <Text
                fontFamily="heading"
                fontWeight="bold"
                fontSize="2xl"
                color="white"
              >
                Want to apply for a grant?
              </Text>
              {/* TODO: Wrap in Typeform link */}
              <Grid
                position="relative"
                border="3px solid black"
                bg="mix.teal.400"
                px={4}
                placeItems="center"
                _after={{
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  translate: '1.5rem 1.5rem',
                  bgImage: "url('/images/ethos/chili-decorator.svg')",
                  bgRepeat: 'no-repeat',
                  backgroundPosition: 'right',
                }}
              >
                <Text
                  fontSize="2xl"
                  color="black"
                  fontFamily="a"
                >
                  apply
                </Text>
              </Grid>
            </Flex>
          </Flex>
          {/* Want to help? Sponsor */}
          <Flex
            mx={{ base: 6, xl: 'auto' }}
            bg="black"
            color="mix.purp.200"
            p={8}
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              inset: 0,
              translate: '2rem 2rem',
              bg: 'mix.purp.200',
              zIndex: -1,
              border: '3px solid black',
            }}
          >
            <Flex gap={8}>
              <Text
                fontFamily="heading"
                fontWeight="bold"
                fontSize="2xl"
                color="white"
              >
                Want to help?
              </Text>
              {/* TODO: Wrap in Typeform link */}
              <Grid
                position="relative"
                border="3px solid black"
                bg="mix.purp.200"
                px={4}
                placeItems="center"
                _after={{
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  translate: '1.5rem 1.5rem',
                  bgImage: "url('/images/ethos/chili-decorator.svg')",
                  bgRepeat: 'no-repeat',
                  backgroundPosition: 'right',
                }}
              >
                <Text
                  fontSize="2xl"
                  color="black"
                  fontFamily="a"
                >
                  sponsor
                </Text>
              </Grid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Ethos
