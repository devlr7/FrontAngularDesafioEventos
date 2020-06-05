import { Casadeshow } from './../casadeshow/casadeshow.model';

export interface Evento {

    nome: string;
    descricao: string;
    dtEvento: Date;
    qtdade_ingressos: number;
    preco: number;
    imagemEncoded: string;
    FK_casaDeShow: Casadeshow;

}