import { Flex, Link, LinkProps } from "@chakra-ui/react";
import { Icon, IconName } from '.'
import theme from '../theme'

interface IconButtonProps extends LinkProps {
  icon: string
  title: string
  color: string
}
export const IconButtonLink: React.FC<IconButtonProps> = ({ icon, title, color, href,...props }) => (
  <Link
    href={href}
    borderColor={color}
    color={color}
    _hover={{ bg: color, color: 'fg' }}
    {...theme.textStyles.iconButton}
    {...props}
    >
    <Flex justifyContent='center'>
      <Icon name={icon as IconName} />
      {title}
    </Flex>
  </Link>
)
