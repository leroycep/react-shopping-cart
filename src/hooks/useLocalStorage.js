import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== undefined && storedValue !== null) {
      return JSON.parse(storedValue);
    } else {
      return defaultValue;
    }
  });

  const setStoredValue = newValue => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setState(newValue);
  };

  return [state, setStoredValue];
}
