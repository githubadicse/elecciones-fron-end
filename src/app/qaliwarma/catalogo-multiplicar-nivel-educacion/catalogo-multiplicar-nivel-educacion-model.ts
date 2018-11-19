import { ProductoPresentacionModel } from "../producto-presentacion/producto-presentacion-model";
import { CatalogoProductoModel } from "../catalogo-producto/catalogo-producto-model";
import { NivelEducacionModel } from "../nivel-educacion/nivel-educacion-model";

export class CatalogoMultiplicarNivelEducacionModel {

    constructor(
        public idCatalogoMultiplicarNivelEducacion:string=null,
        public nivelEducacion:NivelEducacionModel =null,
        public factor:number=null,
        public productoPresentacion:ProductoPresentacionModel=null,
        public catalogoProductoQaliwarma:CatalogoProductoModel=null,
        public anno:number,
        public numeroEntrega:number
    ){

    }
}
