import React from "react";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 980px;
  margin: auto;
`;

export const Title = styled.h1`
  color: green;
  text-align: center;
  margin: 3rem 0;
`;

// Adapting based on props ( style dựa vào props )
export const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "green")};
  background: ${(props) => (props.primary ? "green" : "white")};
  padding: 0.5rem 1rem;
  border: 1px solid green;
  outline: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: green;
  }
`;

// Extending Styles ( Tạo một button có màu khác )
export const PinkButton = styled(Button)`
  color: pink;
  border-color: pink;

  //----- pseudo class, pseodo element, .class cú pháp tương tự như scss -----
  &:hover {
    color: #fff;
    background: pink;
  }
`;

// Styling any component
export const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

// Passed props
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  width: 50px;
  height: 50px;
  background: olive;
  animation: ${rotate} 2s linear infinite;
`;
