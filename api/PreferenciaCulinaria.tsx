import { PreferenciaCulinariaRequest, PreferenciaCulinariaResponse } from "@/interfaces/api/PreferenciaCulinaria";
import { handleApiRequest } from "./RequestApi";

const endpoint: string = "PreferenciaCulinaria";

export const getPreferenciaCulinaria = async (id: number): Promise<PreferenciaCulinariaResponse | null> =>
  handleApiRequest<PreferenciaCulinariaResponse>("get", `${endpoint}/${id}`);

export const getPreferenciaCulinarias = async (): Promise<PreferenciaCulinariaResponse[] | null> =>
  handleApiRequest<PreferenciaCulinariaResponse[]>("get", endpoint);

export const postPreferenciaCulinaria = async (
  usuario: PreferenciaCulinariaRequest
): Promise<PreferenciaCulinariaResponse | null> =>
  handleApiRequest<PreferenciaCulinariaResponse>("post", endpoint, usuario);

export const putPreferenciaCulinaria = async (
  id: number,
  usuario: PreferenciaCulinariaRequest
): Promise<PreferenciaCulinariaResponse | null> =>
  handleApiRequest<PreferenciaCulinariaResponse>("put", `${endpoint}/${id}`, usuario);

export const deletePreferenciaCulinaria = async (id: number): Promise<PreferenciaCulinariaResponse | null> =>
  handleApiRequest<PreferenciaCulinariaResponse>("delete", `${endpoint}/${id}`);
