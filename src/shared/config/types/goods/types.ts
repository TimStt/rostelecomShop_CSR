import { Db } from "mongodb";
import { ObjectId } from "mongoose";
import { Interface } from "readline";

export interface IGoods {
  _id: string;
  name: string;
  price: number;
  images: Array<string>;
  description: string;
  vendorCode: string;
  type: string;
  article: number;
  category: "clothes" | "accessories" | "office" | "souvenirs";
  inStock: boolean;
  sizes?: TSize[];
  popularity: number;
  isBestseller: boolean;
  isNew: boolean;
  characteristics: TCharacteristicsGoods;
  isCount: number | undefined;
}

export type TCharacteristicsGoods =
  | ICharacteristicsTShirts
  | ICharacteristicsLongsleeves
  | ICharacteristicsHoodie
  | ICharacteristicsOuterwear
  | ICharacteristicsBags
  | ICharacteristicsUmbrellas
  | ICharacteristicsHeaddress
  | ICharacteristicsOfficeNotebook
  | ICharacteristicsOfficePen
  | ICharacteristicsSouvenirs;

export type IGoodsList = IGoods[];

export type TSize = {
  S?: boolean;
  M?: boolean;
  L?: boolean;
  XL?: boolean;
  XXL?: boolean;
  XXXL?: boolean;
};

export interface IClothes {
  type: string;
  color: string;
  collar: string;
  decor: boolean;
  composition: string;
}

export interface ICharacteristicsWithComposition extends IClothes {
  composition: string;
}

export interface ICharacteristicsOfficeNotebook {
  type: IClothes["type"];
  color: IClothes["color"];
  cover: string;
  ruled: string;
  fastenings: string;
}
export interface ICharacteristicsOfficePen {
  type: IClothes["type"];
  color: IClothes["color"];
  penType: string;
  peculiarity: string;
  frame: string;
}
export interface ICharacteristicsSouvenirs {
  type: IClothes["type"];
  color: IClothes["color"];
  material: string;
  height: number;
  weight: number;
}

export interface ICharacteristicsTShirts extends IClothes {
  silhouette: string;
  print: string;
  season: string;
  collection: string;
}

export interface ICharacteristicsOuterwear extends IClothes {
  features: string;
  upperMaterial: string;
  liningMaterial: string;
  collection: string;
}

export interface ICharacteristicsLongsleeves extends IClothes {
  silhouette: string;
  print: string;
  season: string;
  collection: string;
  features: string;
  fabricType: string;
  sleeve: string;
}

export interface ICharacteristicsHoodie extends IClothes {
  silhouette: string;
  print: string;
  season: string;
  collection: string;
  features: string;
  fabricType: string;
  sleeve: string;
  clasp: boolean;
}

interface IAccessories {
  type: string;
  color: string;
  composition: string;
}

export interface ICharacteristicsBags extends IAccessories {
  collection: string;
  wearingMethod: string;
  texture: string;
  style: string;
}

export interface ICharacteristicsUmbrellas extends IAccessories {
  numberOfSpokes: number;
  spokeMaterial: string;
  foldedLengths: number;
  mechanism: string;
}

export interface ICharacteristicsHeaddress extends IAccessories {
  season: string;
}

export interface IBasketGoods {
  _id?: string;
  clientId: string;
  userId?: string;
  productId: string;
  image: string;
  name: string;
  size: string;
  count: number;
  price: number;
  totalPrice: number;
  inStock: boolean;
  color: string;
  category: string;
  quantityStock: number;
}

export interface IBasketAdd {
  clientId: string;
  userId: string;
  productId: string;

  jwt: string;
  setSpinner: (state: boolean) => void;
  count: string | number;
  sizes: string;
  category: string;
}

export interface IBasketReplace {
  basketProduct: IBasketGoods[];
  jwt: string;
}

export interface IBasketUpdateCount {
  id: string;
  count: number;
  setSpinner: (state: boolean) => void;
  jwt: string;
}

export interface IBasketDelete {
  id: string;
  jwt: string;
  setSpinner: (state: boolean) => void;
}

export type Tcollections = "clothes" | "accessories" | "basket" | "users";

export interface IBasketState {
  goods: IBasketGoods[];
  loading: boolean;
  totalPrice: number;
}

export interface IFavoritesAndCompareState {
  goods: IGoods[];
  loading: boolean;
}

export interface INewSizeClothes {
  size: string;
  ruSize: string;
  chest_circumference: string;
  waist_circumference: string;
  hip_circumference: string;
  isHas: boolean;
}

export interface INewSizeAccessories {
  size: string;
  isHas: boolean;
}

export interface InewSize {
  clothes?: INewSizeClothes[];
  accessories?: INewSizeAccessories[];
}

export interface IParamsToGetProduct {
  category: string;
  id_product: string;
}
export interface IFoundAllGoodsApi {
  value?: string;
  type?: string;
  category?: string;
}

export interface IFoundAllGoods extends IFoundAllGoodsApi {
  db: Db;
}

export interface IGoodsFoundModal {
  _id: IGoods["_id"];
  name: IGoods["name"];
  type: IGoods["type"];
  price: IGoods["price"];
  category: IGoods["category"];
  image: IGoods["images"][0];
}
