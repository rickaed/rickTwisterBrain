import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class Joueurs {

    constructor(
        @Inject(String) public alt : string,
        @Inject(String) public image : string,
        @Inject(String) public color : string ="",
        @Inject(String) public title ?: string,
        @Inject(String) public score : number = 10,
       
    ){};
}
