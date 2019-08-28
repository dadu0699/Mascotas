import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
    public usuarios: Usuario[];

    constructor(
        private _router: Router
    ) {
        this.usuarios = [
            new Usuario(1, 'admin', 'admin'),
            new Usuario(2, 'tamagotchi15', '1234'),
            new Usuario(3, 'pou2019', '2019'),
            new Usuario(4, 'usuario4', 'usuario4'),
            new Usuario(5, 'estudiante1', 'Ipc2_')
        ];
    }

    saveStorage(res) {
        const message = res.message;
        if (message === 'correct login') {
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('cart', JSON.stringify([]))
            this._router.navigate(['/home']);
            location.reload();
        } else {
            return false;
        }
    }

    authenticate(nombre: string, contrasena: string) {
        const user = {
            nombre: nombre,
            contrasena: contrasena
        };
        const json = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });


        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre && usuario.contrasena === contrasena) {
                this._router.navigate(['/home']);


                /*return this._http.post(this.url + 'login', json, { headers: headers })
                    .map(res => res.json());*/
            }
        }
    }

    verifyUser(): boolean {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    }
}