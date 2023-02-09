import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const btnStyles = cva(['btn'], {
  variants: {
    variant: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      success: ['btn-success'],
      error: ['btn-error'],
      ghost: ['btn-ghost'],
    },
    size: {
      xs: ['btn-xs'],
      sm: ['btn-sm'],
      lg: ['btn-lg'],
    },
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof btnStyles> & {
    rounded?: boolean;
    outline?: boolean;
    circle?: boolean;
  };
export const Button = ({
  children,
  variant,
  size,
  className,
  rounded = false,
  outline = false,
  circle = false,
  ...rest
}: ButtonProps) => {
  const classes = [
    btnStyles({ variant, size }),
    {
      rounded: 'rounded-full',
      outline: 'btn-outline',
      circle: 'btn-circle',
    },
  ];

  return (
    <button className={classNames(classes)} {...rest}>
      {children}
    </button>
  );
};
