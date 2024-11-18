import { ComentarioRequest, ComentarioResponse } from "@/interfaces/api/Comentario";
import RequestApi from "./RequestApi";

const endpoint: string = "comentario";

export const getComentario = async (id: number): Promise<ComentarioResponse | null> => {
  try {
    const response = await RequestApi.get<ComentarioResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el comentario:", error);
    return null;
  }
};

export const getComentarios = async (): Promise<ComentarioResponse[] | null> => {
  try {
    const response = await RequestApi.get<ComentarioResponse[]>(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el comentario:", error);
    return null;
  }
};

export const postComentario = async (Comentario: ComentarioRequest): Promise<ComentarioResponse | null> => {
  try {
    const response = await RequestApi.post<ComentarioResponse>(`${endpoint}`, Comentario);
    return response.data;
  } catch (error: any) {
    console.error("Error al crear el comentario:", error);
    return null;
  }
};

export const putComentario = async (id: number, Comentario: ComentarioRequest): Promise<ComentarioResponse | null> => {
  try {
    const response = await RequestApi.put<ComentarioResponse>(`${endpoint}/${id}`, Comentario);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar el comentario:", error);
    return null;
  }
};

export const deleteComentario = async (id: number): Promise<ComentarioResponse | null> => {
  try {
    const response = await RequestApi.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el comentario:", error);
    return null;
  }
};
