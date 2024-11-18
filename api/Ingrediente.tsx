import { IngredienteRequest, IngredienteResponse } from "@/interfaces/api/Ingrediente";
import RequestApi from "./RequestApi";

const endpoint: string = "ingrediente";

export const getIngrediente = async (id: number): Promise<IngredienteResponse | null> => {
  try {
    const response = await RequestApi.get<IngredienteResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el ingrediente:", error);
    return null;
  }
};

export const getIngredientes = async (): Promise<IngredienteResponse[] | null> => {
  try {
    const response = await RequestApi.get<IngredienteResponse[]>(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el ingrediente:", error);
    return null;
  }
};

export const postIngrediente = async (Ingrediente: IngredienteRequest): Promise<IngredienteResponse | null> => {
  try {
    const response = await RequestApi.post<IngredienteResponse>(`${endpoint}`, Ingrediente);
    return response.data;
  } catch (error: any) {
    console.error("Error al crear el ingrediente:", error);
    return null;
  }
};

export const putIngrediente = async (id: number, Ingrediente: IngredienteRequest): Promise<IngredienteResponse | null> => {
  try {
    const response = await RequestApi.put<IngredienteResponse>(`${endpoint}/${id}`, Ingrediente);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar el ingrediente:", error);
    return null;
  }
};

export const deleteIngrediente = async (id: number): Promise<IngredienteResponse | null> => {
  try {
    const response = await RequestApi.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el ingrediente:", error);
    return null;
  }
};
