export interface BookI {

    _id: string;
    createAt?: string;
    titulo: string;
    autor: string[];
    genero: string;
    subgenero?: string | null;
    sinopsis: string;
    portada: string;
    fechaPublicacion: string;
    paginas: number;
    copias: number;
    selected?: boolean;
    email: string | null;

     
}

export interface BookITransformed {

    _id: string;
    titulo: string;
    autor: string[];
    genero: string;
    subgenero?: string | null;
    sinopsis: string;
    portada: string;
    fechaPublicacion: string;
    paginas: number;
    copias: number;
    email: string | null;
    
    

}