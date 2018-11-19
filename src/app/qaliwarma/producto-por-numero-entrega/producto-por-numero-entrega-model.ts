import { CatalogoProductoModel } from "../catalogo-producto/catalogo-producto-model";
import { EntregaPorItemModel } from "../parametros/entrega-por-item/entrega-por-item-model";


export class ProductoPorNumeroEntregaModel {

    constructor(
        public idProductoPorNumeroEntrega:string=null,
        public catalogoProductoQaliwarma:CatalogoProductoModel=null,
        public dscComplementoProducto:string=null,
        public entregaPorItem:EntregaPorItemModel=null
    )
    {

    }
}
