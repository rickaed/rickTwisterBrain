import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  public pseudo: string = "";
  public avatar: string = "";
  public score: number = 0;
  public color: string = "";
  public title?: string = "";
  
  constructor() {
  }
}
