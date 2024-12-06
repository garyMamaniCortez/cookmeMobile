import { getHistorialBusqueda, getHistorialBusquedas, postHistorialBusqueda, putHistorialBusqueda } from '@/api/HistorialBusqueda';
import { HistorialBusquedaRequest, HistorialBusquedaResponse } from '@/interfaces/api/HistorialBusqueda';
import { useDataLoader, useDataUploader } from './useData';

export const useHistorialBusqueda = (id: number) =>
  useDataLoader<HistorialBusquedaResponse[]>(() => getHistorialBusqueda(id), [id]);

export const useHistorialBusquedas = () =>
  useDataLoader<HistorialBusquedaResponse[]>(() => getHistorialBusquedas(), []);

export const useUpdateHistorialBusqueda = async (
  id: number,
  updatedHistorialBusqueda: HistorialBusquedaRequest
): Promise<{ HistorialBusqueda: HistorialBusquedaResponse | null; error?: string }> => {
  return useDataUploader(
    () => putHistorialBusqueda(id, updatedHistorialBusqueda),
    "Error al actualizar Historial de Busqueda"
  ).then(({ data, error }) => ({ HistorialBusqueda: data, error }));
};

export const usePostHistorialBusqueda = async (
  HistorialBusqueda: HistorialBusquedaRequest
): Promise<{ historialBusqueda: HistorialBusquedaResponse | null; error?: string }> => {
  return useDataUploader(
    () => postHistorialBusqueda(HistorialBusqueda),
    "Error al publicar Historial de Busqueda"
  ).then(({ data, error }) => ({ historialBusqueda: data, error }));
};