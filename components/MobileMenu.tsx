import { FC, useRef } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
  Flex,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { PAGE_PATHS } from "../constants"

export const MobileMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <HamburgerIcon
        as="button"
        ref={btnRef}
        onClick={onOpen}
        h="24px"
        w="24px"
        display={{ base: "block", lg: "none" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="start"
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="transparent">
          <DrawerCloseButton color="brand.red" />
          <DrawerBody bg="fg" color="brand.red" textAlign="center">
            <Flex direction="column" mt={16} gap={6}>
              {PAGE_PATHS.map(({ name, path }) => (
                <Link href={path} key={name}>
                  {name}
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
