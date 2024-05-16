import { Endpoins } from "../commons/constants/endpoins.constant";
import { pathRequest } from "../commons/helpers/axios";

export const likeCoffee = (id_coffee: any) => pathRequest(`${Endpoins.LIKE_COFFEE}/${id_coffee}`)