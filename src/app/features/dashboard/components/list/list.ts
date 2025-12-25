import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.html'
})
export class ListComponent {

  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  addItem() {
    this.items = [
      ...this.items,
      { id: Date.now(), name: 'New Item' }
    ];
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  logRender(id: number) {
    console.log('Rendering item:', id);
    return '';
  }
}
