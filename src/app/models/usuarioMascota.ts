import { Usuario } from './usuario';
import { Mascota } from './mascota';

export class UsuarioMascota {
    constructor(
        public usuario: Usuario,
        public mascota: Mascota[]
    ) { }
}