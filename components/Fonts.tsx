import { Global } from "@emotion/react";

export const Fonts = () => (
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
      @font-face {
        font-family: "basteleur";
        src: url("/fonts/basteleur/Basteleur-Moonlight.otf");
        font-style: regular;
        font-weight: 400;
        font-display: swap;
      }
      @font-face {
        font-family: "basteleur";
        src: url("/fonts/basteleur/Basteleur-Bold.otf");
        font-style: bold;
        font-weight: 700;
        font-display: swap;
      }
    `}
  />
);
