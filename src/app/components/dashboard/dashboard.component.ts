import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

import { Mascota } from '../../models/mascota';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/css/home.css']
})
export class DashBoardComponent implements OnInit, OnDestroy {
    public titulo: string;
    public idMascota: number;
    public mascota: Mascota;
    public mascotas: Mascota[];

    public subscription: Subscription;

    constructor(
    ) {
        this.titulo = 'Mascotas';
        this.idMascota = 0;
        this.mascota = new Mascota(0, '', '', 0, 0, 0);
        this.mascotas = [];
    }

    ngOnInit() {
        const source = interval(5000);
        this.subscription = source.subscribe(val => this.disminuir());
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
            if (element.tipo == 'Perro') {
                if (element.salud >= 10) {
                    element.salud -= 10;
                } else {
                    element.salud = 0;
                }

                if (element.felicidad >= 10) {
                    element.felicidad -= 10;
                } else {
                    element.felicidad = 0;
                }

                if (element.higiene >= 10) {
                    element.higiene -= 10;
                } else {
                    element.higiene = 0;
                }
            } else if (element.tipo == 'Gato') {
                if (element.salud >= 12) {
                    element.salud -= 12;
                } else {
                    element.salud = 0;
                }

                if (element.felicidad >= 4) {
                    element.felicidad -= 4;
                } else {
                    element.felicidad = 0;
                }

                if (element.higiene >= 2) {
                    element.higiene -= 2;
                } else {
                    element.higiene = 0;
                }
            } else if (element.tipo == 'Búho') {
                if (element.salud >= 10) {
                    element.salud -= 10;
                } else {
                    element.salud = 0;
                }

                if (element.felicidad >= 8) {
                    element.felicidad -= 8;
                } else {
                    element.felicidad = 0;
                }

                if (element.higiene >= 6) {
                    element.higiene -= 6;
                } else {
                    element.higiene = 0;
                }
            } if (element.tipo == 'Conejo') {
                if (element.salud >= 4) {
                    element.salud -= 4;
                } else {
                    element.salud = 0;
                }

                if (element.felicidad >= 8) {
                    element.felicidad -= 8;
                } else {
                    element.felicidad = 0;
                }

                if (element.higiene >= 12) {
                    element.higiene -= 12;
                } else {
                    element.higiene = 0;
                }
            }
        });
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
}
