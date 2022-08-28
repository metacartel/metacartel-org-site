import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel="preload"
          href="/fonts/MexicanTequila/MexicanTequila.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/MexicanTequila/MexicanTequila-Italic.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/basteleur/Basteleur-Moonlight.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/basteleur/Basteleur-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="stylesheet" href="https://use.typekit.net/kfa4uro.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
