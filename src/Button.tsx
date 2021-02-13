import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants }) => ({
    className: `px-8 py-2 font-semibold ${
      variant === 'default' ? 'text-white' : 'text-red-700'
    } transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
  })
)<{ variant: ButtonVariants }>``;

type ButtonVariants = 'default' | 'warning';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  ...rest
}) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {text}
    </StyledButton>
  );
};
