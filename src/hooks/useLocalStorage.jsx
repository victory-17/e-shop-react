// initla locals
//initil state

import { useEffect, useState } from "react";

export default function useLocalStorage(key) {
  const [data, setData] = useState(null);
  const localStorageData = JSON.parse(localStorage.getItem(key));
  useEffect(() => {
    if (localStorageData) {
      setData(localStorageData);
    }
  }, []);

  return data;
}
//Performance //Ahmed Al
