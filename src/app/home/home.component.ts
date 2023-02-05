import { Component, OnInit } from '@angular/core';
import { ApiQuestionService } from '../services/api-question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // ⬇ BORDEL DE RICK ⬇ c'est pour afficher l'adresse API...normalement c'est vide
  urlApi!:string;
  constructor(private myUrl:ApiQuestionService){}
  ngOnInit(): void {
    this.urlApi=this.myUrl.setUrlApi()
    console.log()
  }
  
}
