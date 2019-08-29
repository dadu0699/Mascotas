import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UsuarioService } from './usuario.service';

@Injectable()
export class AuthService implements CanActivate {

    constructor(
        private _usuarioService: UsuarioService,
        private _router: Router,
    ) { }

    canActivate() {
        if (this._usuarioService.verifyUser()) {
            return true;
        } else {
            this._router.navigate(['']);
            return false;
        }
    }
}
