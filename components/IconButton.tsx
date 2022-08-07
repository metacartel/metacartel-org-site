import { Button, ButtonProps } from "@chakra-ui/react";
import { Icon, IconName } from './'

interface IconButtonProps extends ButtonProps{
  icon: string
  title: string
  color: string
}
export const IconButton: React.FC<IconButtonProps> = ({ icon, title, color, onClick,...props }) => (
  <Button
    as="button"
    cursor="pointer"
    justifyContent="center"
    alignItems="center"
    border="1px solid"
    borderColor={color}
    color={color}
    borderRadius='none'
    fontWeight='500'
    fontFamily='dico-mono-script, serif'
    bg="none"
    onClick={onClick}
    _hover={{bg: 'brand.red', color: 'white'}}
    gap={2}
    {...props}
  >
    <Icon name={icon as IconName} />
    {title}
  </Button>
);