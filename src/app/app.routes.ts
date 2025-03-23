import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { TasksListComponent } from './features/tasks/pages/tasks-list/tasks-list.component';
import { HomeComponent } from './layout/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksListComponent },
  { path: '**', redirectTo: '' }, // Ruta por defecto
];