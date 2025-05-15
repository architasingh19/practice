import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ListItem {
  id : string;
  value : string
}
@Component({
  selector: 'app-sortable-list',
  templateUrl: './sortable-list.component.html',
  styleUrls: ['./sortable-list.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class SortableListComponent {
  newItem : string = "";
  items : ListItem[] = []
  
  addItem(){
    if(this.newItem.trim()){
      const addItem : ListItem = {
        id : `item-$(this.items.length)`,
        value : this.newItem.trim()
      } 
      this.items.push(addItem);
      this.newItem = "";
    }
  }
  sortAscending(){
    this.items.sort((a,b) => a.value.localeCompare(b.value));
  }
  sortDescending(){
    this.items.sort((a,b) => b.value.localeCompare(a.value));
  }
}
