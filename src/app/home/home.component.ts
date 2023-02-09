
import { Component, OnInit } from '@angular/core';
import { ApiQuestionService } from '../services/api-question.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // ⬇ BORDEL DE RICK ⬇ c'est pour afficher l'adresse API...normalement c'est vide
  urlApi!:any;
  constructor(private myUrl:ApiQuestionService,
   private mesQuestions:QuestionService){}
  ngOnInit(): void {
    // this.urlApi=this.myUrl.setParamQuestions()
    console.log(this.myUrl.setParamQuestions())


    console.log(this.mesQuestions.getQuestion());
    
  }  
}
