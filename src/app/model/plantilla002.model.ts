import { CandidatoModel } from './candidato.model';
import { Plantilla001Model } from './plantilla001.model';
import { Voto002Model } from './voto002.model';

export class Plantilla002Model {

        constructor(
                public idplantilla002: string = null,
                public orden: number = null,
                public candidato: CandidatoModel = null,
                public plantilla001: Plantilla001Model = null,
                public voto002s: Voto002Model[] = null,
        ) {

        }
}
