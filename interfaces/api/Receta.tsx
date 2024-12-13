import { Asset } from "react-native-image-picker";

export interface RecetaRequest {
    nombre_receta:      string;
    descripcion:        string;
    instrucciones:      string;
    tiempo_preparacion: number;
    tiempo_coccion:     number;
    imagen?:            string;
    id_categoria:       number;
    id_usuario:         number;
    ingredientes:       string;
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

export interface RecetaSearch {
    query:              string;
}
