import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player-model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players: Player[] = [
    // {
    //   id: 0,
    //   pseudo: 'joueur 1',
    //   avatar: '/assets/avatar1.svg',
    //   score: 5
    // },
    // {
    //   id: 1,
    //   pseudo: 'joueur 2',
    //   avatar: '/assets/avatar2.svg',
    //   score: 30
    // },
    // {
    //   id: 2,
    //   pseudo: 'joueur 3',
    //   avatar: '/assets/avatar3.svg',
    //   score: 10
    // },
    // {
    //   id: 3,
    //   pseudo: 'joueur 4',
    //   avatar: '/assets/avatar4.svg',
    //   score: 20
    // }
  ];
  playerList=new BehaviorSubject(this.players)

  addPlayer(pseudo:string, avatar:string,){
   
    const player:Player ={id:this.players.length+1, pseudo:pseudo,avatar:avatar,score: 0}
    this.players.push(player);
   
  }

  removePlayer(i:number){
    this.players.splice(i,1)
  }
  getAllPlayers(): Player[] {
    
    return this.players;
  }

  getPlayerById(playerId: number): Player {
    const player = this.players.find(player => player.id === playerId);
    if (!player) {
      throw new Error("player not found");
    } else {
      return player
    }
  }

  scorePlayer(playerId: number, win: boolean) {
    const player = this.getPlayerById(playerId);
    if (win) {
      player.score += 10;
    }

  }
  winnerPlayer() {
// parcourir les joueurs
// si score superieur aux autres

    return this.players[1]

  }

}


