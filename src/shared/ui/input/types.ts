import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  togglePassword?: boolean;
  hasError?: boolean;
  onClear?: () => void;
  variant?: "input-form" | "input-found";
  onFocusInput?: () => void;
}
