const confettis = require('canvas-confetti');
import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Joueurs } from '../models/joueurs';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  
})
export class FinalComponent implements OnInit {


public joueursArray:Joueurs[]= this.joueursService.joueurArray

  constructor(@Inject(forwardRef(() => PlayersService)) private joueursService : PlayersService) {
    console.log(this.joueursService.myJoueur1.image);
    
    }


  ngOnInit(): void {
   

    var myConfetti = confettis.create();
    myConfetti({
      particleCount: 1000,
      spread: 160,
      propagation: 260
      // any other options from the global
      // confetti function
    });
  }

  showConfetti() {
    var myConfetti = confettis.create();
    myConfetti({
      particleCount: 1000,
      spread: 160,
      propagation: 589

      // any other options from the global
      // confetti function

    });
  }
}
