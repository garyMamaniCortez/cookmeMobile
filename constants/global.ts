import { UsuarioResponse } from '../interfaces/api/User';
export const Globals = {
    id_usuario: 1,
    nombre_usuario: "Usuario",
    nombre: "",
    apellido: "",
    email: "",
}

export const updateGlobals = (usuario: UsuarioResponse) => {
    Globals.id_usuario = usuario.id_usuario;
    Globals.nombre_usuario = usuario.nombre_usuario;
    Globals.nombre = usuario.nombre;
    Globals.apellido = usuario.apellido;
    Globals.email = usuario.email;
}