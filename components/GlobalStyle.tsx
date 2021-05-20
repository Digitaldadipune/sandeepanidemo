import { createGlobalStyle } from 'styled-components';

import COLORS from 'static/colors';

export const EmbedGlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${COLORS.PRIMARY};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
  }
  @media (max-width: 1024px){
    html {
        font-size: 10px;
    }
  }
`;

export const AppGlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${COLORS.PRIMARY};
  }
  @import url("https://p.typekit.net/p.css?s=1&k=wqy1ffl&ht=tk&f=34666.34693.34695.34696.34697.34700&a=39445870&app=typekit&e=css");

  @font-face {
    font-family:"Halyard Display";
    src:url("https://use.typekit.net/af/5d3b70/00000000000000003b9b40df/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/5d3b70/00000000000000003b9b40df/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/5d3b70/00000000000000003b9b40df/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
    font-display:swap;
    font-style:normal;
    font-weight:500;
  }

  @font-face {
    font-family:"Halyard Text";
    src:url("https://use.typekit.net/af/58984a/00000000000000003b9b40fb/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/58984a/00000000000000003b9b40fb/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/58984a/00000000000000003b9b40fb/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
    font-display:swap;
    font-style:normal;
    font-weight:300;
  }

  @font-face {
    font-family:"Halyard Text";
    src:url("https://use.typekit.net/af/360977/00000000000000003b9b40fd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/360977/00000000000000003b9b40fd/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/360977/00000000000000003b9b40fd/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:swap;
    font-style:normal;
    font-weight:400;
  }

  @font-face {
    font-family:"Halyard Text";
    src:url("https://use.typekit.net/af/0bfedf/00000000000000003b9b40fe/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/0bfedf/00000000000000003b9b40fe/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/0bfedf/00000000000000003b9b40fe/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:swap;
    font-style:italic;
    font-weight:400;
  }

  @font-face {
    font-family:"Halyard Text";
    src:url("https://use.typekit.net/af/6e8f0a/00000000000000003b9b40ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/6e8f0a/00000000000000003b9b40ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/6e8f0a/00000000000000003b9b40ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
    font-display:swap;
    font-style:normal;
    font-weight:500;
  }

  @font-face {
    font-family:"Halyard Text";
    src:url("https://use.typekit.net/af/261c77/00000000000000003b9b4101/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/261c77/00000000000000003b9b4101/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/261c77/00000000000000003b9b4101/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
    font-display:swap;
    font-style:normal;
    font-weight:600;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
  }

  @media (max-width: 1024px){
    html {
        font-size: 9px;
    }
  }
  
`;

export default AppGlobalStyles;
