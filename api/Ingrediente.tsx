import { IngredienteRequest, IngredienteResponse } from "@/interfaces/api/Ingrediente";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "ingrediente";

export const getIngrediente = async (id: number): Promise<IngredienteResponse | null> =>
  handleApiRequest<IngredienteResponse>("get", `${endpoint}/${id}`);

export const getIngredientes = async (): Promise<IngredienteResponse[] | null> =>
  handleApiRequest<IngredienteResponse[]>("get", endpoint);

export const postIngrediente = async (
  usuario: IngredienteRequest
): Promise<IngredienteResponse | null> =>
  handleApiRequest<IngredienteResponse>("post", endpoint, usuario);

export const putIngrediente = async (
  id: number,
  usuario: IngredienteRequest
): Promise<IngredienteResponse | null> =>
  handleApiRequest<IngredienteResponse>("put", `${endpoint}/${id}`, usuario);

export const deleteIngrediente = async (id: number): Promise<IngredienteResponse | null> =>
  handleApiRequest<IngredienteResponse>("delete", `${endpoint}/${id}`);
