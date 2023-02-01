import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  btnDelet = false;
  questions:any;
  constructor(private questionService:QuestionService){
    
  }
  
  ngOnInit(): void {
    // this.questionService.getEasyQuestion().subscribe(data=>{
  
    //   this.questions =data.results
      // console.log(this.questions)
    // })

    
  }
}
