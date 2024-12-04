import { ValoracionRequest, ValoracionResponse } from "@/interfaces/api/Valoracion";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "valoracion";

export const getValoracion = async (id: number): Promise<ValoracionResponse | null> =>
  handleApiRequest<ValoracionResponse>("get", `${endpoint}/${id}`);

export const getValoraciones = async (): Promise<ValoracionResponse[] | null> =>
  handleApiRequest<ValoracionResponse[]>("get", endpoint);

export const postValoracion = async (
  valoracion: ValoracionRequest
): Promise<ValoracionResponse | null> =>
  handleApiRequest<ValoracionResponse>("post", endpoint, valoracion);

export const putValoracion = async (
  id: number,
  valoracion: ValoracionRequest
): Promise<ValoracionResponse | null> =>
  handleApiRequest<ValoracionResponse>("put", `${endpoint}/${id}`, valoracion);

export const deleteValoracion = async (id: number): Promise<ValoracionResponse | null> =>
  handleApiRequest<ValoracionResponse>("delete", `${endpoint}/${id}`);
