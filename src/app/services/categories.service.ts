import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesChoice: Category[] = [
    {
        name: "Aléatoire",
        value : null
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
]
}
