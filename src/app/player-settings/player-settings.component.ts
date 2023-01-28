import { Component, OnInit } from '@angular/core';
import { Player } from "../models/player-model";
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent implements OnInit {
  players!: Player[];
  avatar = 'assets/avatar1.svg';
 

  constructor(private playersService: PlayersService) { }


  ngOnInit() {
    this.players=this.playersService.getAllPlayers()
  }
}
