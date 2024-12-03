export interface RecetaRequest {
    nombre_receta:      string;
    descripcion:        string;
    instrucciones:      string;
    tiempo_preparacion: number;
    tiempo_coccion:     number;
    imagen:             string;
    id_categoria:       number;
    id_usuario:         number;
}

export interface RecetaResponse {
    id_receta:          number;
    nombre_receta:      string;
    descripcion:        string;
    instrucciones:      string;
    tiempo_preparacion: number;
    tiempo_coccion:     number;
    imagen:             string;
    id_categoria:       number;
    id_usuario:         number;
    promedio_valoracion:number | null;
}
