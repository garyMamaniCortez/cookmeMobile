import { getComentario, getComentarios, postComentario, putComentario } from '@/api/Comentario';
import { ComentarioRequest, ComentarioResponse } from '@/interfaces/api/Comentario';
import { useDataLoader, useDataUploader } from './useData';

export const useComentario = (id: number) =>
  useDataLoader<ComentarioResponse>(() => getComentario(id), [id]);

export const useComentarios = () =>
  useDataLoader<ComentarioResponse[]>(() => getComentarios(), []);

export const useUpdateComentario = async (
  id: number,
  updatedComentario: ComentarioRequest
): Promise<{ comentario: ComentarioResponse | null; error?: string }> => {
  return useDataUploader(
    () => putComentario(id, updatedComentario),
    "Error al actualizar comentario"
  ).then(({ data, error }) => ({ comentario: data, error }));
};

export const usePostComentario = async (
  comentario: ComentarioRequest
): Promise<{ comentario: ComentarioResponse | null; error?: string }> => {
  return useDataUploader(
    () => postComentario(comentario),
    "Error al actualizar comentario"
  ).then(({ data, error }) => ({ comentario: data, error }));
};

export const useUserResponseToRequest = (comentario: ComentarioResponse): ComentarioRequest => {
    return {
        id_receta: comentario.id_receta,
        id_usuario: comentario.id_usuario,
        comentario: comentario.comentario
    };
};