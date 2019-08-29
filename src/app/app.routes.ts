import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AuthService } from './services/auth.service';

// Components
import { LoginComponent } from './components/login/login.component'
import { DashBoardComponent } from './components/dashboard/dashboard.component'

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home',
        component: DashBoardComponent,
        canActivate: [AuthService]
    },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', component: LoginComponent }
];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);