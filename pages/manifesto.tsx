import React, { useEffect, useRef, useState } from "react"
import { useSignMessage } from "wagmi"
import { verifyMessage } from "ethers/lib/utils"
import { useAccount } from "wagmi"
import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import { getData } from "../utils"
import { getManifesto } from "../libs/arweave"
import {
  Box,
  Flex,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import { ModalWrapper, PageHero, Section, IconButton } from "../components"

const Manifesto = () => {
  const [manifesto, setManifesto] = useState({})
  const signManifestoForm = useDisclosure()
  const toast = useToast()
  const { address, isConnecting } = useAccount()
  const [signing, setSigning] = useState(false)
  const [signature, setSignature] = useState(null)
  const [hasSignature, setHasSignature] = useState(false)
  const [hasSigned, setHasSigned] = useState(false)

  useEffect(() => {
    const fetchManifesto = async () => {
      const manifestoResponse = await getManifesto()
      // `${process.env.NEXT_PUBLIC_ARWEAVE_TX_ID}`
      setManifesto(manifestoResponse.data["manifesto"])
    }
    fetchManifesto()
  }, [])

  useEffect(() => {
    ;(async () => {
      const data = await (await fetch("./api/get_signatures")).json()
      const userSigned = data.filter(
        (item) => address === item.fields["Address"]
      )
      setHasSigned(userSigned.length > 0)
    })()
  }, [])

  const shareTweetHandler = (signature) => {
    const tweet = `I am signing the @meta_cartel Community First Manifesto:  signature:${signature}`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURI(tweet)}`)
  }

  const recoveredAddress = useRef<string>()
  const { data, isSuccess, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
      setSignature(data)
      signManifestoForm.onOpen()
      setHasSignature(true)
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
          // name: "",
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
              <Box
                className="react-markdown-paragraphs"
                width={{ base: "100%", md: "75%" }}
                fontSize="2xl"
                mb={12}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks]}
                  children={manifesto.toString()}
                />
              </Box>
              <Flex
                alignItems="center"
                justifyContent="center"
                border="1px"
                borderColor="brand.red"
                px={{ base: "1rem", md: "2rem" }}
                py={{ base: "1.5rem", md: "3rem" }}
                textAlign={{ base: "center", md: "start" }}
                flexDirection={{ base: "column" }}
                gap={4}
                width={{ base: "100%", md: "75%" }}
                fontSize="2xl"
              >
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="bg"
                  align="center"
                  textTransform="uppercase"
                >
                  Sign our Community First Manifesto.
                </Text>
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  color="brand.red"
                  align="center"
                  marginTop={2}
                  marginBottom={4}
                >
                  By doing so you can level up your MetaCartel commitment.
                </Text>

                <Flex
                  direction={{ base: "column", md: "row" }}
                  gap={8}
                  width={{ base: "100%", md: "50%" }}
                  justifyContent="space-between"
                >
                  <IconButton
                    color="brand.red"
                    icon="scroll"
                    title={address ? "Sign Manifesto" : "Connect Wallet First"}
                    onClick={signManifesto}
                    // disabled={!address}
                    width="100%"
                  />
                  <IconButton
                    color="brand.red"
                    icon="twitter"
                    title="Share Tweet"
                    onClick={() => shareTweetHandler(signature)}
                    disabled={!hasSignature}
                    width="100%"
                  />
                </Flex>
                {hasSigned && (
                  <Flex>
                    <Text
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                      color="brand.purp"
                      align="center"
                      marginTop={4}
                    >
                      Thank you for signing the manifesto.
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          ) : (
            <Spinner />
          )}
        </Section>
      </Flex>
      <ModalWrapper
        isOpen={signManifestoForm.isOpen}
        onClose={signManifestoForm.onClose}
        title="Sign the Manifesto"
        content={
          <>
            {signing === true ? (
              <Spinner />
            ) : (
              <>
                {isSuccess && (
                  <Box marginBottom={8}>
                    <Box marginBottom={4}>
                      <Text color="brand.teal">Address:</Text>
                      <Text>{address}</Text>
                    </Box>
                    <Text color="brand.teal">Signature:</Text>
                    <Text>{signature}</Text>
                  </Box>
                )}
                <IconButton
                  color="brand.red"
                  icon="scroll"
                  title="Sign Manifesto"
                  onClick={() => signManifestoHandler()}
                  disabled={!address || isConnecting}
                />
              </>
            )}
          </>
        }
      />
    </>
  )
}

export default Manifesto
