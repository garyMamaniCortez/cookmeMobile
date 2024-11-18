import { HistorialBusquedaRequest, HistorialBusquedaResponse } from "@/interfaces/api/HistorialBusqueda";
import RequestApi from "./RequestApi";

const endpoint: string = "historial-busqueda";

export const getHistorialBusqueda = async (id: number): Promise<HistorialBusquedaResponse | null> => {
  try {
    const response = await RequestApi.get<HistorialBusquedaResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el historial busqueda:", error);
    return null;
  }
};

export const getHistorialBusquedas = async (): Promise<HistorialBusquedaResponse[] | null> => {
  try {
    const response = await RequestApi.get<HistorialBusquedaResponse[]>(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el historial busqueda:", error);
    return null;
  }
};

export const postHistorialBusqueda = async (HistorialBusqueda: HistorialBusquedaRequest): Promise<HistorialBusquedaResponse | null> => {
  try {
    const response = await RequestApi.post<HistorialBusquedaResponse>(`${endpoint}`, HistorialBusqueda);
    return response.data;
  } catch (error: any) {
    console.error("Error al crear el historial busqueda:", error);
    return null;
  }
};

export const putHistorialBusqueda = async (id: number, HistorialBusqueda: HistorialBusquedaRequest): Promise<HistorialBusquedaResponse | null> => {
  try {
    const response = await RequestApi.put<HistorialBusquedaResponse>(`${endpoint}/${id}`, HistorialBusqueda);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar el historial busqueda:", error);
    return null;
  }
};

export const deleteHistorialBusqueda = async (id: number): Promise<HistorialBusquedaResponse | null> => {
  try {
    const response = await RequestApi.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el historial busqueda:", error);
    return null;
  }
};
