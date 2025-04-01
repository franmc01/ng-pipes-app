import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic-pipes',
    title: 'Pipes basicos',
    loadComponent: () => import('./pages/basic/basic.component').then(m => m.BasicComponent)
  },
  {
    path: 'custom-pipes',
    title: 'Pipes no comunes',
    loadComponent: () => import('./pages/custom/custom.component').then(m => m.CustomComponent)
  },
  {
    path: 'numbers-pipes',
    title: 'Pipes numericos',
    loadComponent: () => import('./pages/numbers/numbers.component').then(m => m.NumbersComponent),
  },
  {
    path: 'uncommon-pipes',
    title: 'Pipes no comunes',
    loadComponent: () => import('./pages/uncommon/uncommon.component').then(m => m.UncommonComponent),
  },
  {
    path: '**',
    redirectTo: 'basic-pipes'
  }
];
