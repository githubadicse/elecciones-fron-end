import { CatalogoLoteModel } from "../catalogo-lote/catalogo-lote-model";
import { RequerimientoVolumen001Model } from "../requerimiento-volumen-001/requerimiento-volumen-001-model";
import { VolumenConvertidoEnvaceModel } from "../volumen-convertido-envase/volumen-convertido-envase-model";

export class PikingModel {

    constructor(
        public idPiking:string=null,
        public requerimientoVolumen001:RequerimientoVolumen001Model=null,
        public cantidad:number=0,
        public catalogoLote:CatalogoLoteModel=null,
        public volumenConvertidoEnvace:VolumenConvertidoEnvaceModel=null
    ){

    }
    
}
