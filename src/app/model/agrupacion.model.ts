import { CandidatoModel } from './candidato.model';

export class AgrupacionModel {

        constructor(
                public dscagrupacion: string = null,
                public fotoBase64: string = null,
                public logo: string = null,
                public candidatos: CandidatoModel[] = null

        ) {

        }
}
