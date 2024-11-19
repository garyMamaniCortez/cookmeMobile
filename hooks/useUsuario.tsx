import React, { useEffect, useState } from 'react'
import { getUsuario, getUsuarios, putUsuario } from '@/api/Usuario';
import { UsuarioRequest, UsuarioResponse } from '@/interfaces/api/User';

export const useUsuario = (id: number): { usuario: UsuarioResponse | null; error?: string } => {
  const [usuario, setUsuario] = useState<UsuarioResponse | null>(null);
  const [error, setError] = useState<string | undefined>();

  const cargarUsuario = async () => {
    try {
      const usuarioResponse = await getUsuario(id);
      if (usuarioResponse) {
        setUsuario(usuarioResponse);
        setError(undefined);
      } else {
        setError("Usuario no encontrado");
      }
    } catch (err) {
      setError("Error al cargar el usuario");
      console.error("Error en cargarUsuario:", err);
    }
  };

  useEffect(() => {
    cargarUsuario();
  }, [id]);

  return { usuario, error };
};

export const useUsuarios = (): { usuarios: UsuarioResponse[] | null; error?: string } => {
    const [usuarios, setUsuarios] = useState<UsuarioResponse[] | null>(null);
    const [error, setError] = useState<string | undefined>();
  
    const cargarUsuario = async () => {
      try {
        const usuariosResponse = await getUsuarios();
        if (usuariosResponse) {
          setUsuarios(usuariosResponse);
          setError(undefined);
        } else {
          setError("Usuario no encontrado");
        }
      } catch (err) {
        setError("Error al cargar el usuario");
        console.error("Error en cargarUsuario:", err);
      }
    };
  
    useEffect(() => {
      cargarUsuario();
    });
  
    return { usuarios, error };
};

export const useUpdateUsuario = async (id: number, updatedUsuario: UsuarioRequest): Promise<{ usuario: UsuarioResponse | null; error?: string; }> => {
  try {
    const usuarioResponse = await putUsuario(id, updatedUsuario);
    if (usuarioResponse) {
      return {usuario:usuarioResponse, error:undefined}
    } else {
      return {usuario:null, error:"Error al actualizar usuario"}
    }
  } catch (err) {
    console.error("Error en cargarUsuario:", err);
    return {usuario:null, error:"Error al actualizar usuario"}
  }
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
