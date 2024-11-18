import { UsuarioRequest, UsuarioResponse } from "@/interfaces/api/User";
import RequestApi from "./RequestApi";

const endpoint: string = "usuario";

export const getUsuario = async (id: number): Promise<UsuarioResponse | null> => {
  try {
    const response = await RequestApi.get<UsuarioResponse>(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el usuario:", error);
    return null;
  }
};

export const getUsuarios = async (): Promise<UsuarioResponse[] | null> => {
  try {
    const response = await RequestApi.get<UsuarioResponse[]>(`${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el usuario:", error);
    return null;
  }
};

export const postUsuario = async (usuario: UsuarioRequest): Promise<UsuarioResponse | null> => {
  try {
    const response = await RequestApi.post<UsuarioResponse>(`${endpoint}`, usuario);
    return response.data;
  } catch (error: any) {
    console.error("Error al crear el usuario:", error);
    return null;
  }
};

export const putUsuario = async (id: number, usuario: UsuarioRequest): Promise<UsuarioResponse | null> => {
  try {
    const response = await RequestApi.put<UsuarioResponse>(`${endpoint}/${id}`, usuario);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar el usuario:", error);
    return null;
  }
};

export const deleteUsuario = async (id: number): Promise<UsuarioResponse | null> => {
  try {
    const response = await RequestApi.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Error al obtener el usuario:", error);
    return null;
  }
};
