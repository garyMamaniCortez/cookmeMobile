import { HistorialBusquedaRequest, HistorialBusquedaResponse } from "@/interfaces/api/HistorialBusqueda";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "historial-busqueda";

export const getHistorialBusqueda = async (id: number): Promise<HistorialBusquedaResponse[] | null> =>
  handleApiRequest<HistorialBusquedaResponse[]>("get", `${endpoint}/${id}`);

export const getHistorialBusquedas = async (): Promise<HistorialBusquedaResponse[] | null> =>
  handleApiRequest<HistorialBusquedaResponse[]>("get", endpoint);

export const postHistorialBusqueda = async (
  historial: HistorialBusquedaRequest
): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("post", endpoint, historial);

export const putHistorialBusqueda = async (
  id: number,
  historial: HistorialBusquedaRequest
): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("put", `${endpoint}/${id}`, historial);

export const deleteHistorialBusqueda = async (id: number): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("delete", `${endpoint}/${id}`);
