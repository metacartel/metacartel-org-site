import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// customize by adding fonts -- load these via href in _document or @fontsource in _app

const theme = extendTheme({
  config,
  //   fonts: {
  //     heading: "",
  //     body: "",
  //     mono: "Menlo, monospace",
  //   },
  colors: {
    // If you want to be able to use colorScheme, use a tool like Smart Swatch and create a
    // palette with a range from 50 - 900
    // https://smart-swatch.netlify.app/
    brand: {
      black: "#000000",
      offWhite: "#f4f4f4",
      green: "#81e6d9",
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
});

export default theme;
