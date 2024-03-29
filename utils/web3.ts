import { Chain, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const gnosisChain: Chain = {
  id: 100,
  name: "Gnosis Chain",
  network: "gno",
  iconUrl:
    "https://styles.redditmedia.com/t5_yot2j/styles/communityIcon_nday7uia8wa81.png",
  iconBackground: "#ddd",
  nativeCurrency: {
    decimals: 18,
    name: "xDai",
    symbol: "xDAI",
  },
  rpcUrls: {
    default: "https://rpc.gnosischain.com/",
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "https://blockscout.com/xdai/mainnet" },
  },
  testnet: false,
}

const dev = process.env.NODE_ENV === "development"
const defaultChains = dev
  ? [gnosisChain, chain.goerli, chain.rinkeby, chain.localhost]
  : [gnosisChain, chain.mainnet, chain.goerli, chain.rinkeby]
export const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }),
  publicProvider(),
])

const { connectors } = getDefaultWallets({
  appName: "MetaCartel Site",
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export const displayAddress = (address: string) =>
  address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "0x"
