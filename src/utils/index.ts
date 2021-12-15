import { useEffect, useState } from "react";

// export const isFalsy = (value:unknown) => (value === 0 ? true : !!value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (obj: { [key: string]: unknown }) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (isVoid(result[key])) delete result[key];
  });

  return result;
};

export const useMount = (callback: () => void): void => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
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
