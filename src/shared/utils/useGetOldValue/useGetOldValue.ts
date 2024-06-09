import { useEffect, useState } from "react";

const useGetOldValue = (value: any) => {
  const [oldValue, setOldValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setOldValue(value);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return oldValue;
};

export default useGetOldValue;
