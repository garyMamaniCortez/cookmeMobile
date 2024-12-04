import { getValoracion, getValoraciones, postValoracion, putValoracion } from '@/api/Valoracion';
import { ValoracionRequest, ValoracionResponse } from '@/interfaces/api/Valoracion';
import { useDataLoader, useDataUploader } from './useData';

export const useValoracion = (id: number) =>
  useDataLoader<ValoracionResponse>(() => getValoracion(id), [id]);

export const useValoracions = () =>
  useDataLoader<ValoracionResponse[]>(() => getValoraciones(), []);

export const useUpdateValoracion = async (
  id: number,
  updatedValoracion: ValoracionRequest
): Promise<{ valoracion: ValoracionResponse | null; error?: string }> => {
  return useDataUploader(
    () => putValoracion(id, updatedValoracion),
    "Error al actualizar valoracion"
  ).then(({ data, error }) => ({ valoracion: data, error }));
};

export const usePostValoracion = async (
  valoracion: ValoracionRequest
): Promise<{ valoracion: ValoracionResponse | null; error?: string }> => {
  return useDataUploader(
    () => postValoracion(valoracion),
    "Error al publicar valoracion"
  ).then(({ data, error }) => ({ valoracion: data, error }));
};