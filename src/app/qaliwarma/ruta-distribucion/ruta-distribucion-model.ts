
import { EmpleadoDistribuidorModel } from "../empleado-distribuidor/empleado-distribuidor-model";
import { RutaDistribucionDetalleModel } from "./ruta-distribucion-detalle-model";
import { ChoferModel } from "../parametros/chofer/chofer-model";
import { VehiculoModel } from "../parametros/vehiculo/vehiculo-model";
import { TransportistaModel } from "../parametros/transportista/transportista-model";
import { Moment } from "moment";



export class RutaDistribucionModel {

    constructor(
        public idRutaDistribucion:string="0",
        public dscRutaDistribucion:string=null,
        public anno:number=null,
        public numeroEntrega:number=null,
        public empleadoDistribuidor:EmpleadoDistribuidorModel=new EmpleadoDistribuidorModel(),
        public chofer:ChoferModel=new ChoferModel(),
        public vehiculo:VehiculoModel=new VehiculoModel(),
        public transportista:TransportistaModel = new TransportistaModel(),
        public fechaDistribucion:string=null,
        public rutaDistribucionDetalles:RutaDistribucionDetalleModel[]=[]

    ){

    }
}
