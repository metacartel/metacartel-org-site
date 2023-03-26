// Import library
import React, { useEffect, useRef, useState, useMemo } from "react"
import {
  Box,
  Flex,
  Spinner,
  Text,
  useDisclosure,
  useToast,
  IconButton as ChakraIconButton,
  Link,
} from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import remarkBreaks from "remark-breaks"
import { verifyMessage } from "ethers/lib/utils"
import { useAccount, useSignMessage } from "wagmi"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
// Import components
import {
  ConnectButton,
  ModalWrapper,
  PageHero,
  PageMetadata,
  Section,
  Icon,
  IconName,
  IconButton,
} from "../components"
// Import utilities
import { copyTextToClipboard } from "../utils"
import { getManifesto } from "../libs/arweave"

// Default locale initialization for TimeAgo
TimeAgo.addDefaultLocale(en)

// Constants
const DEFAULT_LOCALE = "en-US"
const DEFAULT_TIMESTAMP = "2022-09-06T16:20:00.000Z" // MCON Website Launch Announcement, 4:20pm UTC
const DEFAULT_TIMESTAMP_LABEL = "OG Signing Cohort"
const PAGINATION_LIMIT = 10
const VERIFY_MESSAGE = "Verify message"

// Manifesto page component
const Manifesto = () => {
  // State variables
  const [manifesto, setManifesto] = useState({})
  const signManifestoForm = useDisclosure()
  const toast = useToast()
  const { address, isConnecting } = useAccount()
  const [signing, setSigning] = useState(false)
  const [signature, setSignature] = useState(null)
  const [hasSigned, setHasSigned] = useState(false)
  const [allSignatures, setAllSignatures] = useState([])
  const [paginationIndex, setPaginationIndex] = useState(0)

  // Refs
  const recoveredAddress = useRef<string>()

  // Data fetching
  useEffect(() => {
    const fetchManifesto = async () => {
      const manifestoResponse = await getManifesto()
      // `${process.env.NEXT_PUBLIC_ARWEAVE_TX_ID}`
      setManifesto(manifestoResponse.data["manifesto"])
    }
    fetchManifesto()
  }, [])

  useEffect(() => {
    const fetchAllSignatures = async () => {
      const data = await (await fetch("./api/get_signatures")).json()
      // Create a Set of unique addresses with their signatures and timestamps, keeping latest signature for duplicates
      const signatures = {}
      data.forEach((sig) => {
        signatures[sig.fields.Address] = { signature: sig.fields.Signature, timestamp: sig.fields.Timestamp }
      })
      // Form iterator from list of unique addresses
      const allSignaturesArray = Object.keys(signatures)
        // Map into array of objects, { address, signature, timestamp }
        .map((address) => ({
          address,
          signature: signatures[address].signature,
          timestamp: !!signatures[address].timestamp ? signatures[address].timestamp : DEFAULT_TIMESTAMP }))
        // Filter out entires without signatures
        .filter(({ signature }) => !!signature)
        // Sort most recent first
        .sort((a, b) => (new Date(b.timestamp) as any) - (new Date(a.timestamp) as any))
      setAllSignatures(allSignaturesArray)
    }
    fetchAllSignatures()
  }, [hasSigned])

  useEffect(() => {
    const userSignature: string = allSignatures[address]?.signature || ""
    if (userSignature.length) {
      setSignature(userSignature)
    }
  }, [hasSigned])

  // Memoized values
  const totalPaginationPages = useMemo<number>(() => Math.ceil(allSignatures.length / PAGINATION_LIMIT), [allSignatures])
  const signaturesSliceStart = useMemo<number>(() => paginationIndex * PAGINATION_LIMIT, [paginationIndex, allSignatures])
  const signaturesSliceEnd = useMemo<number>(() => {
    const overestimateEnd = (paginationIndex + 1) * PAGINATION_LIMIT
    return overestimateEnd > allSignatures.length ? allSignatures.length : overestimateEnd
  }, [paginationIndex, allSignatures])

  // Helpers
  const { data, isSuccess, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
      setSignature(data)
      signManifestoForm.onOpen()
    },
  })

  const signManifesto = () => {
    signMessage({ message: manifesto?.toString().trim() })
  }

  const copyText = (text: string, description?: string, duration?: number) => {
    copyTextToClipboard(text)
    toast({
      title: "Copied",
      description: description || "Copied to clipboard",
      status: "success",
      duration: duration || 3000,
      isClosable: true,
    })
  }

  // Handlers
  const handleShareTweet = (sig) => {
    const tweet = `I am signing the @meta_cartel Community First Manifesto:  signature:${sig}`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURI(tweet)}`)
  }

  const handleSignManifesto = async () => {
    setSigning(true)
    if (signature !== undefined) {
      const res = await fetch("/api/arweave/sign_transaction", {
        method: "POST",
        body: JSON.stringify({
          address,
          signature: data,
          timestamp: new Date(),
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
        setHasSigned(true)
      }
      setSigning(false)
    }
  }

  const handleCopyToVerify = (address: string, sig: string): void => {
    const data = { address, msg: manifesto, sig, version: 2 }
    const dataString = JSON.stringify(data)
    copyText(
      dataString,
      `Verifiers copied to clipboard. Click "${VERIFY_MESSAGE}" link to paste and verify signature.`,
      6000,
    )
  }

  return (
    <>
      <Flex flexDirection="column" w="100%">
        <PageMetadata title="Community First Manifesto" description="Show your support of MetaCartel by signing the Community First Manifesto" />
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
                {hasSigned ? (
                  <Flex mb={6}>
                    <Text
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                      color="brand.purp"
                      align="center"
                      marginTop={4}
                    >
                      Thank you for signing the manifesto.
                    </Text>
                  </Flex>
               ) : (
                <>
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
                </>
               )}
                <Flex
                  direction={{ base: "column", md: "row" }}
                  gap={8}
                  justifyContent="space-between"
                >
                  {hasSigned ? (
                    <IconButton
                      color="brand.red"
                      icon="twitter"
                      title="Share Tweet"
                      onClick={() => handleShareTweet(signature)}
                      width="100%"
                    />
                  ) : address ? (
                    <IconButton
                      color="brand.red"
                      icon="scroll"
                      title="Sign Manifesto"
                      onClick={signManifesto}
                      width="100%"
                    />
                  ) : (
                    <ConnectButton label="Connect wallet first" />
                  )}
                  
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Spinner color='brand.red' />
          )}
        </Section>
        <Section alignItems="center" px={6}>
          <Flex
            pt={{ base: 2, md: 4 }}
            pb={{ base: 8, md: 12 }}
            px={{ base: 6, md: 12 }}
            maxW="min(70ch,100%)"
            w="fit-content"
            direction="column"
            gap={4}
            textAlign="center"
            color="brand.purp"
            border="1px"
            borderColor="brand.purp"
            mx="auto"
            id="signatures"
          >
            <Flex justify="space-between" alignItems="end">
              <Flex direction="column" alignItems="start" gap={2} title={`Press copy, then "${VERIFY_MESSAGE}", then paste and verify`}>
                <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign="start">Signatooors</Text>
                <Flex w="fit-content" gap={1} alignItems="center">
                  <Icon name={"scale-1" as IconName} aria-label="Press copy"/> 
                  {">"}
                  <Link fontSize="sm" href="https://app.mycrypto.com/verify-message" isExternal textDecoration="underline">{VERIFY_MESSAGE}</Link>
                  {">"}
                  <Icon name={"load" as IconName} />
                </Flex>
              </Flex>
              <Flex direction="column" alignItems="center" textAlign="center">
                {allSignatures.length && <Text fontSize="4xl" fontWeight="bold">{allSignatures.length}</Text>}
                <Text>Signatures</Text>
              </Flex>
            </Flex>
            {allSignatures.length ? (
              allSignatures
                .slice(signaturesSliceStart, signaturesSliceEnd)
                .map(({ address, signature, timestamp }) => (
                  <Flex
                    key={address}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    gap={2}
                    py={2}
                    px={3}
                    mx={-3}
                    sx={{ "&>*": { maxW: "min(60ch,100%)" }}}
                    border="1px"
                    borderColor="whiteAlpha.300"
                    bg="mix.purp.900"
                    _hover={{ bg: "mix.purp.800" }}
                  >
                    <Flex alignItems="center" gap={4}>
                      <Text
                        title="Copy address"
                        whiteSpace="nowrap"
                        overflowX="hidden"
                        textOverflow="ellipsis"
                        cursor="pointer"
                        color="brand.red"
                        _hover={{ transform: "scale(1.01)" }}
                        onClick={() => copyText(address, "Address copied to clipboard")}
                      >
                        {address}
                      </Text>
                      <Text fontSize="sm" flex={1} whiteSpace="nowrap">
                        {timestamp === DEFAULT_TIMESTAMP
                          ? DEFAULT_TIMESTAMP_LABEL
                          : new TimeAgo(DEFAULT_LOCALE).format(new Date(timestamp))}
                      </Text>
                      <ChakraIconButton icon={<Icon name={"scale-1" as IconName} />} onClick={() => handleCopyToVerify(address, signature)} aria-label="Copy verification" title="Copy verification" />
                    </Flex>
                    <Text
                      title="Copy signature"
                      fontSize="sm"
                      whiteSpace="nowrap"
                      overflowX="hidden"
                      textOverflow="ellipsis"
                      cursor="pointer"
                      color="brand.purp"
                      _hover={{ transform: "scale(1.01)" }}
                      onClick={() => copyText(signature, "Signature copied to clipboard")}
                    >
                      {signature}
                    </Text>
                  </Flex>
                ))
            ) : (
              <Flex justify="center">
                <Spinner color="brand.purp" />
              </Flex>
            )}
            <Flex direction={{ base: "column", sm: "row"}} gap={4} justify="center" align="center">
              {paginationIndex > 0 && (
                <IconButton
                  icon="left-arrow"
                  title={`Page ${paginationIndex}`}
                  color="brand.purp"
                  onClick={() => setPaginationIndex((prev) => prev - 1)}
                />
              )}
              {allSignatures && paginationIndex < totalPaginationPages - 1 && (
                <IconButton
                  icon="right-arrow"
                  title={`Page ${paginationIndex + 2}`}
                  color="brand.purp"
                  onClick={() => setPaginationIndex((prev) => prev + 1)}
                />
              )}
            </Flex>
          </Flex>
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
                      <Text>{address}</Text> {/* TODO: Enable ENS support */}
                    </Box>
                    <Text color="brand.teal">Signature:</Text>
                    <Text>{signature}</Text>
                  </Box>
                )}
                <IconButton
                  color="brand.red"
                  icon="scroll"
                  title="Sign Manifesto"
                  onClick={handleSignManifesto}
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
