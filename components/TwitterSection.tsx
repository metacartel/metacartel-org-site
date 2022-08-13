import { Flex, BoxProps, Text } from "@chakra-ui/react";
import { Section } from "./"

export const TwitterSection: React.FC<BoxProps> = (props) => {
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
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa dicta fuga corporis sint. Rem optio soluta repudiandae possimus iusto explicabo. Mollitia ipsam aperiam accusamus a voluptas. Itaque, eaque impedit?</Text>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa dicta fuga corporis sint. Rem optio soluta repudiandae possimus iusto explicabo. Mollitia ipsam aperiam accusamus a voluptas. Itaque, eaque impedit?</Text>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa dicta fuga corporis sint. Rem optio soluta repudiandae possimus iusto explicabo. Mollitia ipsam aperiam accusamus a voluptas. Itaque, eaque impedit?</Text>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa dicta fuga corporis sint. Rem optio soluta repudiandae possimus iusto explicabo. Mollitia ipsam aperiam accusamus a voluptas. Itaque, eaque impedit?</Text>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa dicta fuga corporis sint. Rem optio soluta repudiandae possimus iusto explicabo. Mollitia ipsam aperiam accusamus a voluptas. Itaque, eaque impedit?</Text>
      </Flex>
    </Section>
  )
}
