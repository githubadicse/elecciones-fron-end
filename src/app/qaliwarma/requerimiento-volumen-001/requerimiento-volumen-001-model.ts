import { UbigeoModel } from "../ubigeo/ubigeo-model";
import { CodigomodularIinstitucionEducativaModel } from "../codigomodular-iinstitucion-educativa/codigomodular-iinstitucion-educativa-model";
import { NivelEducacionModel } from "../nivel-educacion/nivel-educacion-model";
import { HorarioAlimentacionModel } from "../horario-alimentacion/horario-alimentacion-model";
import { RegionAlimentariaModel } from "../region-alimentaria/region-alimentaria-model";
import { EntregaPorItemModel } from "../parametros/entrega-por-item/entrega-por-item-model";


export class RequerimientoVolumen001Model {

    constructor(
        public idRequerimientoVolumen001: string = "0",
        public ubigeo: UbigeoModel = null,
        public codigomodularIinstitucionEducativa: CodigomodularIinstitucionEducativaModel = null,
        public nivelEducacion: NivelEducacionModel = null,
        public horarioAlimentacion: HorarioAlimentacionModel = null,
        public regionAlimentaria: RegionAlimentariaModel = null,
        public centroPoblado: string = null,
        public entregaPorItem: EntregaPorItemModel = null,
        public pesoTotal=null

    ) {

    }
}
