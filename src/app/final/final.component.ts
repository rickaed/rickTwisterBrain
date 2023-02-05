// const confettis = require('canvas-confetti');
import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../models/player-model';
import {ConfettisService} from '../confettis.service';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  
})
export class FinalComponent implements OnInit {
  
    // players:Player[]= this.playersService.players;
    // btnDelet = false;

// constructor(private playersService: PlayersService)  {}
constructor (public confettisService: ConfettisService) {}

ngOnInit(){
  //pour afficher mon API
  this.getConfettis();
}

  // ngOnInit(): void {
    
  //  console.log(this.playersService.players)

  //  const myCanvas = document.createElement('canvas');
  //  document.body.appendChild(myCanvas);

  //   const myConfetti = confettis.create(myCanvas, {resize: true, useWorker:true});
  //   myConfetti({
  //     particleCount: 5000,
  //     spread: 10240,
  //    propagation: 5260,
  //    angle: 90,
  //    startVelocity: 40,
  //    drift : -5, 
 
  //   });
  // }

  // showConfetti() {
  //   const myConfetti = confettis.create();
  //   myConfetti({
  //     particleCount: 1000,
  //     spread: 560,
  //     propagation: 1589

    
  //   });
  // }
getConfettis(){
  // console.log('Execution API')
  return fetch (" https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js ")
   .then (response => response.json)
   .then(confettis => this.confettisService.setConfettis(confettis));
 
}

}
