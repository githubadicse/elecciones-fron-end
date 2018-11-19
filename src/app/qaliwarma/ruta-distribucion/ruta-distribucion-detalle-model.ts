
import { RutaDistribucionModel } from "./ruta-distribucion-model";
import { RequerimientoVolumen001Model } from "../requerimiento-volumen-001/requerimiento-volumen-001-model";


export class RutaDistribucionDetalleModel {

    constructor(
        public idRutaDistribucionDetalle:string=null,
        public rutaDistribucion:RutaDistribucionModel=null,
        public requerimientoVolumen001:RequerimientoVolumen001Model=null,
        public orden:number=0
        //public pesoTotal:number = 0
       

    ){

    }
}
