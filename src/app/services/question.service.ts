import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/question.interface';
import { BehaviorSubject, Subject, tap } from 'rxjs';
export interface Response {
  response_code:number,
  results:[]

}

@Injectable({
  providedIn: 'root'
})

export class QuestionService implements OnInit {

public generalUrl : string = 'https://opentdb.com/api.php?amount=10'
public easyUrl : string = 'https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple'
public mediumUrl : string = 'https://opentdb.com/api.php?amount=10&difficulty=medium'
public hardUrl : string = 'https://opentdb.com/api.php?amount=10&difficulty=difficult'
datas:any;
questions:any; 

constructor(private http : HttpClient){ this.getEasyQuestion()}
  

getEasyQuestion(){
 return this.http.get<any>(this.easyUrl).pipe(
    tap((data)=>{
      // this.questions.next(data.results)
      this.questions = new BehaviorSubject(data.results);
    })
  )
  
}
getMediumQuestion(){
  this.http.get(this.mediumUrl).subscribe(data => {
    return data
  });
}
getHardQuestion(){
  this.http.get(this.hardUrl).subscribe(data => {
    return data
  });
}
ngOnInit(): void {
 
}
}
