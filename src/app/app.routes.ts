import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component'
import { DashBoardComponent } from './components/dashboard/dashboard.component'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: DashBoardComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);