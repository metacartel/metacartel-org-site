import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

// customize by adding fonts -- load these via href in _document or @fontsource in _app

const theme = extendTheme({
  config,
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
  fonts: {
    heading: "basteleur, serif",
    body: "lisbeth, serif",
    a: "dico-mono-script, serif",
    button: "dico-mono-script, serif",
    mono: "dico-mono, mono",
    hero: "lisbeth-display, serif",
  },
  colors: {
    // If you want to be able to use colorScheme, use a tool like Smart Swatch and create a
    // palette with a range from 50 - 900
    // https://smart-swatch.netlify.app/
    brand: {
      black: "#000000",
      offWhite: "#f4f4f4",
      red: "#EF495F",
      taco: "#FFA229",
      purp: "#BC86FE",
      green: "#75A702",
      sun: "#FBE20A",
      teal: "#38ECAB",
    },
    mix: {
      gray: {
        50: "#feeff2",
        100: "#ded7d9",
        200: "#c2bebf",
        300: "#a7a5a6",
        400: "#8c8c8c",
        500: "#737373",
        600: "#5a5959",
        700: "#423f40",
        800: "#2a2526",
        900: "#17080d",
      },
      red: {
        50: "#ffe5e8",
        100: "#fdb7c0",
        200: "#f68998",
        300: "#f15b6f",
        400: "#eb2e46",
        500: "#d2162d",
        600: "#a40e22",
        700: "#760818",
        800: "#48030d",
        900: "#1e0003",
      },
      taco: {
        50: "#fff3da",
        100: "#ffddae",
        200: "#ffc87d",
        300: "#ffb14b",
        400: "#ff9b1a",
        500: "#e68200",
        600: "#b36500",
        700: "#814800",
        800: "#4f2a00",
        900: "#1f0c00",
      },
      purp: {
        50: "#f3e5ff",
        100: "#d6b2ff",
        200: "#b981fe",
        300: "#9d4efd",
        400: "#811dfb",
        500: "#6706e2",
        600: "#5002b0",
        700: "#39017e",
        800: "#22004e",
        900: "#0d001d",
      },
      green: {
        50: "#f5ffde",
        100: "#e6feaf",
        200: "#d8fd80",
        300: "#c8fd4f",
        400: "#b9fc20",
        500: "#a0e30a",
        600: "#7cb002",
        700: "#577e00",
        800: "#344c00",
        900: "#101a00",
      },
      sun: {
        50: "#fffcdb",
        100: "#fef6ae",
        200: "#fdf07f",
        300: "#fcea4d",
        400: "#fbe41d",
        500: "#e2cb04",
        600: "#b09e00",
        700: "#7d7100",
        800: "#4b4400",
        900: "#1a1700",
      },
      teal: {
        50: "#dcfff3",
        100: "#b2f9e1",
        200: "#87f5cd",
        300: "#59efba",
        400: "#2eeba7",
        500: "#14d18d",
        600: "#07a36e",
        700: "#00744d",
        800: "#00472d",
        900: "#00190e",
      },
    },
  },
  sizes: {
    container: "1200px",
  },
})

export default theme
