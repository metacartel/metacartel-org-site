import { FC } from "react"
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  Link,
  LinkProps,
  Text
} from "@chakra-ui/react"

const shadowTranslate = (toLeft: boolean = false): { base: string, md: string } => ({
  base:`${toLeft ? "-" : ""}1rem 1rem`,
  md:`${toLeft ? "-" : ""}2rem 2rem`,
})

interface CardProps extends BoxProps {
  toLeft?: boolean
}
const Card: FC<CardProps> = ({
  color,
  children,
  width,
  toLeft = false,
  ...restProps
}) => (
  <Flex
    direction="column"
    w={width}
    bg="black"
    color={color}
    px={{ base: 8, md: 16 }}
    py={8}
    gap={4}
    position="relative"
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

interface InfoCardProps extends Pick<BoxProps, "children" | "color" | "width"> {
  title: string,
  imagePath: string,
  toLeft?: boolean,
}
export const InfoCard: FC<InfoCardProps> = ({
  color,
  children,
  title,
  imagePath,
  width,
  toLeft = false,
}) => (
  <Card
    color={color}
    width={width}
    toLeft={toLeft}
  >
    <Flex gap={8} direction={toLeft ? "row" : "row-reverse"}>
      <Text
        as="h2"
        fontFamily="heading"
        fontWeight="bold"
        fontSize="4xl"
        color="white"
        whiteSpace={{ base: 'normal', sm: "nowrap" }}
      >
        {title}
      </Text>
      <Box
        w={{ base: "5rem", md: "full" }}
        bgImage={`url('${imagePath}')`}
        bgSize="3rem"
        bgRepeat={{ base: "no-repeat", md: "space" }}
        bgPosition={{ base: toLeft ? 'left' : 'right', md: "center" }}
        color={color}
      />
    </Flex>
    <Text
      fontFamily="body"
      fontSize="3xl"
      textAlign={toLeft ? "start" : "end"}
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
    // data-group
    h="fit-content"
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Grid
      position="relative"
      border="3px solid black"
      bg={color}
      px={8}
      py={4}
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
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        translate: shadowTranslate(),
        bg: 'black',
        zIndex: -1,
      }}
    >
      <Text
        fontSize="2xl"
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
  toLeft?: boolean,
}
export const CtaCard: FC<CtaCardProps> = ({
  prompt,
  color,
  children,
  toLeft = false,
}) => (
  <Flex
    bg="black"
    color={color}
    p={8}
    gap={8}
    justify="space-between"
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      inset: 0,
      translate: shadowTranslate(toLeft),
      bg: color,
      zIndex: -1,
      border: '3px solid black',
    }}
  >
    <Text
      fontFamily="heading"
      fontWeight="bold"
      fontSize="2xl"
      color="white"
    >
      {prompt}
    </Text>
    {children}
  </Flex>
)
