import React from "react";
import "./App.css";
import Ctn from "../src/containers/Container";
import {
  Title,
  Button,
  PinkButton,
  StyledLink,
  Input,
  Rotate,
} from "../src/styles/elements";

function App() {
  return (
    <Ctn>
      <Title>Styled components demo!</Title>
      <br />
      <Button>Button!</Button>
      <br />
      <PinkButton>PinkButton!</PinkButton>
      <br />
      <StyledLink as="a" href="/">
        Styling any Components
      </StyledLink>
      <br />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      <Rotate>Rotate</Rotate>
    </Ctn>
  );
}

export default App;
