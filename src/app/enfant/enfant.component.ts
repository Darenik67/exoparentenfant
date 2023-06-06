import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {


  @Input() card: any;
  @Output() remove = new EventEmitter<void>();

  removeCard(): void {
    this.remove.emit();
  }
}