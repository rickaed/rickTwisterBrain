import { Component, OnInit } from '@angular/core';
import {Joueur} from 'src/app/model/joueur';  /*j'ai importé mon interface joeurs*/

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  // joueurs: Joueur[] = [
  //   {
  //   id : 1,
  //   image : "asset/avatar1.svg",
  //   score : 25
  // },
  // {
  //   id : 2,
  //   image : "asset/avatar2.svg",
  //   score : 35
  // },
  // {
  //   id : 3,
  //   image : "asset/avatar3.svg",
  //   score : 70
  // },
  // {
  //   id : 4,
  //   image : "asset/avatar4.svg",
  //   score : 12
  // }
  // ]

  constructor(){}

  ngOnInit(): void {

    
  }
}
