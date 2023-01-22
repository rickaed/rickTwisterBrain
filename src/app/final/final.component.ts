import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
joueurs = [
  {'id': 1,
'image': assets/avatar1.svg,
'score': 12
 },
 {'id': 2,
 'image': assets/avatar2.svg,
 'score': 256
  },
  {'id': 3,
  'image': assets/avatar.3svg,
  'score': 25656
   },
   {'id': 4,
   'image': assets/avatar4.svg,
   'score': 125
  }
]

  constructor(){}
  ngOnInit(): void {

    
  }
}
