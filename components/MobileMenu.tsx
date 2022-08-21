import { FC, useRef } from 'react'
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { PAGE_PATHS } from '../constants'

export const MobileMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <HamburgerIcon as='button' ref={btnRef} onClick={onOpen} h='24px' w='24px' display={{ base: 'block', lg: 'none' }} />
      <Drawer
        isOpen={isOpen}
        placement='left'
        size="xs"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="bg">
          <DrawerCloseButton />
          <DrawerHeader>Stay spicy</DrawerHeader>

          <DrawerBody>
            {PAGE_PATHS.map(({ name, path }) =>
              <Link href={path} key={name} display={{ base: 'none', lg: 'inline-block'}}>
                {name}
              </Link>
            )}
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

    </>
  )
}

