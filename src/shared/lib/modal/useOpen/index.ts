import { useEffect } from "react";

export const useOpen = (
  state: boolean,
  ref: React.RefObject<HTMLDialogElement>
) => {
  useEffect(() => {
    state ? ref.current?.showModal() : ref.current?.close();
  }, [ref, state]);
};
