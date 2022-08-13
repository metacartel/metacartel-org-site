import { Flex, BoxProps, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Section } from "./"

interface Annotation {
  start?: number
  end?: number
  probability?: number
  type?: string
  normalized_text?: string
}

interface Tag {
  start: number
  end: number
  tag: string
}

interface Url {
    start: number
    end: number
    url: string
    expanded_url: string
    display_url: string
    status: string
    title: string
    description: string
    unwound_url: string
}
interface Entity {
  annotations?: Annotation[]
  cashtags?: Tag[]
  hashtags?: Tag[]
  mentions?: Tag[]
  urls?: Url[]
}

interface Attachment {
  [key: string]: any;
}

interface Tweet {
  text: string // Tweet text
  id: string 
  created_at: string // 2022-08-04T16:18:38.000Z format
  entities?: Entity[]
  attachments?: Attachment[]
}

interface TweetProps extends BoxProps {
  tweet: Tweet
}

const Tweet: React.FC<TweetProps> = ({ tweet: { created_at, text } }) => {
  return (
    <Flex gap={2}>
      <Image src='/images/meta-cartel-twitter.jpeg' height={10} width={10} borderRadius='full' />
      <Flex direction='column' fontFamily='manrope'>
        <Text as='span' color="gray.700">
          <Text as='span' fontWeight='bold' color='fg'>
            MetaCartel
          </Text>
          &nbsp;@Meta_Cartel • {new Date(created_at).toLocaleDateString('en')}</Text>
        <Text as='span'>{text}</Text>
      </Flex>
    </Flex>
  )
}
export const TwitterSection: React.FC<BoxProps> = (props) => {
  const [data, setData] = useState<Tweet[]>([]);
  useEffect(() => {
    ;(async () => {
      const response = await fetch("api/tweets")
      const data: Tweet[] = await response.json()
      setData(data)
    })()
  }, [])
  return (
    <Section
      bgColor='brand.red'
      bgSize='cover'
      _before={{
        content: '""',
        position: 'absolute',
        inset: '-200vmax',
        bgImage: 'url(/images/chili-bg-tile.png)',
        transform: { base: 'scale(0.5) rotate(13.5deg)' },
        zIndex: -1,
      }}
      clipPath='polygon(-100% 0, 200% 0, 200% 100%, -100% 100%)'
      display="flex"
      justifyContent='flex-end'
      px={{ base: 8, md: 32 }}
      py={{ base: 8, md: 16 }}
      {...props}
    >
      <Flex
        height="420px"
        maxW={{ base: '100%', sm: 420}}
        w="100%"
        border="8px"
        borderColor="fg"
        color="fg"
        bg="bg"
        p={{ base: 4, md: 6 }}
        gap={6}
        overflowY="scroll"
        direction="column"
      >
        <Text
          as="h2"
          fontFamily="body"
          fontWeight="bold"
          fontSize='2xl'
          lineHeight="1"
        >
          MetaCartel Tweets
        </Text>
        {data.map((tweet: Tweet) => <Tweet tweet={tweet} key={tweet.id} />)}
      </Flex>
    </Section>
  )
}
