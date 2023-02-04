import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  types: Category[] = [
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
}
