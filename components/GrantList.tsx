import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, BoxProps, SimpleGrid } from '@chakra-ui/react'
import { GrantItem } from '../components/GrantItem'
import { getData } from '../utils'

interface GrantListProps extends BoxProps {
  color?: string
  filter?: string
}
export const GrantList: React.FC<GrantListProps> = ({ color, filter = '', ...props }) => {
  const { pathname } = useRouter()
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    ;(async () => {
      const data: Array<{[key: string]: any}> = await getData('./api/get_grants')
      const maxHomepageItems = 5
      const mappedData = data
        .filter(({fields}) => fields['Grant Awarded'])
        .slice(0, pathname === '/' ? maxHomepageItems : -1)
        .map(({fields, id}) => {
          const logos = fields['Logo/Avatar']
          return {
            id,
            amountAwarded: fields['Amount Awarded'],
            description: fields['Description'],
            projectName: fields['Project Name'],
            websiteUrl: fields['Website'],
            grantAwarded: fields['Grant Awarded'],
            dateSubmitted: fields['Date Grant Submitted'],
            logoUrl: logos ? logos[0].thumbnails.large.url : '',
          }
        })
      setData(mappedData)
    })();
  } , [pathname])
  useEffect(() => {
    setFilteredData(
      data.filter(({ dateSubmitted, projectName, websiteUrl, amountAwarded }) =>
      `${projectName}${dateSubmitted}${websiteUrl}${amountAwarded}`
        .toLowerCase().includes(filter.toLowerCase()))
    )
  }, [filter, data])
  return (
    <Box w='100%' {...props}>
      <SimpleGrid columns={1}>
        {filteredData.map(({id, dateSubmitted, projectName, websiteUrl, amountAwarded }) => (
          <GrantItem 
            key={id}
            date={dateSubmitted}
            title={projectName}
            url={websiteUrl}
            amount={amountAwarded}
            color={color || 'white'}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
