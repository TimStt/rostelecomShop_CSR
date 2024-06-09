import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { IUser } from "../user/types";
import { NextApiRequest } from "next";

export interface IAuthState {
  isOAuth: boolean;
  isLoading: boolean;
  activeForm: TActiveForm;
  loginCheckLoading: boolean;
}

export type TActiveForm = {
  isLogin?: boolean;
  isRegister?: boolean;
};

export interface IAuth {
  email?: string;
  password: string;
  name?: string;
  isOAuth?: boolean;
}

export interface IInputForm {
  register: UseFormRegister<IUser>;
  errors: FieldErrors<IUser>;
  control: Control<IUser, any>;
}

export interface IExtendedNextApiRequest extends NextApiRequest {
  body: IAuth;
}

export interface IResponseData {
  tokens?:
    | { error: any }
    | {
        accessToken: string;
        refreshToken: string;
      };
  warningMessage?: string;
  error?: string;
}
