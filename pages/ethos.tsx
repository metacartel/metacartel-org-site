import { FC } from "react"
import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react"
import { PageMetadata, InfoCard, ButtonLink, CtaCard, Icon, IconName } from "../components"
import { SHADOW_SMALL, SHADOW_LARGE } from "../constants"

const Ethos: FC = () => (
  <Flex
    flexDirection="column"
    alignItems="center"
    bg="mix.red.400"
    px={[6, 8, 12]}
    py={[16, null, null, 24]}
  >
    <PageMetadata
      title="ETHos"
      description="ETHos is an incubator for Ethereum IRL events"
      image="/images/ethos/ethos-og.svg"
    />
    <Flex
      maxW="calc(var(--chakra-sizes-quarterContainer) * 3)"
      direction="column"
      alignItems="center"
      gap={[12, null, 16]}
      zIndex={1}
      position="relative"
    >
      {/* Hero */}
      <Text
        as="h1"
        fontSize="min(27vw, 18rem)"
        color="fg"
        textAlign="center"
        fontFamily="MexicanTequila"
        lineHeight="1"
      >
        ETH
        <Text
          as="span"
          bgImage="/images/ethos/globe.svg"
          color="transparent"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition="center"
          fontSize="1.25em"
          lineHeight="0.1"
        >
          O
        </Text>
        S
      </Text>

      {/* Sub-hero */}
      <Box
        px={[12, null, null, 16]}
        py={4}
        color="mix.purp.200"
        bg="fg"
        position="relative"
        alignSelf="start"
        mb={[6, null, 8]}
        mt={[-6, null, -10]}
        ms={8}
        w={[
          `calc(100% - 3 * ${SHADOW_SMALL})`,
          null,
          `calc(100% - 2 * ${SHADOW_LARGE})`,
        ]}
        /* ETH glyph decorator */
        _after={{
          content: '""',
          bgImage: "url('/images/ethos/glyph-pile.svg')",
          bgRepeat: "no-repeat",
          bgSize: "contain",
          backgroundPositionY: "center",
          position: "absolute",
          insetInlineStart: "0",
          transform: "translateX(-58%)",
          top: 0,
          height: "min(100%, 10rem)",
          aspectRatio: "1/1",
          zIndex: 1,
        }}
        /* Shadow */
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          translate: {
            base: `${SHADOW_SMALL} ${SHADOW_SMALL}`,
            md: `${SHADOW_LARGE} ${SHADOW_LARGE}`,
          },
          bg: "mix.purp.200",
          zIndex: -1,
          border: "3px solid",
          borderColor: "fg",
        }}
      >
        <Text
          fontFamily="hero"
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          textAlign="center"
        >
          An incubator for IRL Ethereum events
        </Text>
      </Box>

      {/* Calls to action */}
      <Grid
        gap={[10, null, 4, 8]}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        w="full"
      >
        <CtaCard color="mix.teal.400" prompt="Receive Support">
          <ButtonLink
            color="mix.teal.400"
            href="https://form.typeform.com/to/tzG1SW15"
          >
            Apply
          </ButtonLink>
        </CtaCard>

        <CtaCard color="mix.purp.200" prompt="Contribute Support">
          <ButtonLink
            color="mix.purp.200"
            href="https://form.typeform.com/to/M3PIyVhn"
          >
            Sponsor
          </ButtonLink>
        </CtaCard>
      </Grid>

      {/* Cards */}
      <Grid
        columnGap={8}
        rowGap={16}
        templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
      >
        <InfoCard
          color="brand.taco"
          title="What we're up to"
          imagePath="/images/ethos/hardhat.svg"
          toLeft
        >
          Our mission is to identify global events that unite groups of diverse
          humans, exploring the intersections of Web3 technologies and human
          reality. ETHos is enabled by a small and focused team of stewards,
          distributed across four continents, working together to surface and
          support IRL events, with Ethereum ethos.
        </InfoCard>

        <InfoCard
          color="mix.teal.400"
          title="Who we are"
          toLeft
          sx={{
            p: {
              fontSize: ["xl", "2xl", "3xl"],
              lineHeight: [1.2, null, null, 1.4],
            },
          }}
        >
          An experienced group of global event organizers and community builders
          funding experiments in physical gathering spaces.
        </InfoCard>
      </Grid>

      {/* Substack email subscription callout */}
      <Link
        href="https://dapp.substack.com/"
        isExternal
        mt={8}
      >
        <Flex
          gap={1}
          color="fg"
          transition="transform 0.2s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            transition: "transform 0.2s ease-in-out"
          }}
          fontSize={['md', 'lg', 'xl']}
          alignItems="center"
        >
          <Icon name={'letter-mail' as IconName} />
          <Text
            href="https://dapp.substack.com/"
            isExternal
            fontFamily="heading"
            fontWeight="bold"
            textDecoration="underline"
            textAlign="center"
          >
            Subscribe to our newsletter
          </Text>
        </Flex>
      </Link>
    </Flex>
  </Flex>
)

export default Ethos
