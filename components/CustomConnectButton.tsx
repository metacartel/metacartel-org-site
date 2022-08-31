import { Box, ButtonProps } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

interface CustomConnectButtonProps extends ButtonProps {
  icon: string
  title: string
  color: string
}
export const CustomConnectButton: React.FC<CustomConnectButtonProps> = ({
  icon,
  title,
  color,
  onClick,
  ...props
}) => {
  return (
    <Box>
      <ConnectButton chainStatus="none" showBalance={false} />
    </Box>
  )
}
