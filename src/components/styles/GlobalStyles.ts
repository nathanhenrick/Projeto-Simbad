import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --myBlue: #F0F8FF;
    --myBlack: #0E1216;
    --myDarkRed: #A31621;
    --myDarkBlue: #053C5E;
    --myCyan: #46CAE4;
    --myLightRed: #DB222A;
    --myGreenConfirmation: #38ED7D;

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    padding: 1.25rem;
  }
`;
