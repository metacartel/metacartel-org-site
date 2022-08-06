import { Flex } from "@chakra-ui/react";
import Image from 'next/image'

export const PhotoCarousel = () => {
  return (
    <Flex flex={1} borderBottom="0.5rem solid black">
      <Image src='/dao-it.png' width='1000px' height='500px' objectFit="cover" />
    </Flex>)
}
