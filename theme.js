import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

// customize by adding fonts -- load these via href in _document or @fontsource in _app

const theme = extendTheme({
  config,
  //     heading: "",
  //     body: "",
  //     mono: "Menlo, monospace",
  fonts: {
    hero: "lisbeth-display, serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  colors: {
    // If you want to be able to use colorScheme, use a tool like Smart Swatch and create a
    // palette with a range from 50 - 900
    // https://smart-swatch.netlify.app/
    brand: {
      black: "#000000",
      offWhite: "#f4f4f4",
      green: "#81e6d9",
      red: "#EF495F",
    },
    brandGreen: {
      50: "#e0fefa",
      100: "#bbf3ec",
      200: "#95eadf",
      300: "#6de1d2",
      400: "#48d8c5",
      500: "#31bfac",
      600: "#239586",
      700: "#156a5f",
      800: "#054039",
      900: "#001714",
    },
  },
})

export default theme
