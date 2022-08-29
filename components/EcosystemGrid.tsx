import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SimpleGrid, Flex, Box, Link, Text} from '@chakra-ui/react'
import { getData } from '../utils'
import { IconButton, IconButtonLink } from './'

interface EcosystemListProps {
  color?: string
}
export const EcosystemGrid: React.FC<EcosystemListProps> = ({ color = 'brand.sun' }) => {
  const { pathname } = useRouter()
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      const data: Array<{[key: string]: any}> = await getData('./api/get_grants')
      const filteredData = data.filter(({fields}) => fields['isEcosystem'])
      const maxHomepageItems = 10
      const homepageSlice = Math.min(filteredData.length, maxHomepageItems)
      const slicedData = filteredData.slice(0, pathname === '/' ? homepageSlice : filteredData.length)
      const mappedData = slicedData.map(({fields, id}) => {
          const logos = fields['Logo/Avatar']
          return {
            id,
            projectName: fields['Project Name'],
            websiteUrl: fields['Website'],
            logoUrl: logos ? logos[0].thumbnails.large.url : '',
            desc: fields['Description'],
          }
        })
      setData(mappedData)
    })();
  } , [pathname])
  return (
    <Box w={'100%'} maxW="container">
      <SimpleGrid columns={[1, null, 2, 3]} spacing='40px'>
        {data.map(({ desc, websiteUrl, logoUrl, projectName }) => (
          <Flex
          flexDirection="column" 
          minHeight={'200px'} 
          color="white"
          border='2px'
          borderColor={color}
          p={5}
          _hover={{transform: 'scale(1.02)', transition: 'transform 0.2s ease-in-out'}}
          transform="scale(1)"
          transition='transform 0.2s ease-in-out'
        >    
        <Flex alignItems="center" mb={8}>
            <Link
            href={websiteUrl}
            borderRadius='full'
            _hover={{
              outline: '2px solid',
              outlineColor: color
            }}
            aria-label={projectName}
            bgImage={`url(${logoUrl})`}
            h="60px"
            w="60px"
            bgSize="contain"
            />
            <Text fontSize={['xl', null, 'xl']} ml="auto">{projectName}</Text>

          
        </Flex>
            <Text mb={8}>{desc}</Text>
            <Flex justify="end" mt="auto">
            { websiteUrl ? (
              <IconButtonLink
                icon='link'
                title='Link'
                href={websiteUrl}
                color={color}
                isExternal
                justify='end'
                size="xs"
              />
            ) : (
              <IconButton
                icon="link"
                title='No link'
                color={color}
                disabled
                size="sm"
              />
            )}
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  )
}
