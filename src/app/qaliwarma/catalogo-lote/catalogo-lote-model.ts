import { CatalogoMarcaModel } from "../catalogo-marca/catalogo-marca-model";
import { PikingModel } from "../piking/piking-model";

export class CatalogoLoteModel {

    constructor(
        public idCatalogoLote:string = "",
        public numeroLote:string=null,
        public fechaVencimiento:string=null,
        public numeroRegistro=null,
        public cantidad:number=0,
        public catalogoMarca:CatalogoMarcaModel=null,
        public pikings:PikingModel[]=null

    ){

    }
}
