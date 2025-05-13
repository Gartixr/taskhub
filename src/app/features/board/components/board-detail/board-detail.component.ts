import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-detail',
  imports: [],
  templateUrl: './board-detail.component.html',
  styleUrl: './board-detail.component.scss'
})
export class BoardDetailComponent implements OnInit {
  boardId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.boardId = this.route.snapshot.paramMap.get('id')!;
    console.log('Board ID:', this.boardId);
  }

}
