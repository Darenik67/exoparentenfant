import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  cards = [
    { nom: 'Rachid', age: 40, hobby: 'mecanique' },
    { nom: 'Marcos', age: 45, hobby: 'linge' },
    { nom: 'Bob', age: 22, hobby: 'Peinture' }
  ];

  removeCard(index: number): void {
    this.cards.splice(index, 1);
  }
}