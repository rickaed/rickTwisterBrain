import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ParameterComponent } from './parameter/parameter.component';
import { FinalComponent } from './final/final.component';
import { WheelComponent } from './wheel/wheel.component';
<<<<<<< HEAD
import { PlayerSettingsComponent } from './player-settings/player-settings.component';
import { FormsModule } from '@angular/forms';
=======
import { ReglesComponent } from './regles/regles.component';
>>>>>>> 145ed10f5e10bcc5ac4c687f799e2ccd84f627ef

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    PlayerComponent,
    GameComponent,
    ParameterComponent,
    FinalComponent,
    WheelComponent,
<<<<<<< HEAD
    PlayerSettingsComponent,
    
  ],
=======
      ReglesComponent
   ],
>>>>>>> 145ed10f5e10bcc5ac4c687f799e2ccd84f627ef
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
