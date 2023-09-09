import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { MouseEventHandler } from "react";

export interface destaqueSm {
  handleClick?: MouseEventHandler<HTMLButtonElement>
  title: string;
  subtitle: string;
  foto: string;
}

export interface sidebar {
  type: String;
}

export interface catalogo {
  type: String;
}

export interface optionsCreateProduct {
  image: String;
  name: String;
  url: String;
}

export interface getInterface {
  request?: Request;
  params: Params;
}

export interface destaquesGadgets {
  foto: string;
  title: string;
}

export interface destaquesInfoCellphone {
  title: string;
  description: string;
  photo: string;
  link: string;
}

export interface FormState {
  nome: string;
  descricao: string;
  preco: number;
  desconto: number;
  cor: string;
  modelo: string;
  capacidade: number;
  voltagem: string;
  numeroPortas: string;
  display: string;
  puxador: string;
  recursos: string;
  photo: string;
  classe: string;
  tecnologia: string;
  linha: string;
  linhaUltra: string;
  ciclo: string
}