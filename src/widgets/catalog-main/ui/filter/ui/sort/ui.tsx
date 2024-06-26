import React from "react";
import { sortData } from "./data";
import { useRouter } from "next/navigation";
import { Select } from "../select";

import { useUrlParams } from "@/shared/utils/url";

const Sort = () => {
  const { push } = useRouter();
  const { pathname, params } = useUrlParams();
  const sort = params.get("sort");

  const dataList = Object.values(sortData).map((item) => item.ru);
  console.log(sortData);

  const value = Object.entries(sortData).find(
    ([_, value]) => value.nameBySort === sort
  )?.[1].ru;

  const handleChange = (value: string) => {
    const sortProperty = sortData.find((item) => item.ru === value)?.nameBySort;
    if (!sortProperty) return;

    params.set("sort", sortProperty);

    push(`${pathname}?${params}`);
  };
  console.log("Sort", sort);
  console.log("value", value);

  return (
    <Select
      onChange={(value) => handleChange(value)}
      value={sort ? value : ""}
      dataList={dataList}
      title="Сортировать"
      placeholder="Сортировать"
      hiddenTextOption="Сортировать по"
      type="single"
    />
  );
};

export default Sort;
