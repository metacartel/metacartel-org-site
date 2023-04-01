import { FC } from "react"
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { PageMetadata, InfoCard, ButtonLink, CtaCard } from "../components"

const Ethos: FC = () => {
  const width = `clamp(min(100%, 300px), 90%, 900px)`
  return (
    <Flex flexDirection="column" w="100%">
      <PageMetadata
        title="ETHos"
        description="ETHos is an incubator for Ethereum IRL events"
      />
      <Flex
        py={[16, 24]}
        bg="mix.red.400"
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
            width="794px"
            height="auto"
            alt="ETHos"
            aria-label="ETHos"
          />
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
            translate: { base: '1rem 1rem', md: '2rem 2rem' },
            bg: 'mix.purp.200',
            zIndex: -1,
            border: '3px solid black',
          }}
        >
          <Text
            fontFamily="hero"
            fontSize={{ base: '3xl', md: "4xl" }}
            textAlign="center"
          >
            An incubator for IRL Ethereum events
          </Text>
        </Box>

        {/* Calls to action */}
        <Grid
          columnGap={8}
          rowGap={16}
          w={width}
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        >
          <CtaCard
            color="mix.teal.400"
            prompt="Receive Support"
            toLeft
          >
            <ButtonLink color="mix.teal.400" href="https://form.typeform.com/to/tzG1SW15">
            Apply
            </ButtonLink>
          </CtaCard>

          <CtaCard
            color="mix.purp.200"
            prompt="Contribute Support"
          >
            <ButtonLink color="mix.purp.200" href="https://form.typeform.com/to/M3PIyVhn">
              Sponsor
            </ButtonLink>
          </CtaCard>
        </Grid>

        {/* Cards */}
        <InfoCard
          color="mix.teal.400"
          title="Who are we?"
          imagePath="/images/ethos/ethos-smile.svg"
          width={width}
          toLeft
        >
          An experienced group of global event organizers and community builders funding experiments in physical gathering spaces.
        </InfoCard>

        <InfoCard
          color="brand.taco"
          title="What are we up to?"
          imagePath="/images/ethos/ethos-star.svg"
          width={width}
        >
          Our mission is to identify global events that unite groups of diverse humans, exploring the intersections of Web3 technologies and human reality. ETHos is enabled by a small and focused team of stewards, distributed across four continents, working together to surface and support IRL events, with Ethereum ethos.
        </InfoCard>
      </Flex>
    </Flex>
  )
}

export default Ethos
