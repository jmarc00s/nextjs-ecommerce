import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  Ref,
} from 'react';

const inputStyles = cva(['input w-full'], {
  variants: {
    variant: {
      bordered: ['input-bordered'],
      ghost: ['input-ghost'],
    },
    color: {
      primary: ['input-primary'],
      secondary: ['input-secondary'],
      accent: ['input-accent'],
      info: ['input-info'],
      success: ['input-success'],
      error: ['input-error'],
      warning: ['input-warning'],
    },
    size: {
      xs: ['input-xs'],
      sm: ['input-sm'],
      md: ['input-md'],
      lg: ['input-lg'],
    },
  },
  defaultVariants: {
    variant: 'bordered',
  },
});

export type InputProps = VariantProps<typeof inputStyles> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    label?: string;
    errorMessage?: string;
    htmlSize?: number | undefined;
  };

const InputComponent = (
  {
    variant,
    color,
    size = 'md',
    className,
    htmlSize,
    label,
    id,
    errorMessage,
    ...rest
  }: InputProps,
  ref: Ref<HTMLInputElement>
): ReactElement => (
  <div className={classNames('flex flex-col w-full', className)}>
    {!!label?.length && (
      <label className="label font-semibold" htmlFor={id}>
        <span className={`label-text ${errorMessage?.length && 'text-error'}`}>
          {label}
        </span>
      </label>
    )}
    <input
      ref={ref}
      data-testid="input"
      className={`${
        errorMessage?.length && 'input-error placeholder:text-error'
      } ${inputStyles({
        variant,
        color,
        size,
      })}`}
      {...rest}
      id={id}
      size={htmlSize}
    />
    {!!errorMessage?.length && (
      <label className="label">
        <span className="label-text-alt text-error text-xs">
          {errorMessage}
        </span>
      </label>
    )}
  </div>
);

export const Input = forwardRef(InputComponent);
