// import { addProductBasketApi } from "@/shared/api/addProductBasketApi/addProductBasketApi";
// import { getProductBasket } from "@/shared/api/getProductBasket";
// import { loginCheck } from "@/shared/api/loginCheck";
// import { refreshToken } from "@/shared/api/refreshTokenApi";
// import { replaceProductBasket } from "@/shared/api/replaceProductBasketAuth/replaceProductBasket";
// import { updateCountBasket } from "@/shared/api/updateCountBasket/updateCountBasket";
// import { JwtError } from "@/shared/config/constants/jwt";
// import {
//   IBasketAdd,
//   IBasketReplace,
//   IBasketUpdateCount,
// } from "@/shared/config/types/goods";
// import { Console, log } from "console";
// import { access } from "fs";

// interface ErrorProps {
//   errorName: string;
//   repeatRequestAfterRefreshData: {
//     functionName: string;
//     payload?: unknown;
//   };
// }

// export const handleJwtError = async ({
//   errorName,
//   repeatRequestAfterRefreshData,
// }: ErrorProps) => {
//   if (errorName === JwtError.EXPIRED_TOKEN) {
//     const tokens = JSON.parse(localStorage.getItem("tokens") as string);
//     console.log(errorName);
//     // const newTokens = await refreshTokenApi({ jwt: tokens.refreshToken });
//     console.log("newTokens", newTokens);

//     if (repeatRequestAfterRefreshData) {
//       const { functionName, payload } = repeatRequestAfterRefreshData;
//       switch (functionName) {
//         case "loginCheck":
//           await loginCheck(newTokens.accessToken);
//           break;
//         case "getProductBasket":
//           await getProductBasket(newTokens.accessToken);
//           break;

//         case "addProductBasket":
//           await addProductBasketApi({
//             ...(payload as IBasketAdd),
//             jwt: newTokens.accessToken,
//           });
//           break;

//         case "replaceProductBasket":
//           await replaceProductBasket({
//             ...(payload as IBasketReplace),
//             jwt: newTokens.accessToken,
//           });
//           break;

//         case "updateCountBasket":
//           await updateCountBasket({
//             ...(payload as IBasketUpdateCount),
//             jwt: newTokens.accessToken,
//           });
//           break;

//         // case :
//         //   return new Error("JwtExpiredError");
//         // case 404:
//         //   return new Error("jwtMissingTokenError");
//         // default:
//         //   return new Error("JwtWebTokenError");
//       }
//     }
//   }
// };
