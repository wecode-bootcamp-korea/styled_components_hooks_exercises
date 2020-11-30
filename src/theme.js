import { css } from "styled-components";

const theme = {
  colors: {
    mainBlue: "#0057FF",
    mainBlack: "#191919",
    mainGray: "#696969",
    mainLightGray: "#f2f2f2",
    iconGray: "#959595",
    tagGray: "#CCCCCC",
    borderGray: "#E8E8E8",
    background: "#F9F9F9",
    loginBlack: "#323232",
    loginDarkGray: "#505050",
    loginMidGray: "#747474",
    loginLightGray: "#BCBCBC",
    loginBlue: "#1473E6",
  },
  flexSet: (row = null, column = null, direction = null) => css`
    display: flex;
    justify-content: ${row};
    align-items: ${column};
    flex-direction: ${direction};
  `,
};

export default theme;
