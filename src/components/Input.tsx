import { forwardRef, LegacyRef } from "react";

export type InputProps = {
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  onChange?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export type Ref = LegacyRef<HTMLInputElement> | null;

const InputContainer = (
  { placeholder, onKeyDown, type }: InputProps,
  ref: Ref
) => {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      type={type}
    />
  );
};

const Input = forwardRef(InputContainer);
export default Input;
