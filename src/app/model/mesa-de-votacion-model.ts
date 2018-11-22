import { PersoneroModel } from "./personero-model";
import { CentroDeVotacionModel } from "./centro-de-votacion-model";

export class MesaDeVotacionModel {

    constructor(
        public idMesaDeVotacion:string="",
        public numeroDeVotantes:number=0,
        public personero:PersoneroModel=null,
        public flagRegistrado:boolean=false,
        public centroDeVotacion:CentroDeVotacionModel=null,
        public numeroDeMesa:string=""
    ){

    }
    
}
