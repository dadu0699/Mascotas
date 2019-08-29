import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { Mascota } from '../../models/mascota';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioMascota } from 'src/app/models/usuarioMascota';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/css/home.css']
})
export class DashBoardComponent implements OnInit, OnDestroy {
    public titulo: string;
    public usuario: Usuario;
    public idMascota: number;
    public mascota: Mascota;
    public mascotas: Mascota[];

    public subscription: Subscription;

    constructor(
        private _usuarioService: UsuarioService
    ) {
        this.titulo = 'Mascotas';
        this.usuario = this._usuarioService.getUser();
        this.idMascota = 0;
        this.mascota = new Mascota(0, '', '', 0, 0, 0);
        this.mascotas = [];
    }

    ngOnInit() {
        const source = interval(2500);
        this.subscription = source.subscribe(val => this.disminuir());

        let usuarioMascotaList: UsuarioMascota[] = [];
        usuarioMascotaList = JSON.parse(localStorage.getItem('usuarioMascota'));
        usuarioMascotaList.forEach(element => {
            if (element.usuario.idUsuario == this.usuario.idUsuario) {
                this.mascotas = element.mascota;
            }
        });
    }

    ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
    }

    onSubmit() {
        this.idMascota++;
        let mascota = new Mascota(this.idMascota, this.mascota.nombre, this.mascota.tipo, 100, 100, 100);
        this.mascotas.push(mascota);
        this.mascota.nombre = '';
    }

    disminuir() {
        this.mascotas.forEach(element => {
            if (element.salud > 0) {
                element.salud -= 1;
            }

            if (element.felicidad > 0) {
                element.felicidad -= 1;
            }

            if (element.higiene > 0) {
                element.higiene -= 1;
            }
        });
        this.perdurarMascotas();
    }

    aumentarSalud(idMascota: number) {
        this.mascotas.forEach(element => {
            if (element.idMascota == idMascota) {
                if (element.tipo == 'Perro') {
                    if (element.salud < 100) {
                        element.salud += 5;
                    }
                } else if (element.tipo == 'Gato') {
                    if (element.salud < 100) {
                        element.salud += 6;
                    }
                } else if (element.tipo == 'Búho') {
                    if (element.salud < 100) {
                        element.salud += 5;
                    }
                } if (element.tipo == 'Conejo') {
                    if (element.salud < 100) {
                        element.salud += 2;
                    }
                }
            }

            if (element.salud > 100) {
                element.salud = 100;
            }
        });
    }

    aumentarFelicidad(idMascota: number) {
        this.mascotas.forEach(element => {
            if (element.idMascota == idMascota) {
                if (element.tipo == 'Perro') {
                    if (element.felicidad < 100) {
                        element.felicidad += 5;
                    }
                } else if (element.tipo == 'Gato') {
                    if (element.felicidad < 100) {
                        element.felicidad += 2;
                    }
                } else if (element.tipo == 'Búho') {
                    if (element.felicidad < 100) {
                        element.felicidad += 4;
                    }
                } if (element.tipo == 'Conejo') {
                    if (element.felicidad < 100) {
                        element.felicidad += 4;
                    }
                }
            }

            if (element.felicidad > 100) {
                element.felicidad = 100;
            }
        });
    }

    aumentarHigiene(idMascota: number) {
        this.mascotas.forEach(element => {
            if (element.idMascota == idMascota) {
                if (element.tipo == 'Perro') {
                    if (element.higiene < 100) {
                        element.higiene += 5;
                    }
                } else if (element.tipo == 'Gato') {
                    if (element.higiene < 100) {
                        element.higiene += 1;
                    }
                } else if (element.tipo == 'Búho') {
                    if (element.higiene < 100) {
                        element.higiene += 3;
                    }
                } if (element.tipo == 'Conejo') {
                    if (element.higiene < 100) {
                        element.higiene += 6;
                    }
                }
            }

            if (element.higiene > 100) {
                element.higiene = 100;
            }
        });
    }

    eliminarMascota(idMascota: number) {
        let index: number;

        this.mascotas.forEach(element => {
            if (element.idMascota == idMascota) {
                index = this.mascotas.indexOf(element);
            }
        });

        if (index !== -1) {
            this.mascotas.splice(index, 1);
        }
    }

    perdurarMascotas() {
        let usuarioMascota: UsuarioMascota = new UsuarioMascota(this.usuario, this.mascotas);
        let usuarioMascotaList: UsuarioMascota[] = JSON.parse(localStorage.getItem('usuarioMascota'));

        if (typeof usuarioMascotaList !== 'undefined' && usuarioMascotaList.length > 0) {
            usuarioMascotaList.forEach(element => {
                if (element.usuario.idUsuario == this.usuario.idUsuario) {
                    element.mascota = usuarioMascota.mascota;
                } else {
                    usuarioMascotaList.push(usuarioMascota);
                }
            });
        } else {
            usuarioMascotaList.push(usuarioMascota);
        }

        localStorage.removeItem('usuarioMascota');
        localStorage.setItem('usuarioMascota', JSON.stringify(usuarioMascotaList));
    }

    logOut() {
        this.perdurarMascotas();
        localStorage.removeItem('user');
    }
}
