import { Flex, Button, ButtonProps } from "@chakra-ui/react"
import { Icon, IconName } from "./"
import theme from "../theme"

interface IconButtonProps extends ButtonProps {
  icon: string
  title: string
  color: string
}
export const IconButton: React.FC<IconButtonProps> = ({ icon, title, color, onClick, ...props }) => (
  <Button
    onClick={onClick}
    borderColor={color}
    color={color}
    _hover={{ bg: color, color: "fg" }}
    {...theme.textStyles.iconButton}
    {...props}
  >
    <Flex justifyContent="center" alignItems="center" gap={2}>
      <Icon name={icon as IconName} />
      {title}
    </Flex>
  </Button>
)
