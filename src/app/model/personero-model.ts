import { UsuarioModel } from "../modulo-sistema-config/usuario/usuario-model";

export class PersoneroModel {

    constructor(
        public idpersonero:string= "",
        public nombrepersonero:string = null,
        public usuario:UsuarioModel=null,
        public dni:string=null,
        public foto:string=null
    ){

    }
}
