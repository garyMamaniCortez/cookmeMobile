export interface UsuarioRequest {
    nombre_usuario: string;
    nombre:         string;
    apellido:       string;
    email:          string;
    password:       string;
}

export interface UsuarioResponse {
    id_usuario:     number;
    nombre_usuario: string;
    nombre:         string;
    apellido:       string;
    email:          string;
    password:       string;
    updatedAt:      Date;
}

export interface UsuarioLogin {
    email: string,
    password: string
}

export interface Notificaciones {
    id:         string,
    usuario:    string,
    accion:     string,
    receta:     string,
    text:       string
}

export interface NotificacionRequest {
    nombre_receta: string;
    comentarios:   Comentario[];
    valoraciones:  Valoraciones[];
}

export interface Comentario {
    id_comentario: number;
    comentario:    string;
    usuario:       Usuario;
}

export interface Usuario {
    nombre_usuario: string;
}

export interface Valoraciones {
    id_valoracion: number;
    valoracion:    number;
    usuario:       Usuario;
}
