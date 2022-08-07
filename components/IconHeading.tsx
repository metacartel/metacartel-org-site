import { Text, HStack, BoxProps } from "@chakra-ui/react";
import { Icon, IconName } from "./"

export interface IProps extends BoxProps {
  icon: string
  title: string
  color: string
}

export const IconHeading: React.FC<IProps> = (props) => {
  const { icon, title, color } = props;
  return (
    <HStack {...props} color={color}>
      <Icon name={icon as IconName} />
      <Text
        as="h2"
        textTransform='uppercase'
        fontSize="lg"
      >
        {title}
      </Text>
    </HStack>)
}
