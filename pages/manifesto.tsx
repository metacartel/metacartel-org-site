import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { getManifesto } from "../libs/arweave"
import { Box, Flex } from "@chakra-ui/react"
import { PageHero, Section } from "../components"

const Manifesto = () => {
  const [manifesto, setManifesto] = useState({})

  useEffect(() => {
    const fetchManifesto = async () => {
      const manifestoResponse = await getManifesto()
      setManifesto(manifestoResponse.data["manifesto"])
    }
    fetchManifesto()
  }, [])

  useEffect(() => {
    console.log("manifesto", manifesto)
  }, [manifesto])

  return (
    <Flex>
      {/* <PageHero bg="brand.red">Manifesto</PageHero> */}
      <Section py={75}>
        {manifesto ? (
          <Flex mx={{ base: 6, xl: 0 }} direction="column" alignItems="center">
            <ReactMarkdown children={manifesto.toString()} />
          </Flex>
        ) : (
          <Flex>Loading...</Flex>
        )}
      </Section>
    </Flex>
  )
}

export default Manifesto
