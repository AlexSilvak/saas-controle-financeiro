// hooks/useLancamentos.ts
import { useEffect, useState } from "react";
import axios from "axios";

export function useLancamentos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/lancamentos")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return data;
}
