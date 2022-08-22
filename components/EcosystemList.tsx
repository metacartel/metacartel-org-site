import { Flex, Box, BoxProps, Image, Link, SimpleGrid, } from '@chakra-ui/react'
import { DatasetJsonLd } from 'next-seo'

const data = [
  { 
    src: "/images/ecosystem/daohaus_logo.svg",
    url: "https://daohaus.club",
    alt: "DAOhaus"
  },
  { 
    src: "/images/ecosystem/daohaus_logo.svg",
    url: "https://daohaus.club",
    alt: "DAOhaus"
  },
  { 
    src: "/images/ecosystem/daohaus_logo.svg",
    url: "https://daohaus.club", 
    alt: "DAOhaus"
  },
]

export const EcosystemList: React.FC = () => {
  return (
    <Box w={'100%'}>
      <SimpleGrid columns={[1, null, 2, 3]} spacing='40px'>
        {data.map(({ url, src, alt }) => (
          <Link href={url}>
            <Image
              src={src}
              alt={alt}
              />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  )
}
