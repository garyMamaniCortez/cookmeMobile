import { getNotificaciones, getUsuario, getUsuarios, postLogin, postUsuario, putUsuario } from '@/api/Usuario';
import { Notificaciones, NotificacionRequest, UsuarioLogin, UsuarioRequest, UsuarioResponse } from '@/interfaces/api/User';
import { useDataLoader, useDataUploader } from './useData';

export const useUsuario = (id: number) =>
  useDataLoader<UsuarioResponse>(() => getUsuario(id), [id]);

export const useUsuarios = () =>
  useDataLoader<UsuarioResponse[]>(() => getUsuarios(), []);

export const useLogin = async (
  usuario: UsuarioLogin
): Promise<{ usuario: UsuarioResponse | null; error?: string }> => {
  return useDataUploader(
    () => postLogin(usuario),
    "Error en las credenciales"
  ).then(({ data, error }) => ({ usuario: data, error }));
};

export const useUpdateUsuario = async (
  id: number,
  updatedUsuario: UsuarioRequest
): Promise<{ usuario: UsuarioResponse | null; error?: string }> => {
  return useDataUploader(
    () => putUsuario(id, updatedUsuario),
    "Error al actualizar usuario"
  ).then(({ data, error }) => ({ usuario: data, error }));
};

export const usePostUsuario = async (
  usuario: UsuarioRequest
): Promise<{ usuario: UsuarioResponse | null; error?: string }> => {
  return useDataUploader(
    () => postUsuario(usuario),
    "Error al subir usuario"
  ).then(({ data, error }) => ({ usuario: data, error }));
};

export const useUserResponseToRequest = (user: UsuarioResponse): UsuarioRequest => {
  return {
    nombre_usuario: user.nombre_usuario,
    nombre: user.nombre,
    apellido: user.apellido,
    email: user.email,
    password: user.password,
  };
};

export const useNotificaciones = (id: number): Notificaciones[] => {
  const { data, error } = useDataLoader<NotificacionRequest[]>(() => getNotificaciones(id), [id]);

  if (error || !data) {
    console.error("Error al cargar notificaciones", error);
    return [];
  }

  const notificaciones: Notificaciones[] = data.flatMap((notificacion) => {
    const comentarios = notificacion.comentarios.map((comentario) => ({
      id: `comentario-${comentario.id_comentario}`,
      usuario: `${comentario.usuario.nombre_usuario}`,
      accion: ` comentó en `,
      receta: `${notificacion.nombre_receta}`,
      text: `: ${comentario.comentario}`,
    }));

    const valoraciones = notificacion.valoraciones.map((valoracion) => ({
      id: `valoracion-${valoracion.id_valoracion}`,
      usuario: `${valoracion.usuario.nombre_usuario}`,
      accion: ` valoró tu receta `,
      receta: `${notificacion.nombre_receta}`,
      text: ` con ${valoracion.valoracion} estrellas`,
    }));

    return [...comentarios, ...valoraciones];
  });

  return notificaciones;
};
