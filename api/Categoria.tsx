import { CategoriaRequest, CategoriaResponse } from "@/interfaces/api/Categoria";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "categoria";

export const getCategoria = async (id: number): Promise<CategoriaResponse | null> =>
  handleApiRequest<CategoriaResponse>("get", `${endpoint}/${id}`);

export const getCategorias = async (): Promise<CategoriaResponse[] | null> =>
  handleApiRequest<CategoriaResponse[]>("get", endpoint);

export const postCategoria = async (
  usuario: CategoriaRequest
): Promise<CategoriaResponse | null> =>
  handleApiRequest<CategoriaResponse>("post", endpoint, usuario);

export const putCategoria = async (
  id: number,
  usuario: CategoriaRequest
): Promise<CategoriaResponse | null> =>
  handleApiRequest<CategoriaResponse>("put", `${endpoint}/${id}`, usuario);

export const deleteCategoria = async (id: number): Promise<CategoriaResponse | null> =>
  handleApiRequest<CategoriaResponse>("delete", `${endpoint}/${id}`);
