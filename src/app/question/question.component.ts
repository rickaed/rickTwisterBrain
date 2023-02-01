import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Question } from 'src/app/question.interface';
import { Player } from '../models/player-model';
import { PlayersService } from '../services/players.service';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  datAquestion: any;
  category: any;
  correct_answer: any;
  incorrect_answers: string[] = [];
  question: any;
  @ViewChildren('boxParent') divix!:ElementRef<HTMLDivElement>[];

  constructor(
    private questionService: QuestionService,
    private playerService: PlayersService,

  ) {
    
    // this.questionService.getEasyQuestion().subscribe(data=>{
    //   this.datAquestion =data.results;
    //   this.category = data.results[0].category;
    //   this.correct_answer = data.results[0].correct_answer;
    //   this.incorrect_answers = data.results[0].incorrect_answers;
    //   this.question = data.results[0].question;
    //   console.log(this.datAquestion)
    // });
  }

  ngOnInit(): void {
    this.questionService.getEasyQuestion().subscribe((data) => {
      this.question = data.results[0].question;
      this.category = data.results[0].category;
      this.correct_answer = data.results[0].correct_answer;
      console.log(data);

      this.incorrect_answers = data.results[0].incorrect_answers;
      this.incorrect_answers.push(this.correct_answer);
      this.incorrect_answers = this.randomiseAnswers(this.incorrect_answers);
      console.log(this.incorrect_answers);
    });
  }
  randomiseAnswers(array: string[]) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    console.log(currentIndex);

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  reponse(box:HTMLElement){
    console.log(box.textContent);
    if(box.textContent=== this.correct_answer){
      box.style.background = 'green';
      console.log('bravo');
      setTimeout(() => {

        this.ngOnInit()
        box.style.background = '';
      }, 3000)
      this.playerService.players[0].score += 10
    }else{
      box.style.background = 'red';
      console.log('dommage');
      setTimeout(() => {

        this.ngOnInit()
        box.style.background = '';
      }, 3000)

    }

  }
//lors du clic sur la reponse on verifie si elle egale à la reponse correction
//si c'est le cas on passe la div en vert, si ce nest pas le cas passe la div en rouge et la div correct en vert
 
}
