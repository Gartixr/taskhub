import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';

export const routes: Routes = [
    {
        path: 'board',
        loadChildren: () => import('./features/board/board.routes').then(m => m.BOARD_ROUTES)
    },
    {
        path: '',
        redirectTo: 'board',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'board',
    }
];

export const appRouting  = [provideRouter(routes, withComponentInputBinding())];
