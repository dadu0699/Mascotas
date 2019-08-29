import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import { appRouting, appRoutingProviders } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
import { DashBoardComponent } from './components/dashboard/dashboard.component'

// Services
import { AuthService } from './services/auth.service';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [
    appRoutingProviders,
    AuthService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
