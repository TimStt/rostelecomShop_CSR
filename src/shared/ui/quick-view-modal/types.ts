import { IGoods } from "@/shared/config/types/goods";

export interface IQuickViewModalProps {
  product: IGoods;
  refModal: React.RefObject<HTMLDialogElement>;
}
