import {Categoria} from './categoria.model';

export class Produto{

    public id:number;
    public name: string;
    public cat: Categoria;
    public preco: number;
    public counter:number;
    public description: string;
}