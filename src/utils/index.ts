import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? true : !!value);

export const cleanObject = (obj: any): object => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (!isFalsy(result[key])) delete result[key];
  });

  return result;
};

export const useMount = (callback: () => void): void => {
  useEffect(() => {
    callback();
  }, [callback]);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons);

  const clear = () => {
    setValue([]);
  };

  const removeIndex = (index: number) => {
    let _copy = [...value];
    _copy.splice(index, 1);
    setValue(_copy);
  };

  const add = (person: T) => {
    setValue(value.concat(person));
  };

  return { value, setValue, clear, removeIndex, add };
};
