import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-board-list',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.scss'
})
export class BoardListComponent implements OnInit {

  newBoardTitle: string = '';
  boards: {id: number, name: string}[] = [];
  board!: {id: number, name: string};

  ngOnInit() {
    this.boards = [
      { id: 1, name: 'Board 1' }, 
      { id: 2, name: 'Board 2' },
      { id: 3, name: 'Board 3' }
    ]
  }

  addBoard() {
    if (this.newBoardTitle.trim()) {
      this.boards.push({
        id: this.boards.length + 1,
        name: this.newBoardTitle});
      this.newBoardTitle = '';
    }
  }
}
