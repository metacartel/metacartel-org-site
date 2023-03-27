import { FC } from "react"
import { Box, BoxProps, Flex, FlexProps, Grid, Link, LinkProps, Text } from "@chakra-ui/react"

interface CardProps extends Pick<BoxProps, "children" | "color" | "width"> {
  title: string,
  imagePath: string,
  toLeft?: boolean,
}
export const Card: FC<CardProps> = ({
  color,
  children,
  title,
  imagePath,
  width,
  toLeft = false,
}) => (
  <Box
    mx={{ base: 6, xl: 'auto' }}
    w={width}
    bg="black"
    color={color}
    px={16}
    py={8}
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      inset: 0,
      translate: `${toLeft ? "-" : ""}2rem 2rem`,
      bg: color,
      zIndex: -1,
      border: '3px solid black',
    }}
  >
    <Flex gap={8} direction={toLeft ? "row" : "row-reverse"}>
      <Text
        as="h2"
        fontFamily="heading"
        fontWeight="bold"
        fontSize="4xl"
        color="white"
        whiteSpace="nowrap"
      >
        {title}
      </Text>
      <Box
        w="full"
        bgImage={`url('${imagePath}')`}
        bgSize="3rem"
        bgRepeat="space"
        bgPosition="center"
        color={color} />
    </Flex>
    <Text
      fontFamily="body"
      fontSize="3xl"
      textAlign={toLeft ? "start" : "end"}
    >
      {children}
    </Text>
  </Box>
)

interface ChiliButtonProps extends Pick<LinkProps, 'href' | 'color' | 'children'>{}
export const ChiliButton: FC<ChiliButtonProps> = ({
  color,
  href,
  children,
}) => (
  <Link
    href={href}
    isExternal={href !== "#"}
    data-group
    h="fit-content"
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Grid
      position="relative"
      border="3px solid black"
      bg={color}
      px={4}
      py={2}
      placeItems="center"
      _groupHover={{
        bg: 'mix.red.300',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        insetEnd: '-1.5rem',
        bottom: '-2rem',
        w: '62px',
        h: '72px',
        bgImage: "url('/images/ethos/chili-decorator.svg')",
        bgRepeat: 'no-repeat',
        backgroundPosition: 'right',
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
      translate: `${toLeft ? '-' : ''}2rem 2rem`,
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
