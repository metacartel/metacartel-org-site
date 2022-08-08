import { useEffect, useState } from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { GrantItem } from '../components/GrantItem'

export const GrantList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      const response = await fetch('./api/get_grants')
      const data = await response.json()
      // console.log(data)
      const mappedData = data
        .filter(({fields}) => fields['Grant Awarded'] === "Yes")
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
  } , [])
  return (
    <Box w={'100%'}>
      <SimpleGrid columns={1}>
        <Box w={'100%'} borderBottom={'2px solid #000'} />
        {data.map(({id, dateSubmitted, projectName, websiteUrl, amountAwarded }) => (
            <GrantItem 
              key={id}
              date={dateSubmitted}
              title={projectName}
              url={websiteUrl}
              amount={amountAwarded}
            />
        ))}
      </SimpleGrid>
    </Box>
  )
}
