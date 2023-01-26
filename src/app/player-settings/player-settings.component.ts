import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-settings',
  templateUrl: './player-settings.component.html',
  styleUrls: ['./player-settings.component.css']
})
export class PlayerSettingsComponent implements OnInit {
  avatar = 'assets/avatar1.svg';
  // @ViewChild("pseudo") public el!: ElementRef<HTMLInputElement>;
  // @ViewChild("select") public selec!: ElementRef<HTMLSelectElement>;

  // constructor(public player:PlayerService) { }

  test(){
    // this.player.pseudo = this.el.nativeElement.value;
    // this.player.avatar = this.selec.nativeElement.value;
   
  }
  ngOnInit() {
   
    
  }
}
