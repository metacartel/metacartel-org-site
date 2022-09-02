import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { getManifesto } from "../libs/arweave"
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { ModalWrapper, PageHero, Section, IconButton } from "../components"

const Manifesto = () => {
  const [manifesto, setManifesto] = useState({})
  const signManifestoForm = useDisclosure()

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
    <>
      <Flex>
        {/* <PageHero bg="brand.red">Manifesto</PageHero> */}
        <Section py={75}>
          {manifesto ? (
            <Flex
              mx={{ base: 6, xl: 0 }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <ReactMarkdown children={manifesto.toString()} />
              <Flex
                display="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="brand.teal"
                  marginY={4}
                >
                  Read and sign our Community First Manifesto to get started.
                </Text>
                <IconButton
                  color="brand.red"
                  icon="scroll"
                  title="Sign Manifesto"
                  onClick={signManifestoForm.onOpen}
                />
              </Flex>
            </Flex>
          ) : (
            <Flex>Loading...</Flex>
          )}
        </Section>
      </Flex>
      <ModalWrapper
        isOpen={signManifestoForm.isOpen}
        onClose={signManifestoForm.onClose}
        title="Sign the Manifesto"
        content=""
      />
    </>
  )
}

export default Manifesto
