import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bandeja',
    pathMatch: 'full'
  },
  {
    path: 'bandeja',
    loadChildren: () =>
      import('./features/bandeja/bandeja.routes')
        .then(m => m.BANDEJA_ROUTES)
  }
];
