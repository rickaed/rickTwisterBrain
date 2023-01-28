import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/question.interface';


@Injectable({
  providedIn: 'root'
})

export class QuestionService {

public generalUrl : string = 'https://opentdb.com/api.php?amount=10'
public easyUrl : string = 'https://opentdb.com/api.php?amount=10&difficulty=easy'
public mediumUrl : string = 'https://opentdb.com/api.php?amount=10&difficulty=medium'
public hardUrl : string = 'https://opentdb.com/api.php?amount=10&difficulty=difficult'

questions: Question[] = [];

constructor(private http : HttpClient){}

getEasyQuestion(){
  this.http.get(this.easyUrl).subscribe(data => {
    data
  });
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

}
