import { Component, OnInit } from '@angular/core';
import { Choice } from "../models/choice.interface";
import { ParamQuestions } from '../models/param-question.model';
import { ApiQuestionService } from '../services/api-question.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  constructor(
    private apiQuestionServ: ApiQuestionService) { };

  // ⬇ DECLARATION NECESSAIRE AU FORM ⬇
  paramQuestion: ParamQuestions = this.apiQuestionServ.getParamdefaut();

  categoriesTab: Choice[] = [
    {
      name: "Aléatoire",
      value: null
    },
    {
      name: "Culture général",
      value: 9
    },
    {
      name: "Sport",
      value: 21
    },
    {
      name: "Histoire",
      value: 23
    },
    {
      name: "Art",
      value: 25
    },
    {
      name: "Manga",
      value: 31
    },
  ];

  difficultiesTab: Choice[] = [
    {
      name: "Aléatoire",
      value: null
    },
    {
      name: "Easy",
      value: "easy"
    },
    {
      name: "Medium",
      value: "medium"
    },
    {
      name: "Hard",
      value: "hard"
    }
  ];

  typesTab: Choice[] = [
    {
      name: "Aléatoire",
      value: null
    },
    {
      name: "Choix Multiple ",
      value: "multiple"
    },
    {
      name: "Vrai ou faux",
      value: "boolean"
    },
  ];

  ngOnInit(): any {

  };


  // ⬇ ok ⬇
  onSubmit() {
    this.apiQuestionServ.setParamQuestions(this.paramQuestion)
  };
}
