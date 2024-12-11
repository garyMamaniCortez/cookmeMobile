import { NotificacionRequest, UsuarioLogin, UsuarioRequest, UsuarioResponse } from "@/interfaces/api/User";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "usuario";

export const getUsuario = async (id: number): Promise<UsuarioResponse | null> =>
  handleApiRequest<UsuarioResponse>("get", `${endpoint}/${id}`);

export const getUsuarios = async (): Promise<UsuarioResponse[] | null> =>
  handleApiRequest<UsuarioResponse[]>("get", endpoint);

export const postUsuario = async (
  usuario: UsuarioRequest
): Promise<UsuarioResponse | null> =>
  handleApiRequest<UsuarioResponse>("post", endpoint, usuario);

export const putUsuario = async (
  id: number,
  usuario: UsuarioRequest
): Promise<UsuarioResponse | null> =>
  handleApiRequest<UsuarioResponse>("put", `${endpoint}/${id}`, usuario);

export const deleteUsuario = async (id: number): Promise<UsuarioResponse | null> =>
  handleApiRequest<UsuarioResponse>("delete", `${endpoint}/${id}`);

export const postLogin = async (
  usuario: UsuarioLogin
): Promise<UsuarioResponse | null> =>
  handleApiRequest<UsuarioResponse>("post", "login", usuario);

export const getNotificaciones = async (id: number): Promise<NotificacionRequest[] | null> =>
  handleApiRequest<NotificacionRequest[]>("get", `notificaciones/${id}`);
