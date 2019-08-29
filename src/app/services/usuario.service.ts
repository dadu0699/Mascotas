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

    getUser() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user;
    }

    saveStorage(usuario: Usuario) {
        if (usuario != null) {
            localStorage.setItem('user', JSON.stringify(usuario));
            if (localStorage.getItem('usuarioMascota') === null) {
                localStorage.setItem('usuarioMascota', JSON.stringify([]))
            }
            this._router.navigate(['/home']);
        } else {
            return false;
        }
    }

    authenticate(nombre: string, contrasena: string) {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === nombre && usuario.contrasena === contrasena) {
                this.saveStorage(usuario);
                return true;
            }
        }
        return false;
    }

    verifyUser(): boolean {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    }
}