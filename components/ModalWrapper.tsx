import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  BoxProps,
} from "@chakra-ui/react"

export interface ModalWrapperProps extends BoxProps {
  title: string
  content: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  isOpen?: boolean
  onClose?: () => void
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  content,
  size,
  isOpen,
  onClose,
}: ModalWrapperProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size || "3xl"}>
      <ModalOverlay />
      <ModalContent minWidth="20vw" paddingY={8} bgColor="gray.900">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody bgColor="transparent" marginX={4}>
          <Box>{content}</Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
