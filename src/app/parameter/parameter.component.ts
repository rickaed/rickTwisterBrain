import { Component, OnInit } from '@angular/core';
import { ParamQuestions } from '../models/param-question.model';
import { QuestionService } from '../services/question.service';
import { Category } from "../models/category";

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  constructor(private questionServ: QuestionService) { }



  //declaration necessaire au form
  paramQuestion!: ParamQuestions;
  categoriesTab!: Category[];
  difficultiesTab!: string[];
  typesTab!: string[];

  ngOnInit(): void {
    this.paramQuestion = this.questionServ.setDefaultParameterForm();
    this.categoriesTab = this.questionServ.setCategoriesForm();
    this.difficultiesTab = this.questionServ.setDiffucltiesForm();
    this.typesTab = this.questionServ.setTypesForm();

  };

  onSubmit() {
    throw new Error('Method not implemented.');
  };
}
