export class Joueurs {

    constructor(
        public name : string,
        public image : string,
        public alt : string,
        public title ?: string,
        public score : number = 0
       
    ){};
}
