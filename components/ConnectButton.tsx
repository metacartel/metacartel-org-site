import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount, useDisconnect, useEnsName } from "wagmi"
import { Icon, IconName } from "./"
import {
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react"
import theme from "../theme"
import { IconButton } from "./"
import { displayAddress } from "../utils/web3"

interface ConnectWalletProps {
  showNetwork?: boolean
  label?: string
}

export const ConnectButton: React.FC<ConnectWalletProps> = ({
  showNetwork,
  label,
}) => {
  const { address, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: name } = useEnsName()

  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <IconButton
                    icon="key"
                    title={label || "Connect"}
                    color="brand.red"
                    disabled={isConnecting}
                    onClick={openConnectModal}
                  />
                )
              }

              if (chain.unsupported) {
                return (
                  <IconButton
                    onClick={openChainModal}
                    color="brand.red"
                    icon="key"
                    title="Wrong Network"
                  />
                )
              }

              return (
                <Flex gap={3}>
                  {showNetwork && chain.hasIcon && chain.iconUrl && (
                    <Button
                      onClick={openChainModal}
                      display="flex"
                      alignItems="center"
                      bg={chain.iconBackground}
                    >
                      <Image
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                        width={25}
                        height={25}
                      />
                    </Button>
                  )}

                  <Menu
                    offset={[0, 4]}
                    placement="bottom-end"
                    autoSelect={false}
                  >
                    <MenuButton
                      as={Button}
                      rightIcon={
                        <Icon name={"menu" as IconName} color="brand.red" />
                      }
                      color="brand.red"
                      backgroundColor="brand.red.50"
                      transition="all 100ms ease-in-out"
                      _hover={{ bgColor: "brand.red.100" }}
                      width="100%"
                      {...theme.textStyles.iconButton}
                    >
                      <Text
                        color="brand.red"
                        fontSize="sm"
                        fontFamily="button"
                      >
                        {name || displayAddress(address || "")}
                      </Text>
                    </MenuButton>
                    <MenuList backgroundColor="mix.gray.900" minWidth="none">
                      <MenuItem
                        onClick={() => openAccountModal()}
                        _hover={{ backgroundColor: "mix.gray.700" }}
                      >
                        <HStack>
                          <Icon name={"key" as IconName} color="white" />
                          <Box color="white">Wallet</Box>
                        </HStack>
                      </MenuItem>
                      <MenuItem
                        onClick={() => disconnect()}
                        _hover={{ backgroundColor: "mix.gray.600" }}
                      >
                        <HStack
                          spacing={2}
                          fontFamily="button"
                        >
                          <Icon name={"delete" as IconName} color="brand.red" />
                          <Box color="brand.red">Sign Out</Box>
                        </HStack>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              )
            })()}
          </div>
        )
      }}
    </RainbowConnectButton.Custom>
  )
}
