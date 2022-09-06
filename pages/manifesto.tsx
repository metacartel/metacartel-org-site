import React, { useEffect, useRef, useState } from "react"
import { useSignMessage } from "wagmi"
import { verifyMessage } from "ethers/lib/utils"
import { useAccount, useDisconnect, useEnsName } from "wagmi"
import ReactMarkdown from "react-markdown"

import { getManifesto } from "../libs/arweave"
import { Box, Flex, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { ModalWrapper, PageHero, Section, IconButton } from "../components"

const Manifesto = () => {
  const [manifesto, setManifesto] = useState({})
  const signManifestoForm = useDisclosure()
  const toast = useToast()
  const { address, isConnecting } = useAccount()
  const [signing, setSigning] = useState(false)
  const [signature, setSignature] = useState(null)
  const [hasSigned, setHasSigned] = useState(false)

  // Sign the declaration. Any errors here should be handled by the caller.
  // await window.ethereum.request({ method: "eth_requestAccounts" })
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()

  useEffect(() => {
    const fetchManifesto = async () => {
      const manifestoResponse = await getManifesto(
        `${process.env.NEXT_PUBLIC_ARWEAVE_TX_ID}`
      )
      console.log("manifestoResponse", manifestoResponse)
      setManifesto(manifestoResponse.data["body"])
    }
    fetchManifesto()
  }, [])

  const shareTweetHandler = (signature) => {
    const tweet = `I am signing the @meta_cartel Community First Manifesto:  signature:${signature}`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURI(tweet)}`)
  }

  const recoveredAddress = useRef<string>()
  const { data, error, isSuccess, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
      console.log("data", data)
      setSignature(data)
      signManifestoForm.onOpen()
      setHasSigned(true)
    },
  })

  const signManifesto = () => {
    signMessage({ message: manifesto?.toString().trim() })
  }

  async function signManifestoHandler() {
    setSigning(true)
    if (signature !== undefined) {
      const res = await fetch("/api/arweave/sign_transaction", {
        method: "POST",
        body: JSON.stringify({
          name: "jp-dev",
          address: address,
          signature: data,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
      const signatureResponse = await res.json()
      if (signatureResponse) {
        toast({
          title: "Signature Recorded",
          description: "Your signature has been recorded",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        signManifestoForm.onClose()
      }
      setSigning(false)
    }
  }

  const testContent = `Our community comes first. We put our values, missions, and problems ahead of our solutions.
  Being community first means creating something people want to be a part of and can thrive in, it means silently sacrificing individual gains for the collective good, it means prioritizing long term positive-sum outcomes. The success of our communities will entirely depend on the strength of relationships that we help foster between not only ourselves, and but amongst community members.
  
  Being community firsts means that the relationships with each other as a community, are the most important resource we have. Our users, customers, investors, and community contributors are our peers: we are them and they are us. Oftentimes, this means allowing ourselves to be led by the community around us. It means that those around us are able to have input on key collective decisions. It means that our leaders are okay with not always being in charge.
  
  Great communities are co-created together.
  
  Being community first is about building out in the open. You can only mobilize and empower a community to contribute when information flows efficiently and freely. Our future vision and direction are decentralized, iterative and driven by its members, not premeditated. Our success will emerge from the community’s own willingness to contribute, self organize and collaborate. Our strengths lie in being flexible and tolerate of the chaos that comes along with community ownership.
  
  Being community first means that we always strive to acknowledge and reward those who have contributed. We provide opportunities to value-aligned individuals who want to contribute no matter who they are or where they are from. We get excited when others create value before we can. We believe the project’s success is determined by the community members' standards. Not numbers nor anything else. We believe in community wellbeing, happiness, and productivity.
  
  Being community first is following our heart, using our head, and listening to our gut.
  
  If you want to go fast, go alone. If you want to go far, go together.`

  return (
    <>
      <Flex flexDirection="column" w="100%">
        <PageHero bg="brand.red">Community First Manifesto</PageHero>
        <Section py={75}>
          {manifesto ? (
            <Flex
              mx={{ base: 6, xl: 0 }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* <ReactMarkdown children={manifesto.toString()} /> */}
              <Box w={{ base: "100%", md: "75%" }} fontSize="2xl" mb={12}>
                <ReactMarkdown children={testContent} />
              </Box>
              <Flex
                display="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="brand.teal"
                  align="center"
                >
                  Sign our Community First Manifesto.
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="brand.white"
                  align="center"
                  marginTop={2}
                  marginBottom={4}
                >
                  By doing so you can level up your MetaCartel commitment.
                </Text>
                <Flex gap={4}>
                  <IconButton
                    color="brand.red"
                    icon="scroll"
                    title="Sign Manifesto"
                    onClick={signManifesto}
                    width="100%"
                  />
                  <IconButton
                    color="brand.red"
                    icon="twitter"
                    title="Share Tweet"
                    onClick={() => shareTweetHandler(signature)}
                    disabled={!hasSigned}
                    width="100%"
                  />
                </Flex>
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
        content={
          <>
            <IconButton
              color="brand.red"
              icon="scroll"
              title="Sign Manifesto"
              onClick={() => signManifestoHandler()}
              disabled={!address || isConnecting}
            />
            {isSuccess && <div>{signature}</div>}
          </>
        }
      />
    </>
  )
}

export default Manifesto
