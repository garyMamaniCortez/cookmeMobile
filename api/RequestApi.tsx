import axios from "axios";

export const handleApiRequest = async <T extends Object>(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any
  ): Promise<T | null> => {
    
    const RequestApi = axios.create({
        baseURL: "http://192.168.1.19:3000/api"
    });

    try {
      const config = {
        headers: data instanceof FormData ? { "Content-Type": "multipart/form-data" } : undefined,
      };
      const response = await RequestApi[method]<T>(url, data, config);
      return response.data;
    } catch (error: any) {
      console.error(`Error en la solicitud [${method.toUpperCase()}] ${url}:`, error, data);
      return null;
    }
  };
