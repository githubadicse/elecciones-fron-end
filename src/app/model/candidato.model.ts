import { AgrupacionModel } from './agrupacion.model';
import { Plantilla002Model } from './plantilla002.model';

export class CandidatoModel {

        constructor(
                public foto: string = null,
                public fotoBase64: any = null,
                public plantilla002s: Plantilla002Model[] = null,
                public agrupacion: AgrupacionModel = null
        ) {

        }
}
