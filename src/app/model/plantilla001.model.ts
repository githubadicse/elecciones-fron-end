import { Plantilla002Model } from './plantilla002.model';
import { Voto001Model } from './voto001.model';

export class Plantilla001Model {

        constructor(
                public nivel: string = null,
                public plantilla002s: Plantilla002Model[] = null,
                public voto001s: Voto001Model[] = null

        ) {

        }
}
