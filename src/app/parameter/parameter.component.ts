import { Component, OnInit } from '@angular/core';
import { Choice } from "../models/choice.interface.";
import { ApiQuestionService } from '../services/api-question.service';
import { QuestionParameterService } from '../services/question-parameter.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  constructor(
    private paramsQuestion: QuestionParameterService,
    private apiQuestionServ: ApiQuestionService) { };

  // ⬇ DECLARATION NECESSAIRE AU FORM ⬇
  paramQuestion!: any;/*soucis d'assignation de type */
  categoriesTab!: Choice[];
  difficultiesTab!: Choice[];
  typesTab!: Choice[];

  ngOnInit(): any {
    // ⬇ INITIALISATION AVEC LES PARAM PAR DEFAUT DU FORMULAIRE ⬇
    this.paramQuestion = this.paramsQuestion.setDefaultParameterForm();
    this.categoriesTab = this.paramsQuestion.setCategoriesForm();
    this.difficultiesTab = this.paramsQuestion.setDiffucltiesForm();
    this.typesTab = this.paramsQuestion.setTypesForm();

  };


  // ⬇ ok ⬇
  async onSubmit() {
    this.apiQuestionServ.getParamQuestion(this.paramQuestion.nbQuestions,this.paramQuestion.categorie, this.paramQuestion.difficulty, this.paramQuestion.type)
  };
}
