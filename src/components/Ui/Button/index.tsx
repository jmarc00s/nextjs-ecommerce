import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const btnStyles = cva(["btn"], {
  variants: {
    variant: {
      primary: ["btn-primary"],
      secondary: ["btn-secondary"],
      success: ["btn-success"],
      error: ["btn-error"],
      ghost: ["btn-ghost"],
    },
    size: {
      xs: ["btn-xs"],
      sm: ["btn-sm"],
      lg: ["btn-lg"],
    },
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof btnStyles> & {
    rounded?: boolean;
  };
export const Button = ({
  children,
  variant,
  size,
  className,
  rounded = false,
  ...rest
}: ButtonProps) => (
  <button
    className={`${btnStyles({ variant, size })} ${className} ${
      rounded && "rounded-full"
    }`}
    {...rest}
  >
    {children}
  </button>
);
