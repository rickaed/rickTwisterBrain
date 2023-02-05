import { Injectable } from '@angular/core';
import { Choice } from '../models/choice.interface.';
import { ParamQuestions } from "../models/param-question.model";
@Injectable({
  providedIn: 'root'
})
export class QuestionParameterService {
  // ⬇ TABLEAU DE CHOIX POUR LE FORMULAIRE PARAMETRE ⬇
  categoriesChoice: Choice[] = [
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

  difficltyChoice: Choice[] = [
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

  typeChoice: Choice[] = [
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
  ]

  // ⬇ DEFINITION PAR DEFAUT DU FORMULAIRE PARAMETRE ⬇

  setDefaultParameterForm() {/* le formulaire par défaut */
    return {
      nbQuestions: 2,
      type: "multiple",
      categorie: null,
      difficulty: null,
    }
  };

  setCategoriesForm() {
    return this.categoriesChoice
  };

  setDiffucltiesForm() {
    return this.difficltyChoice
  };

  setTypesForm() {
    return this.typeChoice
  };

 
}


