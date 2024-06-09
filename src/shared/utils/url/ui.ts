import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface UrlParams {
  nameState: string;
  state?: string;
  handlerDelete: () => void;
  handlerSet: (value: string) => void;
}

const useUrlParams = (watchState?: UrlParams, sort: boolean = false) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams?.toString());

  useEffect(() => {
    if (watchState) {
      const { nameState, state, handlerDelete, handlerSet } = watchState;

      const localParams = new URLSearchParams(searchParams?.toString());
      const paramsState = localParams.get(nameState);

      if (paramsState === state) return;
      if (!paramsState?.length) {
        handlerDelete();
        return;
      }
      sort ? handlerSet(paramsState.split(":")[1]) : handlerSet(paramsState);
    }
  }, [pathname, searchParams, sort, watchState]);

  return {
    pathname,
    params,
    searchParams,
  };
};

export default useUrlParams;
