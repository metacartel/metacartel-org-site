import { Flex, BoxProps, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { Section, MetaTicker } from "./"

export const PageHero: React.FC<BoxProps> = ({ children, ...props }) => {
  const { pathname } = useRouter()
  const isHome = pathname === "/"
  const basePadding = 8
  const py = [
    isHome ? basePadding * 2 : basePadding * 1.5,
    null,
    isHome ? basePadding * 4 : basePadding * 2,
  ]
  return (
    <Flex direction="column" flex="1">
      <Section
        bgBlendMode="color-dodge"
        bgColor="brand.red"
        bgPosition="center"
        bgSize="cover"
        px={6}
        py={py}
        minH="100px"
        maxW="800px"
        {...props}
      >
        <Heading
          as="h1"
          fontFamily="hero"
          fontWeight="inherit"
          fontSize={["3xl", "4xl", "5xl", "6xl", "7xl"]}
          lineHeight="1"
          color="fg"
        >
          {children}
        </Heading>
      </Section>
      <MetaTicker />
    </Flex>
  )
}
