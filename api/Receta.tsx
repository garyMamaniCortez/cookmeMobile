import { RecetaRequest, RecetaResponse, RecetaSearch } from "@/interfaces/api/Receta";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "receta";

export const getReceta = async (id: number): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("get", `${endpoint}/${id}`);

export const getRecetas = async (): Promise<RecetaResponse[] | null> =>
  handleApiRequest<RecetaResponse[]>("get", endpoint);

export const postReceta = async (
  receta: RecetaRequest
): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("post", endpoint, receta);

export const putReceta = async (
  id: number,
  receta: RecetaRequest
): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("put", `${endpoint}/${id}`, receta);

export const deleteReceta = async (id: number): Promise<RecetaResponse | null> =>
  handleApiRequest<RecetaResponse>("delete", `${endpoint}/${id}`);

export const searchReceta = async (
  query: RecetaSearch
): Promise<RecetaResponse[] | null> =>
  handleApiRequest<RecetaResponse[]>("post", `${endpoint}/buscar`, query)
