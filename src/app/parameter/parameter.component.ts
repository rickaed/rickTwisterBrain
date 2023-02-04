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

  // pour test url
  // url:string=`https://opentdb.com/api.php?amount=${this.paramQuestion.nbQuestions}${'&category='+this.paramQuestion.categorie.value}${'&difficulty='+this.paramQuestion.difficulty}${'&type='+this.paramQuestion.type}`;

  //declaration necessaire au form
  paramQuestion!: any;/*soucis d'assignation de type */
  categoriesTab!: Category[];
  difficultiesTab!: Category[];
  typesTab!: Category[];

  ngOnInit(): any {
    this.paramQuestion = this.questionServ.setDefaultParameterForm();
    this.categoriesTab = this.questionServ.setCategoriesForm();
    this.difficultiesTab = this.questionServ.setDiffucltiesForm();
    this.typesTab = this.questionServ.setTypesForm();

    let url:string= `https://opentdb.com/api.php?amount=${this.paramQuestion.nbQuestions}`
    const urlApiVar = [
      {
        name: '&category=',
        value: this.paramQuestion.categorie,
      },
      {
        name: '&difficulty=',
        value: this.paramQuestion.difficulty
      },
      {
        name: '&type=',
        value: this.paramQuestion.type
      }
    ];

    
   let apiVars = urlApiVar.forEach(apiVar => {
        if (apiVar.value !== null) {
          console.log('dans la boucle :', apiVar.name + apiVar.value)
          url = url + apiVar.name + apiVar.value;
          // return (apiVar.name + apiVar.value)
        } else {
          url = url
        }
      });
    
    console.log("url de l'API :",url)
  
    
};
// queyionAPI:string=`https://opentdb.com/api.php?amount=${this.paramQuestion.nbQuestions}${'&category='+this.paramQuestion.categorie.value}${'&difficulty='+this.paramQuestion.difficulty}${'&type='+this.paramQuestion.type}`



onSubmit() {
  throw new Error('Method not implemented.');
};
}
