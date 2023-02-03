import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesChoice: Category[] = [
    {
        name: "Aléatoire",
        id: ""
    },
    {
        name: "Culture général",
        id: 9
    },
    {
        name: "Sport",
        id: 21
    },
    {
        name: "Histoire",
        id: 23
    },
    {
        name: "Art",
        id: 25
    },
    {
        name: "Manga",
        id: 31
    },
]
}
