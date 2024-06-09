import { isValidUsernameRules } from "@/shared/lib/auth/utils/validation-rules";
import { Input } from "@/shared/ui/input";
import { Controller } from "react-hook-form";
import { massageInputData } from "../../massage-input.data";
import { IInputForm } from "@/shared/config/types/auth";

const NameInput = ({ register, errors, control }: IInputForm) => {
  const { requiredInput, invalidName } = massageInputData;

  return (
    <Controller
      name="name"
      control={control}
      defaultValue=""
      render={({ field: { onBlur } }) => (
        <Input
          {...register(
            "name",
            isValidUsernameRules(invalidName, requiredInput)
          )}
          onBlur={onBlur}
          placeholder="Имя"
          error={errors.name?.message}
          hasError={errors.name?.message !== ""}
          // value={isValueName}
        />
      )}
    />
  );
};

export default NameInput;
