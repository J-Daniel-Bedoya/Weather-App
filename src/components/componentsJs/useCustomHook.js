import { useState } from "react";

export function useCustomHook  (key, initialValue ) {
 
  const [storedValue, setStoredVule] = useState(() =>{
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    }catch (error) {
      console.error(error);
    }
  })
  
  const setValue = () => {
    try {
      setStoredVule(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    }catch (error) {
      return initialValue
    }
  }
  return [storedValue, setValue]
};

export default useCustomHook;