import { Flex } from "@chakra-ui/react"
import { PageHero } from "../components"
import { getManifesto } from "../libs/arweave"

const fetchManifesto = async () => {
  const manifesto = await getManifesto()
  console.log("manifesto", manifesto)
}

fetchManifesto()
const Manifesto = () => {
  return (
    <Flex>
      <PageHero bg="brand.red">Manifesto</PageHero>
    </Flex>
  )
}

export default Manifesto
