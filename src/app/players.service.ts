import { Inject, Injectable, OnInit } from '@angular/core';
import { Joueurs } from './models/joueurs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService implements OnInit {

  public myJoueur1 = new Joueurs('joueur1', '/assets/avatar1.svg', 'logo1',"",500);
  public myJoueur2 = new Joueurs('joueur2', '/assets/avatar2.svg', 'logo2');
  public myJoueur3 = new Joueurs('joueur3', '/assets/avatar3.svg', 'logo3', 'winner');
  public myJoueur4 = new Joueurs('joueur4', '/assets/avatar4.svg', 'logo4');
  
  public joueurArray = [this.myJoueur1, this.myJoueur2, this.myJoueur3, this.myJoueur4];
  constructor( ) {
  }

  ngOnInit(): void {
    
  }
}
