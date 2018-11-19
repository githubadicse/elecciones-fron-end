
import { NivelEducacionModel } from "../nivel-educacion/nivel-educacion-model";
import { HorarioAlimentacionModel } from "../horario-alimentacion/horario-alimentacion-model";
import { EntregaPorItemModel } from "../parametros/entrega-por-item/entrega-por-item-model";

export class MontoContratadoModel {

    constructor(
        public idMontoContratado:number = 0,
        public entregaPorItem:EntregaPorItemModel = null,
        public nivelEducacion:NivelEducacionModel = null,
        public horarioAlimentacion:HorarioAlimentacionModel = null,
        public precioUnitarioValor:number = 0,
        public precioUnitarioIgv:number = 0,
        public precioUnitarioVenta:number = 0

    ){

    }
}
