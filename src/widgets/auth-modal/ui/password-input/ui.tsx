import { isValidPasswordRules } from "@/shared/lib/auth/utils/validation-rules";
import { Input } from "@/shared/ui/input";
import { Controller } from "react-hook-form";
import { massageInputData } from "../../massage-input.data";
import { IInputForm } from "@/shared/config/types/auth";
import { createRef } from "react";

const PasswordInput = ({ register, errors, control }: IInputForm) => {
  const { requiredInput, invalidPassword } = massageInputData;
  const inputRef = createRef<HTMLInputElement>();

  const onFocusInput = () => inputRef.current?.focus();

  return (
    <Controller
      name="password"
      control={control}
      defaultValue=""
      render={({ field: { onBlur, value, onChange } }) => (
        <Input
          {...register(
            "password",
            isValidPasswordRules(invalidPassword, requiredInput)
          )}
          type="password"
          value={value}
          onChange={onChange}
          placeholder="Пароль"
          ref={inputRef}
          error={errors.password?.message}
          hasError={errors.password?.message !== ""}
          togglePassword={true}
          onBlur={onBlur}
          onFocusInput={onFocusInput}
        />
      )}
    />
  );
};

export default PasswordInput;
