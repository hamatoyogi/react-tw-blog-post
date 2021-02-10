import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
`;

export interface ButtonProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};
