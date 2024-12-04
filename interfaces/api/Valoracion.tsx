export interface ValoracionRequest {
    id_receta:  number;
    id_usuario: number;
    valoracion: number;
}

export interface ValoracionResponse {
    id_valoracion:  number;
    id_receta:      number;
    id_usuario:     number;
    valoracion:     number;
}
