import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.black};
  letter-spacing: 0.02em;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

section {
   background-color: ${p => p.theme.background.lightBlue};
  
}
main {
  width: 1000px;
  margin-left: auto ;
  margin-right:auto;
  margin-top: ${p => p.theme.spasing(10)};
  margin-bottom: ${p => p.theme.spasing(10)};
  text-align: center;
  border-radius: ${p => p.theme.radii.md};  
  padding: ${p => p.theme.spasing(4)};
  background-color: ${p => p.theme.background.lightBlue};
  border: 0.5px solid ${p => p.theme.background.violet};
}
`;

