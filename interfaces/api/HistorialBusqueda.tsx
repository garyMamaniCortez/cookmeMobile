export interface HistorialBusquedaRequest {
    id_usuario: number;
    id_receta:  number;
    busqueda:   string;
}

export interface HistorialBusquedaResponse {
    id_historial_busqueda: number;
    id_usuario:            number;
    id_receta:             number;
    busqueda:              string;
    fecha:                 Date;
}
