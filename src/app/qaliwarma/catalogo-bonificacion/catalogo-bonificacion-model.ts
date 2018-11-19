import { RegionAlimentariaModel } from "../region-alimentaria/region-alimentaria-model";
import { ProductoPorNumeroEntregaModel } from "../producto-por-numero-entrega/producto-por-numero-entrega-model";
import { HorarioAlimentacionModel } from "../horario-alimentacion/horario-alimentacion-model";

export class CatalogoBonificacionModel {

    constructor(
        public idCatalogoBonificacion:string=null,
        public RegionAlimentaria:RegionAlimentariaModel=null,
        public ProductoPorNumeroEntrega:ProductoPorNumeroEntregaModel=null,
        public numeroDePreparacionPorEntrega:number=null,
        public HorarioAlimentacion:HorarioAlimentacionModel=null
    ){

    }
}
