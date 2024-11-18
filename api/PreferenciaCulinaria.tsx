import { PreferenciaCulinariaRequest, PreferenciaCulinariaResponse } from "@/interfaces/api/PreferenciaCulinaria";
import RequestApi from "./RequestApi";

const endpoint: string = "PreferenciaCulinaria";

export const getPreferenciaCulinaria = async (id: number): Promise<PreferenciaCulinariaResponse | null> => {
  try {
    const response = await RequestApi.get<PreferenciaCulinariaResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el PreferenciaCulinaria:", error);
    return null;
  }
};

export const getPreferenciaCulinarias = async (): Promise<PreferenciaCulinariaResponse[] | null> => {
  try {
    const response = await RequestApi.get<PreferenciaCulinariaResponse[]>(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el PreferenciaCulinaria:", error);
    return null;
  }
};

export const postPreferenciaCulinaria = async (PreferenciaCulinaria: PreferenciaCulinariaRequest): Promise<PreferenciaCulinariaResponse | null> => {
  try {
    const response = await RequestApi.post<PreferenciaCulinariaResponse>(`${endpoint}`, PreferenciaCulinaria);
    return response.data;
  } catch (error: any) {
    console.error("Error al crear el PreferenciaCulinaria:", error);
    return null;
  }
};

export const putPreferenciaCulinaria = async (id: number, PreferenciaCulinaria: PreferenciaCulinariaRequest): Promise<PreferenciaCulinariaResponse | null> => {
  try {
    const response = await RequestApi.put<PreferenciaCulinariaResponse>(`${endpoint}/${id}`, PreferenciaCulinaria);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar el PreferenciaCulinaria:", error);
    return null;
  }
};

export const deletePreferenciaCulinaria = async (id: number): Promise<PreferenciaCulinariaResponse | null> => {
  try {
    const response = await RequestApi.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el PreferenciaCulinaria:", error);
    return null;
  }
};
