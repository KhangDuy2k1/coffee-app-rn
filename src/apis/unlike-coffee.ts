import { Endpoins } from "../commons/constants/endpoins.constant";
import { pathRequest } from "../commons/helpers/axios";

export const unLikeCoffee = (id_coffee: any): Promise<any> => pathRequest(`${Endpoins.UNLIKE_COFFEE}/${id_coffee}`)