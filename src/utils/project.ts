import { useAsync } from "./use-async";
import { List } from "../page/home/ListTable";
import { useEffect } from "react";
import { cleanObject } from "./index";
import { useHttp } from "./http";

export const useList = (param?: Partial<List>) => {
  const { run, ...result } = useAsync<List[]>();
  const client = useHttp();
  useEffect(() => {
    run(client(`projects`, { data: cleanObject(param || {}) }));
    // eslint-disable-next-line
  }, [param]);

  return result;
};
