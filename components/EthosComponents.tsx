import { FC } from "react"
import {
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  Image,
  Link,
  LinkProps,
  Text,
} from "@chakra-ui/react"
import { SHADOW_SMALL, SHADOW_LARGE } from "../constants"

const shadowCardProps = (
  color: string,
  toLeft: boolean = false
): FlexProps => ({
  w: [`calc(100% - ${SHADOW_SMALL})`, null, `calc(100% - ${SHADOW_LARGE})`],
  _before: {
    content: '""',
    position: "absolute",
    inset: 0,
    translate: {
      base: `${toLeft ? "-" : ""}${SHADOW_SMALL} ${SHADOW_SMALL}`,
      md: `${toLeft ? "-" : ""}${SHADOW_LARGE} ${SHADOW_LARGE}`,    
    },
    bg: color,
    zIndex: -1,
    border: "3px solid",
    borderColor: "fg",
  }
})

interface CardProps extends BoxProps {
  toLeft?: boolean
}
const Card: FC<CardProps> = ({
  color,
  children,
  toLeft = false,
  ...restProps
}) => (
  <Flex
    direction="column"
    bg="fg"
    color={color}
    px={[8, null, 12]}
    py={8}
    gap={4}
    position="relative"
    justifySelf={toLeft ? "end" : "start"}
    {...shadowCardProps(color as string, toLeft)}
    {...restProps}
  >
    {children}
  </Flex>
)

interface InfoCardProps extends BoxProps {
  title: string
  imagePath: string
  toLeft?: boolean
  flipHeader?: boolean
}
export const InfoCard: FC<InfoCardProps> = ({
  color,
  children,
  title,
  imagePath,
  toLeft = false,
  flipHeader = false,
  ...restProps
}) => (
  <Card color={color} toLeft={toLeft} {...restProps}>
    <Flex
      gap={6}
      direction={flipHeader ? "row-reverse" : "row"}
      justify="start"
    >
      <Text
        as="h2"
        fontFamily="heading"
        fontWeight="bold"
        fontSize={["xl", "2xl", "3xl"]}
        color="white"
      >
        {title}
      </Text>
      <Image src={imagePath} width="auto" height="100%" alt="" />
    </Flex>
    <Text fontFamily="body" fontSize={["lg", "xl", "2xl"]} lineHeight="1.2">
      {children}
    </Text>
  </Card>
)

interface ButtonLinkProps
  extends Pick<LinkProps, "href" | "color" | "children"> {}
export const ButtonLink: FC<ButtonLinkProps> = ({ color, href, children }) => (
  <Link
    href={href}
    isExternal={href.startsWith("http")}
    _hover={{
      textDecoration: "none",
    }}
  >
    <Grid
      position="relative"
      borderColor="fg"
      bg={color}
      px={[6, null, null, 8]}
      py={[3, 4]}
      placeItems="center"
      boxShadow="inset 0 0 0 8px var(--chakra-colors-blackAlpha-400)"
      _hover={{
        boxShadow: "inset 0 0 0 2px var(--chakra-colors-mix-red-400)",
        bg: "fg",
        p: { color: "mix.red.400" },
        _after: {
          position: "absolute",
          content: '""',
          bgImage: "url('/images/ethos/chili-decorator.png')",
          bgSize: "contain",
          bgRepeat: "no-repeat",
          insetInlineEnd: [`calc(-0.5 * ${SHADOW_SMALL})`, null, `calc(-0.5 * ${SHADOW_LARGE})`],
          bottom: [`calc(-0.5 * ${SHADOW_SMALL})`, null, `calc(-0.5 * ${SHADOW_LARGE})`],
          w: ["2rem", null, "3rem", null],
          h: ["2rem", null, "3rem", null],
          zIndex: 1,
        }
      }}
    >
      <Text
        fontSize={["lg", null, null, "2xl"]}
        fontWeight="bold"
        color="fg"
        fontFamily="a"
        textTransform="lowercase"
      >
        {children}
      </Text>
    </Grid>
  </Link>
)

interface CtaCardProps extends Pick<FlexProps, "children" | "color"> {
  prompt: string
}
export const CtaCard: FC<CtaCardProps> = ({ prompt, color, children }) => (
  <Flex
    bg="fg"
    color={color}
    p={[6, null, null, 8]}
    gap={[4, null, null, 8]}
    justify="space-between"
    alignItems="center"
    position="relative"
    {...shadowCardProps(color as string)}
  >
    <Text
      fontSize={["lg", "xl", null, "2xl"]}
      fontFamily="heading"
      fontWeight="bold"
      color="white"
      textAlign="center"
      lineHeight="1.1"
    >
      {prompt}
    </Text>
    {children}
  </Flex>
)
