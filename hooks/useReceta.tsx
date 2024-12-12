import { getReceta, getRecetas, postReceta, putReceta, searchReceta } from '@/api/Receta';
import { RecetaRequest, RecetaResponse, RecetaSearch } from '@/interfaces/api/Receta';
import { useDataLoader, useDataUploader } from './useData';

const FormData = require('form-data');

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
  receta: FormData
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

export const useUserToFormData = (recipe: RecetaRequest): FormData => {
  const formData = new FormData();
    formData.append("nombre_receta", recipe.nombre_receta);
    formData.append("descripcion", recipe.descripcion);
    formData.append("instrucciones", recipe.instrucciones);
    formData.append("tiempo_preparacion", recipe.tiempo_preparacion.toString());
    formData.append("tiempo_coccion", recipe.tiempo_coccion.toString());
    formData.append("imagen", {
      uri: recipe.imagen,
      name: 'image.jpg',
      type: 'image/jpeg',
    } as any);
    formData.append("id_categoria", recipe.id_categoria.toString());
    formData.append("id_usuario", recipe.id_usuario.toString());
  
    return formData;
}
