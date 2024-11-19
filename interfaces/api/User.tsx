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
