import { CategoriaRequest, CategoriaResponse } from "@/interfaces/api/Categoria";
import RequestApi from "./RequestApi";

const endpoint: string = "categoria";

export const getCategoria = async (id: number): Promise<CategoriaResponse | null> => {
    try {
      const response = await RequestApi.get<CategoriaResponse>(`${endpoint}/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Error al obtener la categoria: ", error);
      return null;
    }
};

export const getCategorias = async (): Promise<CategoriaResponse | null> => {
    try {
      const response = await RequestApi.get<CategoriaResponse>(`${endpoint}`);
      return response.data;
    } catch (error: any) {
      console.error("Error al obtener las categorias: ", error);
      return null;
    }
};

export const postCategoria = async (Categoria: CategoriaRequest): Promise<CategoriaResponse | null> => {
    try {
      const response = await RequestApi.post<CategoriaResponse>(`${endpoint}`, Categoria);
      return response.data;
    } catch (error: any) {
      console.error("Error al crear la categoria: ", error);
      return null;
    }
};

export const putCategoria = async (id: number, Categoria: CategoriaRequest): Promise<CategoriaResponse | null> => {
    try {
      const response = await RequestApi.put<CategoriaResponse>(`${endpoint}/${id}`, Categoria);
      return response.data;
    } catch (error: any) {
      console.error("Error al actualizar la Categoria:", error);
      return null;
    }
};

export const deleteUsuario = async (id: number): Promise<CategoriaResponse | null> => {
    try {
      const response = await RequestApi.delete(`${endpoint}/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Error al obtener la categoria:", error);
      return null;
    }
};
