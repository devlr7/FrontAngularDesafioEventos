import { Evento } from './../evento/evento.model';
import { Usuario } from './../usuario/usuario.model';

export interface Meucarrinho {

    FK_usuario: Usuario;
    FK_evento: Evento;
    qtdIngresso: number;

}