import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */  
      @font-face {
        font-family: "MexicanTequila";
        src: url("/fonts/MexicanTequila/MexicanTequila.ttf");
        font-style: regular;
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "MexicanTequila";
        src: url("/fonts/MexicanTequila/MexicanTequila-Italic.ttf");
        font-style: italic;
        font-weight: 400;
        font-display: swap;
      }
    `}
  />
);

export default Fonts;
