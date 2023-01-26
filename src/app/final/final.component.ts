import { Component, OnInit } from '@angular/core';
import { Joueurs } from '../models/joueurs';
const confettis = require('canvas-confetti');


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  myJoueur1 = new Joueurs('joueur1', '../../assets/avatar1.svg', 'logo1');
  myJoueur2 = new Joueurs('joueur2', '../../assets/avatar2.svg', 'logo2');
  myJoueur3 = new Joueurs('joueur3', '../../assets/avatar3.svg', 'logo3','winner');
  myJoueur4 = new Joueurs('joueur4', '../../assets/avatar4.svg', 'logo4');
  joueurArray = [this.myJoueur1, this?.myJoueur2, this?.myJoueur3, this?.myJoueur4];



  constructor() { }


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
