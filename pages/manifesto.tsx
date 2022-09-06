import { useEffect, useRef, useState } from "react"
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

  // Sign the declaration. Any errors here should be handled by the caller.
  // await window.ethereum.request({ method: "eth_requestAccounts" })
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()

  const recoveredAddress = useRef<string>()
  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
      console.log("data", data)
    },
  })

  useEffect(() => {
    const fetchManifesto = async () => {
      const manifestoResponse = await getManifesto(
        `${process.env.NEXT_PUBLIC_ARWEAVE_TX_ID}`
      )
      setManifesto(manifestoResponse.data["manifesto"])
    }
    fetchManifesto()
  }, [])

  async function signManifestoHandler() {
    setSigning(true)
    signMessage({ message: manifesto?.toString().trim() })
    console.log("signing")
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
        content={
          <>
            <IconButton
              color="brand.red"
              icon="scroll"
              title="Sign Manifesto"
              // onClick={() => signMessage()}
              onClick={signManifestoHandler}
              disabled={!address || isConnecting}
            />
          </>
        }
      />
    </>
  )
}

export default Manifesto
