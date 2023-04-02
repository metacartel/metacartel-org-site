import { FC } from "react"
import {
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  Image,
  Link,
  LinkProps,
  Text
} from "@chakra-ui/react"
import { SHADOW_SMALL, SHADOW_LARGE } from "../constants"

const shadowTranslate = (toLeft: boolean = false): { base: string, md: string } => ({
  base:`${toLeft ? "-" : ""}${SHADOW_SMALL} ${SHADOW_SMALL}`,
  md:`${toLeft ? "-" : ""}${SHADOW_LARGE} ${SHADOW_LARGE}`,
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
    bg="black"
    color={color}
    px={[8, null, 12]}
    py={8}
    gap={4}
    position="relative"
    justifySelf={toLeft ? "end" : "start"}
    w={[`calc(100% - ${SHADOW_SMALL})`, null, `calc(100% - ${SHADOW_LARGE})`]}
    _before={{
      content: '""',
      position: 'absolute',
      inset: 0,
      translate: shadowTranslate(toLeft),
      bg: color,
      zIndex: -1,
      border: '3px solid black',
    }}
    {...restProps}
  >
    {children}
  </Flex>
)

interface InfoCardProps extends BoxProps {
  title: string,
  imagePath: string,
  toLeft?: boolean,
  flipHeader?: boolean,
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
  <Card
    color={color}
    toLeft={toLeft}
    {...restProps}
  >
    <Flex
      gap={6}
      direction={flipHeader ? "row-reverse" : "row"}
      justify="start"
    >
      <Text
        as="h2"
        fontFamily="heading"
        fontWeight="bold"
        fontSize={['xl', "2xl", '3xl']}
        color="white"
      >
        {title}
      </Text>
      <Image
        src={imagePath}
        width="auto"
        height="100%"
        alt=""
      />
    </Flex>
    <Text
      fontFamily="body"
      fontSize={['lg', "xl", '2xl']}
      lineHeight="1.2"
    >
      {children}
    </Text>
  </Card>
)

interface ButtonLinkProps extends Pick<LinkProps, 'href' | 'color' | 'children'>{}
export const ButtonLink: FC<ButtonLinkProps> = ({
  color,
  href,
  children,
}) => (
  <Link
    href={href}
    isExternal={href.startsWith("http")}
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Grid
      position="relative"
      border="3px solid black"
      bg={color}
      px={[6, null, null, 8]}
      py={[3, 4]}
      placeItems="center"
      _hover={{
        _after: {
          content: '""',
          position: 'absolute',
          inset: 2,
          bg: 'blackAlpha.400',
          zIndex: 1
        }  
      }}
    >
      <Text
        fontSize={["sm", "md", "md", "xl"]}
        color="black"
        fontFamily="a"
        textTransform="lowercase"
      >
        {children}
      </Text>
    </Grid>
  </Link>
)

interface CtaCardProps extends Pick<FlexProps, 'children' | 'color'> {
  prompt: string,
  // toLeft?: boolean,
}
export const CtaCard: FC<CtaCardProps> = ({
  prompt,
  color,
  children,
}) => (
  <Flex
    bg="black"
    color={color}
    p={[6, null, null, 8]}
    gap={[4, null, null, 8]}
    justify="space-between"
    alignItems="center"
    position="relative"
  >
    <Text
      fontSize={["lg", "xl", null, "2xl"]}
      fontFamily="heading"
      fontWeight="bold"
      color="white"
      textAlign="center"
      lineHeight="110%"
    >
      {prompt}
    </Text>
    {children}
  </Flex>
)
