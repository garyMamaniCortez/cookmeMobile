import { getReceta, getRecetas, postReceta, putReceta, searchReceta } from '@/api/Receta';
import { RecetaRequest, RecetaResponse, RecetaSearch } from '@/interfaces/api/Receta';
import { useDataLoader, useDataUploader } from './useData';

export const useReceta = (id: number) =>
  useDataLoader<RecetaResponse>(() => getReceta(id), [id]);

export const useRecetas = () =>
  useDataLoader<RecetaResponse[]>(() => getRecetas(), []);

export const useUpdateReceta = async (
  id: number,
  updatedReceta: RecetaRequest
): Promise<{ receta: RecetaResponse | null; error?: string }> => {
  return useDataUploader(
    () => putReceta(id, updatedReceta),
    "Error al actualizar receta"
  ).then(({ data, error }) => ({ receta: data, error }));
};

export const usePostReceta = async (
  receta: RecetaRequest
): Promise<{ receta: RecetaResponse | null; error?: string }> => {
  return useDataUploader(
    () => postReceta(receta),
    "Error al actualizar receta"
  ).then(({ data, error }) => ({ receta: data, error }));
};

export const useUserResponseToRequest = (recipe: RecetaResponse): RecetaRequest => {
    return {
        nombre_receta: recipe.nombre_receta,
        descripcion: recipe.descripcion,
        instrucciones: recipe.instrucciones,
        tiempo_preparacion: recipe.tiempo_preparacion,
        tiempo_coccion: recipe.tiempo_coccion,
        imagen: recipe.imagen,
        id_categoria: recipe.id_categoria,
        id_usuario: recipe.id_usuario,
    };
};

export const useSearch = (query: RecetaSearch) => {
  return useDataLoader(
    () => searchReceta(query),
    [query]
  );
};
