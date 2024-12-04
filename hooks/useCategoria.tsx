import { getCategoria, getCategorias, postCategoria, putCategoria } from '@/api/Categoria';
import { CategoriaRequest, CategoriaResponse } from '@/interfaces/api/Categoria';
import { useDataLoader, useDataUploader } from './useData';

export const useCategoria = (id: number) =>
  useDataLoader<CategoriaResponse>(() => getCategoria(id), [id]);

export const useCategorias = () =>
  useDataLoader<CategoriaResponse[]>(() => getCategorias(), []);

export const useUpdateCategoria = async (
  id: number,
  updatedCategoria: CategoriaRequest
): Promise<{ categoria: CategoriaResponse | null; error?: string }> => {
  return useDataUploader(
    () => putCategoria(id, updatedCategoria),
    "Error al actualizar categoria"
  ).then(({ data, error }) => ({ categoria: data, error }));
};

export const usePostCategoria = async (
  categoria: CategoriaRequest
): Promise<{ categoria: CategoriaResponse | null; error?: string }> => {
  return useDataUploader(
    () => postCategoria(categoria),
    "Error al publicar categoria"
  ).then(({ data, error }) => ({ categoria: data, error }));
};