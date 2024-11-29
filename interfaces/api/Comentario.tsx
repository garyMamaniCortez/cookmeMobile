export interface ComentarioRequest {
    id_receta:  number;
    id_usuario: number;
    comentario: string;
}

export interface ComentarioResponse {
    id_comentario: number;
    id_receta:     number;
    id_usuario:    number;
    comentario:    string;
    fecha:         Date;
    usuario:       UsuarioComentarioResponse;
}

export interface UsuarioComentarioResponse {
    nombre_usuario: string;
}
