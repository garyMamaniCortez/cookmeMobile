import { ComentarioRequest, ComentarioResponse } from "@/interfaces/api/Comentario";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "comentario";

export const getComentario = async (id: number): Promise<ComentarioResponse[] | null> =>
  handleApiRequest<ComentarioResponse[]>("get", `${endpoint}/${id}`);

export const getComentarios = async (): Promise<ComentarioResponse[] | null> =>
  handleApiRequest<ComentarioResponse[]>("get", endpoint);

export const postComentario = async (
  comentario: ComentarioRequest
): Promise<ComentarioResponse | null> =>
  handleApiRequest<ComentarioResponse>("post", endpoint, comentario);

export const putComentario = async (
  id: number,
  comentario: ComentarioRequest
): Promise<ComentarioResponse | null> =>
  handleApiRequest<ComentarioResponse>("put", `${endpoint}/${id}`, comentario);

export const deleteComentario = async (id: number): Promise<ComentarioResponse | null> =>
  handleApiRequest<ComentarioResponse>("delete", `${endpoint}/${id}`);
