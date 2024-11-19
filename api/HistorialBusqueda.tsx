import { HistorialBusquedaRequest, HistorialBusquedaResponse } from "@/interfaces/api/HistorialBusqueda";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "historial-busqueda";

export const getHistorialBusqueda = async (id: number): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("get", `${endpoint}/${id}`);

export const getHistorialBusquedas = async (): Promise<HistorialBusquedaResponse[] | null> =>
  handleApiRequest<HistorialBusquedaResponse[]>("get", endpoint);

export const postHistorialBusqueda = async (
  usuario: HistorialBusquedaRequest
): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("post", endpoint, usuario);

export const putHistorialBusqueda = async (
  id: number,
  usuario: HistorialBusquedaRequest
): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("put", `${endpoint}/${id}`, usuario);

export const deleteHistorialBusqueda = async (id: number): Promise<HistorialBusquedaResponse | null> =>
  handleApiRequest<HistorialBusquedaResponse>("delete", `${endpoint}/${id}`);
