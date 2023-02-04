import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  lvl: Category[] = [
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
  ]
}
