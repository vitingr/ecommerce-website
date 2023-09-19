import { arCondicionadoFilter, aspiradorFilter, cellphoneFilter, geladeiraFilter, lavaLoucasFilter, maquinaLavarFilter, monitorFilter, notebookFilter, smartWatchFilter, tecladoFilter, tvFilter } from "@constants";
import { createAcessorio, createArCondicionado, createAspirador, createCellphone, createGeladeira, createLavaLoucas, createMaquinaLavar, createMonitor, createNotebook, createSmartWatch, createTV, createTeclado } from "./admin";

export const options = {
  "refrigerator": geladeiraFilter,
  "air-conditioner": arCondicionadoFilter,
  "dishwasher": lavaLoucasFilter,
  "washmachine": maquinaLavarFilter,
  "vacuum": aspiradorFilter,
  "cellphone": cellphoneFilter,
  "monitor": monitorFilter,
  "keyboard": tecladoFilter,
  "notebook": notebookFilter,
  "smartWatch": smartWatchFilter,
  "television": tvFilter,
};

export const createOptions = {
  "refrigerator": createGeladeira,
  "air-conditioner": createArCondicionado,
  "dishwasher": createLavaLoucas,
  "washmachine": createMaquinaLavar,
  "vacuum": createAspirador,
  "cellphone": createCellphone,
  "monitor": createMonitor,
  "keyboard": createTeclado,
  "notebook": createNotebook,
  "smart-watch": createSmartWatch,
  "television": createTV,
  "gadget": createAcessorio
}