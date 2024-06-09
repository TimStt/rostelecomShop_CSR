import { isValidEmailRules } from "@/shared/lib/auth/utils/validation-rules";
import { Input } from "@/shared/ui/input";
import { Controller } from "react-hook-form";
import { massageInputData } from "../../massage-input.data";
import { IInputForm } from "@/shared/config/types/auth";

const EmailInput = ({ register, errors, control }: IInputForm) => {
  const { requiredInput, invalidEmail } = massageInputData;

  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field: { onBlur } }) => (
        <Input
          {...register("email", isValidEmailRules(invalidEmail, requiredInput))}
          type="email"
          placeholder="Электронная почта"
          error={errors.email?.message}
          hasError={errors.email?.message !== ""}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default EmailInput;
