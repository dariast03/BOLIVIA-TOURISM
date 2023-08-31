export interface IDestino {
    id: number
    slug: string
    lugar: string
    descripcion: string
    imagen: string
}

export interface ILugarTuristico {
    id: number;
    nombre: string;
    descripcion: string;
    ubicacion: {
        latitud: number;
        longitud: number;
    };
    imagenes: string[];
    departamento: string;
    votos: number;
    slug: string
}