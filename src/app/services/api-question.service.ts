import { Injectable } from '@angular/core';
import { Choice } from '../models/choice.interface.';
import { ParamQuestions } from '../models/param-question.model';

@Injectable({
  providedIn: 'root'
})
export class ApiQuestionService {

  // ⬇ CONSTITUTION DE L'ADRESSE API ⬇

  baseUrlApi: string = `https://opentdb.com/api.php?`/*adresse dédier au tretement plus bas */
  urlDefautApi: string = `https://opentdb.com/api.php?amount=10`/*adresse par defaut si l'on ne passe pas par parametre */

  urlApiVar: Choice[] = [];/*declaration de ma variable qui va contenir les elements necessaire à la modification de l'URL "baseUrlApi" à envoyer*/
 
  getParamQuestion(
    nb: ParamQuestions["nbQuestions"],
    cat: ParamQuestions["category"],
    lvl: ParamQuestions["difficulty"],
    type: ParamQuestions["type"]) {/*catégorie necessaire à l'URL provenant de ParametreComonent */
    this.urlApiVar = [
      {
        name: 'amount=',
        value: nb
      },
      {
        name: '&category=',
        value: cat,
      },
      {
        name: '&difficulty=',
        value: lvl
      },
      {
        name: '&type=',
        value: type
      }
    ]
  };

  urlConstructor() {
    this.urlApiVar.forEach(el => {/* bouclage sur les éléments de la variable urlApiVar et assemblage de ces dernier si il ne sont pas vide*/
      if (el.value !== null) {
        this.baseUrlApi = this.baseUrlApi + el.name + el.value;
      } else {
        this.baseUrlApi = this.baseUrlApi;
      }
      return this.baseUrlApi;
    });
  };

  setUrlApi(): string {/* retourne l'URL complete a envoyer soit celle par defaut soit la construite par parametre*/
    this.urlConstructor();
    if (this.baseUrlApi === `https://opentdb.com/api.php?`) {
      return this.urlDefautApi
    } else {
      return this.baseUrlApi
    }
  }
}
