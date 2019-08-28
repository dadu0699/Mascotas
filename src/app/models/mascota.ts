export class Mascota {
    constructor(
        public idMascota: number,
        public nombre: string,
        public tipo: string,
        public salud: number,
        public felicidad: number,
        public higiene: number
    ) { }
}