import { useEffect, useState } from "react";

export const useDataLoader = <T extends Object>(
    fetchFunction: () => Promise<T | null>,
    dependencies: any[] = []
  ): { data: T | null; error?: string } => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | undefined>();
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const result = await fetchFunction();
          setData(result);
          setError(undefined);
        } catch (err) {
          console.error("Error loading data:", err);
          setError("Error al cargar los datos");
        }
      };
  
      loadData();
    }, dependencies);
  
    return { data, error };
};

export const useDataUploader = async <T extends Object>(
    fetchFunction: () => Promise<T | null>,
    errorMessage: string
  ): Promise<{ data: T | null; error?: string }> => {
    try {
      const response = await fetchFunction();
      if (response) {
        return { data: response, error: undefined };
      } else {
        return { data: null, error: errorMessage };
      }
    } catch (err) {
      console.error("Error en API call:", err);
      return { data: null, error: errorMessage };
    }
  };
