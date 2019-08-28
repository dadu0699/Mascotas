import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../../../assets/css/login.css']
})
export class LoginComponent implements OnInit {
    public titulo: string;
    public usuario: Usuario;
    public usuarios: Usuario[];

    constructor(
        private _router: Router
    ) {
        this.titulo = 'Iniciar sesión';
        this.usuario = new Usuario(0, '', '');
        this.usuarios = [
            new Usuario(1, 'admin', 'admin'),
            new Usuario(2, 'tamagotchi15', '1234'),
            new Usuario(3, 'pou2019', '2019'),
            new Usuario(4, 'usuario4', 'usuario4'),
            new Usuario(5, 'estudiante1', 'Ipc2_')
        ];
    }

    ngOnInit() {
    }

    onSubmit() {
        for (let usuario of this.usuarios) {
            if (usuario.nombre === this.usuario.nombre && usuario.contrasena === this.usuario.contrasena) {
                this._router.navigate(['/home']);
            }
        }
    }
}
