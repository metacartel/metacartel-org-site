import { FC, useState } from "react"
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react"
import Image from "next/image"
import Slider from "react-slick"
import { Icon, IconName } from "."
import { slickCss } from "../styles/slickCss"

// Settings for the Slider component
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

interface PhotoCarouselProps {
  photos: string[]
}
export const PhotoCarousel: FC<PhotoCarouselProps> = ({ photos }) => {
  const [slider, setSlider] = useState<Slider | null>(null)
  const bottom = useBreakpointValue({ base: "10px", md: "40%" })
  const side = useBreakpointValue({ base: "30%", md: "10px" })

  return (
    <Box position="relative" overflow="hidden" css={slickCss} flex={1.25}>
      {/* Left nav icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="mix.teal"
        borderRadius="full"
        position="absolute"
        left={side}
        bottom={bottom}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <Icon name={"left-arrow" as IconName} />
      </IconButton>
      {/* Right nav icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="mix.teal"
        borderRadius="full"
        position="absolute"
        right={side}
        bottom={bottom}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <Icon name={"right-arrow" as IconName} />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {photos?.map((url) => (
          <Image
            key={url}
            src={url}
            height="600px"
            width="800px"
            objectFit="cover"
            alt="Photo"
          />
        ))}
      </Slider>
    </Box>
  )
}
