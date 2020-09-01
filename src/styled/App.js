import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <>
      <div className="App">
        <Wrapper>
          <Title>Hello World!</Title>
        </Wrapper>
      </div>
      <div>
        <Button>Normal</Button>
        <Button primary width="100">
          Primary
        </Button>
        <TomatoAnchorButton>Tomato Button</TomatoAnchorButton>
        <IconGray>iconGray</IconGray>
        <RotateLogo />
      </div>
    </>
  );
}

export default App;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: ${({ width }) => (width < 200 ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoAnchorButton = styled(Button.withComponent("a"))`
  color: tomato;
  border-color: tomato;
`;

const IconGray = styled(Button)`
  background-color: ${(props) => props.theme.colors.iconGray};
  color: white;
`;

const RotateLogo = styled.img.attrs(() => ({
  width: "70",
  height: "70",
  src: "/logo.svg",
}))`
  animation: ${rotate} 4s linear infinite;
`;
