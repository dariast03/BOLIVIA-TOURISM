export interface ICardDepartamento {
    alt: string;
    src: string;
    title: string;
    slug: string;
}

export interface IDepartamento {
    id: number;
    nombre: string;
    descripcion: string;
    pais: string;
    slug: string;
    imagen: string;
}

export interface IUsuario {
    email: string;
    password: string;
    nombres: string;
    apellidos: string;
    rol: string;
    id: number;
}

export interface IBlog {

    id: number;
    titulo: string;
    autor: string;
    fecha: string;
    categoria: string;
    vistas: number;

}