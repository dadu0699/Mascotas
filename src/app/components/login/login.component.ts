import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../../../assets/css/login.css']
})
export class LoginComponent implements OnInit {
    public titulo: string;
    public usuario: Usuario;

    constructor(
        private _usuarioService: UsuarioService
    ) {
        this.titulo = 'Iniciar sesión';
        this.usuario = new Usuario(0, '', '');
    }

    ngOnInit() {
    }

    onSubmit() {
        this._usuarioService.authenticate(this.usuario.nombre, this.usuario.contrasena)
    }
}
