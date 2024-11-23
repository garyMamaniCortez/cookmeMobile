import { RecetaRequest, RecetaResponse } from "@/interfaces/api/Receta";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "receta";

export const getReceta = async (id: number): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("get", `${endpoint}/${id}`);

export const getRecetas = async (): Promise<RecetaResponse[] | null> =>
  handleApiRequest<RecetaResponse[]>("get", endpoint);

export const postReceta = async (
  usuario: RecetaRequest
): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("post", endpoint, usuario);

export const putReceta = async (
  id: number,
  usuario: RecetaRequest
): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("put", `${endpoint}/${id}`, usuario);

export const deleteReceta = async (id: number): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("delete", `${endpoint}/${id}`);