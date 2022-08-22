import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Flex, Box, BoxProps, Image, Link, SimpleGrid, } from '@chakra-ui/react'
import { getData } from '../utils'



export const EcosystemList: React.FC = () => {
  const { pathname } = useRouter()
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      const data: Array<{[key: string]: any}> = await getData('./api/get_grants')
      const maxHomepageItems = 10
      const mappedData = data
        .filter(({fields}) => fields['isEcosystem'])
        .slice(0, pathname === '/' ? maxHomepageItems : -1)
        .map(({fields, id}) => {
          const logos = fields['Logo/Avatar']
          return {
            id,
            projectName: fields['Project Name'],
            websiteUrl: fields['Website'],
            logoUrl: logos ? logos[0].thumbnails.large.url : '',
          }
        })
      setData(mappedData)
    })();
  } , [pathname])
  return (
    <Box w={'100%'}>
      <SimpleGrid columns={[1, 2, 5]} spacing='40px'>
        {data.map(({ websiteUrl, logoUrl, projectName }) => (
          <Link href={websiteUrl} borderRadius={500} bgImage={'url(' + logoUrl + ')'} h="120px" w="120px" bgSize="contain" />
        ))}
      </SimpleGrid>
    </Box>
  )
}
