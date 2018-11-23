import { Plantilla002Model } from './plantilla002.model';
import { Voto001Model } from './voto001.model';

export class Voto002Model {

        constructor(
                public idvoto002: string = null,
                public voto: number = null,
                public plantilla002: Plantilla002Model = null,
                public voto001: Voto001Model = null

        ) {

        }
}
