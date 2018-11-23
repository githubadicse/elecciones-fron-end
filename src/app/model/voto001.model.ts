import { MesaDeVotacionModel } from './mesa-de-votacion-model';
import { Plantilla001Model } from './plantilla001.model';
import { Voto002Model } from './voto002.model';

export class Voto001Model {

        constructor(
                public idvoto001: number = 0,
                public alta: string = null,
                public flagRegistrado: boolean = false,
                public mesaDeVotacion: MesaDeVotacionModel = null,
                public plantilla001: Plantilla001Model = null,
                public voto002s: Voto002Model[] = [],

        ) {

        }
}
