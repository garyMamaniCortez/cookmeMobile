import axios from "axios";

export const handleApiRequest = async <T extends Object>(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any
  ): Promise<T | null> => {
    
    const RequestApi = axios.create({
        baseURL: "http://192.168.1.12:3000/api"
    });

    try {
      const response = await RequestApi[method]<T>(url, data);
      return response.data;
    } catch (error: any) {
      console.error(`Error en la solicitud [${method.toUpperCase()}] ${url}:`, error);
      return null;
    }
  };
