import { RecetaRequest, RecetaResponse } from "@/interfaces/api/Receta";
import RequestApi from "./RequestApi";

const endpoint: string = "receta";

export const getReceta = async (id: number): Promise<RecetaResponse | null> => {
  try {
    const response = await RequestApi.get<RecetaResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener la receta:", error);
    return null;
  }
};

export const getRecetas = async (): Promise<RecetaResponse[] | null> => {
  try {
    const response = await RequestApi.get<RecetaResponse[]>(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener las recetas:", error);
    return null;
  }
};

export const postReceta = async (Receta: RecetaRequest): Promise<RecetaResponse | null> => {
  try {
    const response = await RequestApi.post<RecetaResponse>(`${endpoint}`, Receta);
    return response.data;
  } catch (error: any) {
    console.error("Error al crear la receta:", error);
    return null;
  }
};

export const putReceta = async (id: number, Receta: RecetaRequest): Promise<RecetaResponse | null> => {
  try {
    const response = await RequestApi.put<RecetaResponse>(`${endpoint}/${id}`, Receta);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar la receta:", error);
    return null;
  }
};

export const deleteReceta = async (id: number): Promise<RecetaResponse | null> => {
  try {
    const response = await RequestApi.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener la receta:", error);
    return null;
  }
};
