import { Flex } from "@chakra-ui/react";
import Image from 'next/image'

export const PhotoCarousel = () => {
  return (
    <Flex flex={1}>
      <Image src='/dao-it.png' width='1000px' height='500px' objectFit="cover" />
    </Flex>)
}
