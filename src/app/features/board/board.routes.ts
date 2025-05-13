import { Routes } from '@angular/router';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardDetailComponent } from './components/board-detail/board-detail.component';

export const BOARD_ROUTES: Routes = [
  { path: '', component: BoardListComponent },
  { path: ':id', component: BoardDetailComponent },
  { path: '**', redirectTo: '' }
];