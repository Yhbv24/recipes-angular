import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>My First Angular 2 App</h1>
  <ul *ngFor="let recipe of recipes">
    <li>Title: {{recipe.title}}</li>
    <li>Ingredients: {{recipe.ingredients}}</li>
    <li>Cooking Instructions: {{recipe.instructions}}</li>
  </ul>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Fish', 'Fish, spices', 'Cook in the oven'),
    new Recipe('Dog', 'Dog, spices', 'Roast over open flame'),
    new Recipe('Bird', 'Bird, honey', 'Bake in a tandoor oven'),
    new Recipe('Hamster', 'Hamster, chili sauce', 'Best eaten raw')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) {}
}
